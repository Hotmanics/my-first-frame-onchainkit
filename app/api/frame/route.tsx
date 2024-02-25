import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { address, abi } from '../../../test';
import { baseSepolia } from 'viem/chains';
import { createPublicClient, http } from 'viem';

const providerURL = "https://base-sepolia.g.alchemy.com/v2/sDRzGJOS6oVi8Yj00eB4gYIKmRc6kVI-";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  
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

    tokenURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
  
    let result = await fetch(tokenURI);
    let json = await result.json();

    json.image = json.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    
    jsons.push(json);
  }

  let paramaters = '';
  
  for (let i = 0; i < jsons.length; i++) {
    paramaters += `nftName${i}=${encodeURI(jsons[i].name)}&`;
    paramaters += `nftDescription${i}=${encodeURI(jsons[i].description)}&`;
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
        src: `${NEXT_PUBLIC_URL}/api/og?${paramaters}` //nftName=${encodeURI(json.name)}&nftDescription=${ encodeURI(json.description)}&nftImage=${json.image.replace("ipfs://", "https://ipfs.io/ipfs/")}` //`${json.image.replace("ipfs://", "https://ipfs.io/ipfs/")}`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';