import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // if (message?.button === aNumber)

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'Demo',
          target: 'https://partnership-nfts-nextjs.vercel.app/',
        },
        {
          action: 'link',
          label: 'Github',
          target: 'https://github.com/ATXDAO/partnership-nfts',
        },
        {
          label: 'Continue',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/interface-demo-2.png`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/interface-demo-3`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
