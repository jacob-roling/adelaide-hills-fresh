export function useID() {
  const id = Math.random().toString(36).slice(2, 6);
  return (string) => `${string}-${id}`;
}
