function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

const magicianNames: string[] = [
  "David Blaine",
  "Lance Burton",
  "Shin Lim",
  "David Devant",
  "Apollo Robbins",
];

const greatMagicians = make_great(magicianNames);

console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
