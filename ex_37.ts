function make_shirt(
  Size_large: string,
  Size_Medium: string,
  size_small: string,
  text_L: string,
  text_M: string,
  text_S: string
): any {

  console.log(
    "the size of the shirt on it " +
      Size_large +
      " \n\nthe message printed on it " +
      text_L
  );
  console.log(
    "the size of the shirt on it " +
      Size_Medium +
      " \n\nthe message printed on it " +
      text_M
  );
  console.log(
    "the size of the shirt on it " +
      size_small +
      " \n\nthe message printed on it " +
      text_S
  );
}

make_shirt(
  "Large",
  "Medium",
  "Small",
  "I love TypeScript",
  "I love TypeScript",
  "Metaverse"
);
