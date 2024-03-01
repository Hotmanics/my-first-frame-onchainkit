import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { address, abi } from '../test';
import { baseSepolia } from 'viem/chains';
import { createPublicClient, http } from 'viem';

const providerURL = 'https://base-sepolia.g.alchemy.com/v2/sDRzGJOS6oVi8Yj00eB4gYIKmRc6kVI-';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'What are you going on about?',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/bbg.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/bbg1`,
});

async function renderAllTokens() {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(providerURL as string),
  });

  let jsons = [];

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

    tokenURI = tokenURI.replace('ipfs://', 'https://nftstorage.link/ipfs/');

    let result = await fetch(tokenURI);
    let json = await result.json();

    json.image = json.image.replace('ipfs://', 'https://nftstorage.link/ipfs/');

    jsons.push(json);
  }

  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  jsons = shuffle(jsons);

  let paramaters = '';

  for (let i = 0; i < jsons.length; i++) {
    paramaters += `nftName${i}=${encodeURI(jsons[i].name)}&`;
    paramaters += `nftDescription${i}=${encodeURI(jsons[i].description)}&`;
    if (i === jsons.length - 1) paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}`;
    else paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}&`;
  }

  return `${NEXT_PUBLIC_URL}/api/og?${paramaters}`;
}

// export const metadata: Metadata = {
//   title: 'zizzamia.xyz',
//   description: 'LFG',
//   openGraph: {
//     title: 'zizzamia.xyz',
//     description: 'LFG',
//     images: [`${NEXT_PUBLIC_URL}/bbg.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

export async function generateMetadata() {
  return {
    title: 'yes',
    description: 'lfg',
    openGraph: {
      title: 'yes',
      description: 'LFG',
      images: [await renderAllTokens()],
    },
  };
}

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
