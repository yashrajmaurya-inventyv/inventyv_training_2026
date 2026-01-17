


export function buildSign(occasion: string, name: string): string {
  return `Happy ${occasion} ${name}!`;
}



export function buildBirthdaySign(age: number): string {
  return age >= 50 ? 'Happy Birthday! What a mature fellow you are.' : 'Happy Birthday! What a young fellow you are.';
}



export function graduationFor(name: string, year: number): string {
  console.log(name, year);
  return `Congratulations ${name}!\nClass of ${year}`;
}



export function costOf(sign: string, currency: string): string {
  let sum = 20 + (sign.length * 2);
  return `Your sign costs ${sum}.00 ${currency}.`;
}