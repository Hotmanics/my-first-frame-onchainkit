export const nftCardStyle: any = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  background: '#d1d1d1',
  width: '23%',
  height: '100%',
  margin: 5,
};

export function generateNftCard(
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
