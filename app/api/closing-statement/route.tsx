import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'Repository',
          target: 'https://github.com/Hotmanics/nft-partnership-frames',
        },
        {
          action: 'link',
          label: 'Website',
          target: 'https://atxdao.com',
        },
        {
          action: 'link',
          label: 'Warpcast',
          target: 'https://warpcast.com/~/channel/atxdao',
        },
        {
          action: 'link',
          label: 'Twitter',
          target: 'https://twitter.com/ATXDAO',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/closing-statement.png`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/closing-statement`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
