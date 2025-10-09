export function ellipsify(text: string, length: number) {
  if (length < 1) {
    throw "ellipsify() only accepts lengths of 1 or greater.";
  }

  if (text.length <= length) {
    return text;
  }

  const truncatedText = text.substring(0, length - 1);
  const endsOnSpace = truncatedText.at(text.length - 1) === " ";

  if (!endsOnSpace) {
    let textTruncatedToSpace = truncatedText.substring(
      0,
      truncatedText.lastIndexOf(" "),
    );

    while (textTruncatedToSpace.length > length) {
      textTruncatedToSpace = textTruncatedToSpace.substring(
        0,
        textTruncatedToSpace.lastIndexOf(" "),
      );
    }

    return textTruncatedToSpace + "…";
  }

  return truncatedText + "…";
}
