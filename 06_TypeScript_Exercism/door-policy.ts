//


export function frontDoorResponse(line: string): string {
  return line[0];
}


export function frontDoorPassword(word: string): string {
  let output = "";
  output += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}


export function backDoorResponse(line: string): string {
  line = line.trim();
  return line[line.length - 1];
}


export function backDoorPassword(word: string): string {
  let output = "";
  output += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output + ", please";
}