import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { address, abi } from '../../../test';
import { baseSepolia } from 'viem/chains';
import { createPublicClient, http } from 'viem';

const providerURL = "https://base-sepolia.g.alchemy.com/v2/sDRzGJOS6oVi8Yj00eB4gYIKmRc6kVI-";

// const publicClient = createPublicClient({
//   chain: baseSepolia,
//   transport: http(providerURL as string),
// });



async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT', allowFramegear: true });
  
  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  // if (message?.input) {
  //   text = message.input;
  // }

  // let tokenURI = '';
  
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

  
  // if (message?.button === 1) {
  //   try {
  //     tokenURI = (await publicClient.readContract({
  //       address: address as `0x${string}`,
  //       abi,
  //       functionName: "tokenURI",
  //       args: [BigInt(0)]
  //     })) as string
  //   } catch (e) {
  //     console.log(e);
  //   }
    
  //   return new NextResponse(
  //     getFrameHtmlResponse({
  //       buttons: [
  //         { 
  //           label: tokenURI
  //          }
  //       ],
  //       image: {
  //         src: `${NEXT_PUBLIC_URL}/park-1.png`,
  //       },
  //       postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
  //     }),
  //   )
  // }

  // if (message?.button === 3) {
  //   return NextResponse.redirect(
  //     'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
  //     { status: 302 },
  //   );
  // }

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
