import { ImageResponse } from 'next/server';

// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const nftName = searchParams.get('nftName');
    const nftDescription = searchParams.get('nftDescription');
    const nftImage = searchParams.get('nftImage');

    
  return new ImageResponse(
    (
    <div style={{
              background: '#F0944D',
              width: '100%',
              height: '100%',
              padding: '50px 200px',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
            }}>
        
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'grey'}}>
            <div style={{fontSize: 18}}>
            {nftName}
            </div>
            
            <img src={nftImage!} width={106} height={106}/>            

            <div style={{fontSize: 11}}>
            {nftDescription}
            </div>
        </div>

    </div>
    ),
    {
      width: 600,
      height: 630,
    },
  );
}