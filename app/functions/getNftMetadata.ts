import { createPublicClient, http } from 'viem';
import { address, abi } from '../test';
import { baseSepolia } from 'viem/chains';

const providerURL = 'https://base-sepolia.g.alchemy.com/v2/sDRzGJOS6oVi8Yj00eB4gYIKmRc6kVI-';

export async function getNftMetadata() {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(providerURL as string),
  });

  let jsons = [];

  for (let i = 0; i < 4; i++) {
    let tokenURI = '';
    try {
      tokenURI = (await publicClient.readContract({
        address: address as `0x${string}`,
        abi,
        functionName: 'tokenURI',
        args: [BigInt(i)],
      })) as string;
    } catch (err) {
      console.error(err);
    }

    tokenURI = tokenURI.replace('ipfs://', 'https://nftstorage.link/ipfs/');

    let result = await fetch(tokenURI);
    let json = await result.json();

    json.image = json.image.replace('ipfs://', 'https://nftstorage.link/ipfs/');

    jsons.push(json);
  }

  return jsons;
}
