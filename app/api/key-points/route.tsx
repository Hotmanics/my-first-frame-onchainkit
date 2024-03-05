import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { getNftMetadata } from '../../functions/getNftMetadata';
import { shuffle, parameterizeNftMetadata } from '../../functions/utils';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: "What's this look like?",
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/key-points.png`,
        aspectRatio: '1.91:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/dynamic-frame-demo-route`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
