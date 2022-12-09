const textTruncate = (maxLength: number, input: string): string => {
  if (input?.length > maxLength) {
    return `${input?.substr(0, maxLength)}...`
  }
  return input
}

export default textTruncate
