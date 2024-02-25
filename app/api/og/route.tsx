import { ImageResponse } from 'next/server';

// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const nftName0 = searchParams.get('nftName0');
    const nftDescription0 = searchParams.get('nftDescription0');
    const nftImage0 = searchParams.get('nftImage0');

    const nftName1 = searchParams.get('nftName1');
    const nftDescription1 = searchParams.get('nftDescription1');
    const nftImage1 = searchParams.get('nftImage1');

    const nftName2 = searchParams.get('nftName2');
    const nftDescription2 = searchParams.get('nftDescription2');
    const nftImage2 = searchParams.get('nftImage2');

    const nftName3 = searchParams.get('nftName3');
    const nftDescription3 = searchParams.get('nftDescription3');
    const nftImage3 = searchParams.get('nftImage3');

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
        
        <div style={{display:'flex', height: '62.5%', width: '100%', alignContent: 'center', justifyContent: 'center'}}>

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#d1d1d1', width: '20%', height: '100%', margin: 5}}>
            <div style={{fontSize: 28, margin: 5}}>
            {nftName0}
            </div>
            
            <img src={nftImage0!} width={180} height={180} style={{margin: 5}}/>            

            <div style={{margin: 5, fontSize: 18}}>
            {nftDescription0}
            </div>
        </div>

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#d1d1d1', width: '20%', height: '100%', margin: 5}}>
            <div style={{fontSize: 28, margin: 5}}>
            {nftName1}
            </div>
            
            <img src={nftImage1!} width={180} height={180} style={{margin: 5}}/>            

            <div style={{margin: 5, fontSize: 18}}>
            {nftDescription1}
            </div>
        </div>

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#d1d1d1', width: '20%', height: '100%', margin: 5}}>
            <div style={{fontSize: 28, margin: 5}}>
            {nftName2}
            </div>
            
            <img src={nftImage2!} width={180} height={180} style={{margin: 5}}/>            

            <div style={{margin: 5, fontSize: 18}}>
            {nftDescription2}
            </div>
        </div>

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#d1d1d1', width: '20%', height: '100%', margin: 5}}>
            <div style={{fontSize: 28, margin: 5}}>
            {nftName3}
            </div>
            
            <img src={nftImage3!} width={180} height={180} style={{margin: 5}}/>            

            <div style={{margin: 5, fontSize: 18}}>
            {nftDescription3}
            </div>
        </div>

        </div>
        
        <p style={{textAlign: 'center', justifyContent: 'center',
            alignContent: 'center', fontSize: 18, margin: 15}}>*Live NFT data fetched from Base Sepolia inserted into this frame!</p>

<p style={{textAlign: 'center', justifyContent: 'center',
            alignContent: 'center', fontSize: 18,  margin: 5}}>Imagine using this dynamic frame in every cast that you make!</p>

<p style={{textAlign: 'center', justifyContent: 'center',
            alignContent: 'center', fontSize: 18,  margin: 5}}>Reload this frame to see the NFTs sorted differently!</p>
    </div>

    
    ),
    {
      width: 1200,
      height: 780,
    },
  );
}