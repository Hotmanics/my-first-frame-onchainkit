import { ImageResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

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

  const baseIconImg: any = (
    <img
      src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
      width={32}
      height={32}
      style={{ margin: '0px 2px' }}
    />
  );

  const nftCardStyle: any = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: '#d1d1d1',
    width: '23%',
    height: '100%',
    margin: 5,
  };

  function generateNftCard(
    nftName: string | null,
    nftDescription: string | null,
    nftImage: string | null,
  ) {
    return (
      <div style={nftCardStyle}>
        <div style={{ fontSize: 13, margin: 0 }}>{nftName}</div>

        <img src={nftImage!} width={54} height={54} style={{ margin: 5 }} />

        <div style={{ margin: 5, fontSize: 11 }}>{nftDescription}</div>
      </div>
    );
  }

  const textStyle: any = {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  };

  const atxDaoStyle: any = {
    fontSize: 38,
  };

  const baseBuilderGrantStyle: any = {
    fontSize: 42,
    color: 'blue',
    fontWeight: 'bold',
  };

  const baseBuilderGrantFinalStyle: any = { ...textStyle, ...baseBuilderGrantStyle };

  const atxDaoFinalStyle: any = { ...textStyle, ...atxDaoStyle };

  const isSeekingAStyle: any = {
    fontSize: 20,
  };

  const isSeekingAStyleFinal: any = {
    ...textStyle,
    ...isSeekingAStyle,
  };

  const liveDataStyle: any = {
    fontSize: 12,
  };

  const liveDataStyleFinal: any = {
    ...textStyle,
    ...liveDataStyle,
  };
  const bringingStyle: any = {
    fontSize: 24,
  };

  const bringingStyleFinal: any = {
    ...textStyle,
    ...bringingStyle,
  };

  const onchain: any = {
    fontSize: 24,
    margin: '-5px 0px',
  };

  const onchainFinal: any = {
    ...textStyle,
    ...onchain,
  };

  const onchain2: any = {
    fontSize: 24,
    margin: '0px 0px',
  };

  const onchainFinal2: any = {
    ...textStyle,
    ...onchain2,
  };

  const dynamicAdSpaceStyle: any = { fontSize: 24, margin: '0px 0px' };

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

  const informationRowStyle2: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0px',
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
            height: '27.5%',
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

          <div style={{ display: 'flex', flexDirection: 'column', margin: '-40px -40px' }}>
            <div style={informationRowStyle2}>
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
              <p style={onchainFinal2}>Bringing</p>
            </div>

            <div style={informationRowStyle}>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>

              <p style={bringingStyleFinal}>Local & Online Businesses</p>
              <div style={baseIconGroup}>
                {baseIconImg}
                {baseIconImg}
              </div>
            </div>
            <div style={informationRowStyle}>
              <p style={onchainFinal}>Onchain</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 720,
      height: 720,
    },
  );
}
