import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { NEXT_PUBLIC_URL } from './config';
import { getNftMetadata } from './functions/getNftMetadata';
import { shuffle, parameterizeNftMetadata } from './functions/utils';

export async function generateMetadata() {
  let jsons = await getNftMetadata();
  jsons = shuffle(jsons);
  let parameters = parameterizeNftMetadata(jsons);

  let res = getFrameMetadata({
    buttons: [
      {
        label: 'What are you going on about?',
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/api/titleCard?${parameters}`,
      aspectRatio: '1.91:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/key-points`,
  });

  return {
    title: 'yes',
    description: 'lfg',
    openGraph: {
      images: [`${NEXT_PUBLIC_URL}/api/titleCard?${parameters}`],
    },
    other: {
      ...res,
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
