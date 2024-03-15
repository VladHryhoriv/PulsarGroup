export function useCreateEnum<T extends { [P in keyof T]: P }>(o: T): T {
  return o
}
