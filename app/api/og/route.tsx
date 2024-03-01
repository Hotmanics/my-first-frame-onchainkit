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
            height: '62.5%',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: '#d1d1d1',
              width: '20%',
              height: '100%',
              margin: 5,
            }}
          >
            <div style={{ fontSize: 28, margin: 5 }}>{nftName0}</div>

            <img src={nftImage0!} width={180} height={180} style={{ margin: 5 }} />

            <div style={{ margin: 5, fontSize: 22 }}>{nftDescription0}</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: '#d1d1d1',
              width: '20%',
              height: '100%',
              margin: 5,
            }}
          >
            <div style={{ fontSize: 28, margin: 5 }}>{nftName1}</div>

            <img src={nftImage1!} width={180} height={180} style={{ margin: 5 }} />

            <div style={{ margin: 5, fontSize: 22 }}>{nftDescription1}</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: '#d1d1d1',
              width: '20%',
              height: '100%',
              margin: 5,
            }}
          >
            <div style={{ fontSize: 28, margin: 5 }}>{nftName2}</div>

            <img src={nftImage2!} width={180} height={180} style={{ margin: 5 }} />

            <div style={{ margin: 5, fontSize: 22 }}>{nftDescription2}</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: '#d1d1d1',
              width: '20%',
              height: '100%',
              margin: 5,
            }}
          >
            <div style={{ fontSize: 28, margin: 5 }}>{nftName3}</div>

            <img src={nftImage3!} width={180} height={180} style={{ margin: 5 }} />

            <div style={{ margin: 5, fontSize: 22 }}>{nftDescription3}</div>
          </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            fontSize: 24,
            margin: 15,
          }}
        >
          *Live NFT data fetched directly from Base Sepolia!
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />

          <span
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              alignContent: 'center',
              fontSize: 42,
              margin: 5,
            }}
          >
            ATX DAO
          </span>

          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />

          <span
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              alignContent: 'center',
              fontSize: 30,
              margin: 5,
            }}
          >
            requesting a
          </span>

          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />

          <span
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 54,
              margin: 5,
            }}
          >
            Base Builder Grant
          </span>

          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />

          <p
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 36,
              margin: 5,
            }}
          >
            Dynamic Ad Space using NFTs
          </p>

          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />

          <p
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 36,
              margin: 5,
            }}
          >
            Bringing Local & Online Businesses Onchain
          </p>

          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
          <img
            src="https://nftstorage.link/ipfs/bafkreiezuhtnp6hdndo5wldpz34nflst3lxnc3ymhi6ta6bwlhruiqzbu4"
            width={54}
            height={54}
            style={{ margin: 5 }}
          />
        </div>
      </div>
    ),
    {
      width: 1100,
      height: 1100,
    },
  );
}
