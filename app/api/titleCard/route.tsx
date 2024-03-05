import { ImageResponse } from 'next/server';
import { generateNftCard } from '../../functions/generateNftCard';
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

  const baseIconGroup: any = {
    display: 'flex',
    margin: '0px 5px',
  };

  const baseIconImg: any = <></>;
  // (
  //   <img
  //     src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
  //     width={32}
  //     height={32}
  //     style={{ margin: '0px 2px' }}
  //   />
  // );

  const textStyle: any = {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  };

  const atxDaoStyle: any = {
    fontSize: 62,
  };

  const baseBuilderGrantStyle: any = {
    fontSize: 66,
    color: 'blue',
    fontWeight: 'bold',
  };

  const baseBuilderGrantFinalStyle: any = { ...textStyle, ...baseBuilderGrantStyle };

  const atxDaoFinalStyle: any = { ...textStyle, ...atxDaoStyle };

  const isSeekingAStyle: any = {
    fontSize: 32,
  };

  const isSeekingAStyleFinal: any = {
    ...textStyle,
    ...isSeekingAStyle,
  };

  const liveDataStyle: any = {
    fontSize: 18,
  };

  const liveDataStyleFinal: any = {
    ...textStyle,
    ...liveDataStyle,
  };
  const bringingStyle: any = {
    fontSize: 28,
  };

  const bringingStyleFinal: any = {
    ...textStyle,
    ...bringingStyle,
  };

  const dynamicAdSpaceStyle: any = {
    fontSize: 28,
  };

  const dynamicAdSpaceStyleFinal: any = {
    ...textStyle,
    ...dynamicAdSpaceStyle,
  };

  const informationRowStyle: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-10px 0px',
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: '#F0944D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '60%',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {generateNftCard(nftName0, nftDescription0, nftImage0)}
          {generateNftCard(nftName1, nftDescription1, nftImage1)}
          {generateNftCard(nftName2, nftDescription2, nftImage2)}
          {generateNftCard(nftName3, nftDescription3, nftImage3)}
        </div>

        <p style={liveDataStyleFinal}>*Live NFT data fetched directly from Base Sepolia!</p>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', margin: '0px -50px' }}>
            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>

              <span style={atxDaoFinalStyle}>ATX DAO</span>

              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>

              <span style={isSeekingAStyleFinal}>is seeking a</span>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>

              <span style={baseBuilderGrantFinalStyle}>Base Builder Grant</span>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', margin: '0px -40px' }}>
            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
              <p style={dynamicAdSpaceStyleFinal}>Dynamic NFT Ad Space</p>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
              <p style={bringingStyleFinal}>Bringing Businesses Onchain</p>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
              <p style={dynamicAdSpaceStyleFinal}>Revenue Generation</p>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
              <p style={dynamicAdSpaceStyleFinal}>Open Sourced Implementation</p>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  );
}
