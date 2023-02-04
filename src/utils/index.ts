export const generateCharacters:any = () => {
  const arr = new Uint32Array(1);
  return `${window.crypto.getRandomValues(arr)[0]}`;
};