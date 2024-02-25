import { ImageResponse } from 'next/server';

// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url);

  return new ImageResponse(
    (
    <div style={{
              background: '#F0944D',
              width: '100%',
              height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
            }}>
        
        <p style={{textAlign: 'center', justifyContent: 'center',
            alignContent: 'center', fontSize: 32}}>*Actual NFTs fetched from Base Sepolia!</p>
    </div>
    ),
    {
      width: 1200,
      height: 780,
    },
  );
}