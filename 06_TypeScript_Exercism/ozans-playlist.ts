export function removeDuplicates(playlist: string[]): string[] {
  let set = new Set(playlist);
  return Array.from(set);
}


export function hasTrack(playlist: string[], track: string): boolean {
  return playlist.includes(track);
}


export function addTrack(playlist: string[], track: string): string[] {
  let playlistSet = new Set(playlist);
  playlistSet.add(track);
  return Array.from(playlistSet);
}


export function deleteTrack(playlist: string[], track: string): string[] {
  let playlistSet = new Set(playlist);
  playlistSet.delete(track);
  return Array.from(playlistSet);
}


export function listArtists(playlist: string[]): string[] {
  console.log(playlist);
  let artist = new Set<string>();
  for (let i = 0; i < playlist.length; i++) {
    let arr = playlist[i].split(' - ');
    artist.add(arr[1]);
  }
  return Array.from(artist);
}