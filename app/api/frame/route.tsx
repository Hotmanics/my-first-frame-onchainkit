import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { address, abi } from '../../../test';
import { baseSepolia } from 'viem/chains';
import { createPublicClient, http } from 'viem';

const providerURL = "https://base-sepolia.g.alchemy.com/v2/sDRzGJOS6oVi8Yj00eB4gYIKmRc6kVI-";

async function renderAllTokens() {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(providerURL as string),
  });
  
  const jsons = [];

  for (let i = 0; i < 4; i++) {
    let tokenURI = '';
    try {
      tokenURI = (await publicClient.readContract({
        address: address as `0x${string}`,
        abi,
        functionName: 'tokenURI',
        args: [BigInt(i)],
      })) as string;
    } catch (err) {
      console.error(err);
    }

    tokenURI = tokenURI.replace("ipfs://", "https://nftstorage.link/ipfs/");
  
    let result = await fetch(tokenURI);
    let json = await result.json();

    json.image = json.image.replace("ipfs://", "https://nftstorage.link/ipfs/");
    
    jsons.push(json);
  }

  let paramaters = '';
  
  for (let i = 0; i < jsons.length; i++) {
    paramaters += `nftName${i}=${encodeURI(jsons[i].name)}&`;
    paramaters += `nftDescription${i}=${encodeURI(jsons[i].description)}&`;
    if (i === jsons.length - 1)
    paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}`;
  else
  paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}&`;
}

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: "Continue",
        }
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/api/og?${paramaters}`
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame2`,
    }),
  );
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  console.log(body);

    return await renderAllTokens();

  
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';