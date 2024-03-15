export const useUpperName = (name?: string): string => {
  if (!name || name.trim() === '') {
    return ''
  }
  const [firstName, lastName] = name.trim().split(' ')

  const firstChar = firstName && firstName.length > 0 ? firstName[0] : ''
  const lastChar = lastName && lastName.length > 0 ? lastName[0] : ''

  return firstChar.toUpperCase() + lastChar.toLocaleUpperCase()
}
