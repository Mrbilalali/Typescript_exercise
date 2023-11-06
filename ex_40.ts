function make_album(
  artist: string,
  title: string,
  numTracks?: number
): { artist: string; title: string; numTracks?: number } {
  const album: { artist: string; title: string; numTracks?: number } = {
    artist,
    title,
  };

  if (numTracks) {
    album.numTracks = numTracks;
  }

  return album;
}

const album1 = make_album("Atif Aslam", "Pakistani singer-songwriter");
const album2 = make_album("Abida Parveen",  "Pakistani singer", 12);
const album3 = make_album("Rahat Fateh Ali Khan", "Pakistani singer", 8);

console.log(album1);
console.log(album2);
console.log(album3);
