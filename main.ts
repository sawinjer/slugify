export const slugify = (input: string): string => {
  const normalizedSlug = punctuation
    .reduce((acc, punctuation) => {
      return acc.replaceAll(punctuation, separator);
    }, input)
    .replaceAll(" ", "-")
    .replaceAll(/-+/gi, "-");

  const words = normalizedSlug.split(separator);

  return words
    .filter((word) => !wordsToRemove.includes(word) && word)
    .join(separator)
    .toLowerCase();
};

const separator = "-";
const wordsToRemove = [
  "a",
  "an",
  "as",
  "at",
  "before",
  "but",
  "by",
  "for",
  "from",
  "is",
  "in",
  "into",
  "like",
  "of",
  "off",
  "on",
  "onto",
  "per",
  "since",
  "than",
  "the",
  "this",
  "that",
  "to",
  "up",
  "via",
  "with",
];
const punctuation = [
  "'",
  '"',
  "”",
  "'",
  "`",
  ",",
  ".",
  "_",
  ":",
  ";",
  "|",
  "{",
  "}",
  "[",
  "]",
  "+",
  "=",
  "*",
  "&",
  "%",
  "^",
  "$",
  "#",
  "@",
  "!",
  "~",
  "(",
  ")",
  "?",
  "<",
  ">",
  "/",
  "\\",
  "±",
  "§",
];
