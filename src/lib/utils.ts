export function toTitleCase(sentence: string): string {
  const words = sentence.split(" ");
  return words
    .map((word) => word.at(0)?.toUpperCase() + word.substring(1))
    .join(" ");
}
