export function useUtil() {
  const isNullOrEmpty = (value: unknown): boolean => {
    return value === null || value === undefined || value === ''
  }

  return { isNullOrEmpty }
}
