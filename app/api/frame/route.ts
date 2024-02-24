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
  
  let tokenMetadata = '';
  try {
    tokenMetadata = (await publicClient.readContract({
      address: address as `0x${string}`,
      abi,
      functionName: 'tokenURI',
      args: [0],
    })) as string;
  } catch (err) {
    console.error(err);
  }
  
  console.log({ tokenMetadata });

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: tokenMetadata,
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/park-1.png`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
