export const slugify = (input: string): string => {
  let normalizedSlug = punctuation.reduce((acc, punctuation) => {
    return acc.replaceAll(punctuation, "");
  }, input);

  normalizedSlug = normalizedSlug.replaceAll(" ", "-").replaceAll(/-+/gi, "-");

  for (const entry of Object.entries(specialCharacter)) {
    const [charToMatch, charToReplaceWith] = entry;

    normalizedSlug = normalizedSlug.replaceAll(charToMatch, charToReplaceWith);
  }

  const words = normalizedSlug.split(separator);

  return words
    .filter((word) => !wordsToRemove.includes(word) && word)
    .join(separator)
    .toLowerCase();
};

const specialCharacter = {
  ä: "a",
  ü: "u",
  ö: "o",
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
  "“",
  "’",
];
