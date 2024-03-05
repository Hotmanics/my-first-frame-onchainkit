export const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function parameterizeNftMetadata(jsons: any) {
  let paramaters = '';

  for (let i = 0; i < jsons.length; i++) {
    paramaters += `nftName${i}=${encodeURI(jsons[i].name)}&`;
    paramaters += `nftDescription${i}=${encodeURI(jsons[i].description)}&`;
    if (i === jsons.length - 1) paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}`;
    else paramaters += `nftImage${i}=${encodeURI(jsons[i].image)}&`;
  }

  return paramaters;
}
