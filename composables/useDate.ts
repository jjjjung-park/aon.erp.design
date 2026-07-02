export function useDate() {
  const format = (value: string | Date, pattern: string): string => {
    const date = value instanceof Date ? value : new Date(value)
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return pattern
      .replace('YYYY', String(y))
      .replace('MM', m)
      .replace('DD', d)
  }

  return { format }
}
