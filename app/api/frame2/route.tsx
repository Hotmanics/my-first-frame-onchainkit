import { FrameRequest, getFrameMessage, getFrameMetadata, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "Continue",
          },
          {
            label: "View Testnet Site",
          }
        ],
        image: {
          src: `${NEXT_PUBLIC_URL}/screenshotOne.png`,
        },
        postUrl: `${NEXT_PUBLIC_URL}/api/frame3`,
      }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';