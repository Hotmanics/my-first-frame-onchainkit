export const nftCardStyle: any = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  background: '#d1d1d1',
  width: '23%',
  height: '100%',
  margin: 5,
  borderRadius: '25px',
  padding: '5px',
};

export function generateNftCard(
  nftName: string | null,
  nftDescription: string | null,
  nftImage: string | null,
) {
  return (
    <div style={nftCardStyle}>
      <div style={{ fontSize: 22, margin: 0 }}>{nftName}</div>

      <img src={nftImage!} width={128} height={128} style={{ margin: 5, borderRadius: '25px' }} />

      <div style={{ margin: 5, fontSize: 19 }}>{nftDescription}</div>
    </div>
  );
}
