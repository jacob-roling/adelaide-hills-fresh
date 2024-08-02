import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4);

export default function useID() {
  const id = nanoid();
  return (str) => {
    return `${id}-${str}`;
  };
}
