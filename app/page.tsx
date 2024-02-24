import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import MyPage from './MyPage';

const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'We love BOAT',
      },
    ],
    image: 'https://build-onchain-apps.vercel.app/release/v-0-17.png',
    postUrl: 'https://build-onchain-apps.vercel.app/api/frame',
  });

  export const metadata: Metadata = {
    manifest: '/manifest.json',
    other: {
      ...frameMetadata
    },
  };

export default function Home() {
  return <MyPage/>
}
