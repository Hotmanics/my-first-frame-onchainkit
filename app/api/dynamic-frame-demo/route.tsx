import { ImageResponse } from 'next/server';
import { generateNftCard } from '../../functions/generateNftCard';
import { getNftMetadata } from '../../functions/getNftMetadata';
import { shuffle, parameterizeNftMetadata } from '../../functions/utils';

// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET() {
  let jsons = await getNftMetadata();
  jsons = shuffle(jsons);
  // let parameters = parameterizeNftMetadata(jsons);

  // const { searchParams } = new URL(request.url);

  const nftName0 = jsons[0].name;
  const nftDescription0 = jsons[0].description;
  const nftImage0 = jsons[0].image;

  const nftName1 = jsons[1].name;
  const nftDescription1 = jsons[1].description;
  const nftImage1 = jsons[1].image;

  const nftName2 = jsons[2].name;
  const nftDescription2 = jsons[2].description;
  const nftImage2 = jsons[2].image;

  const nftName3 = jsons[3].name;
  const nftDescription3 = jsons[3].description;
  const nftImage3 = jsons[3].image;

  const textStyle: any = {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  };

  const atxDaoStyle: any = {
    fontSize: 56,
  };

  const atxDaoFinalStyle: any = { ...textStyle, ...atxDaoStyle };

  const liveDataStyle: any = {
    fontSize: 24,
  };

  const liveDataStyleFinal: any = {
    ...textStyle,
    ...liveDataStyle,
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

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={informationRowStyle}>
            <span style={atxDaoFinalStyle}>Dynamic Ad Space in a Frame utilizing NFTs.</span>
          </div>
        </div>
      </div>
    ),
  );
}
