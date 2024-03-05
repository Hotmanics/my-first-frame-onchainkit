import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'Website',
          target: 'https://members.atxdao.com',
        },
        {
          action: 'link',
          label: 'Github',
          target: 'https://github.com/ATXDAO/nouns-monorepo',
        },
        {
          label: 'Continue',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/interface-demo-3.png`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/closing-statement`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
