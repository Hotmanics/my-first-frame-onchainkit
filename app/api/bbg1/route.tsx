import { FrameRequest, getFrameMessage, getFrameMetadata, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "What's this look like?",
          },
        ],
        image: {
          src: `${NEXT_PUBLIC_URL}/bbg1.png`,
    aspectRatio: '1:1',

        },
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
      }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';