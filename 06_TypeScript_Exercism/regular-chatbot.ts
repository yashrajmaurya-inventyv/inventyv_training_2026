export function isValidCommand(command: string): boolean {
  return command.toLowerCase().startsWith('chatbot');
}


export function removeEmoji(message: string): string {
  const emojiRegex = new RegExp("emoji\\d+", "g");

  return message.replace(emojiRegex, "");
}


export function checkPhoneNumber(number: string): string {
  const phoneRegex = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;

  if (phoneRegex.test(number)) {
    return "Thanks! You can now download me to your phone.";
  } else {
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}


export function getURL(userInput: string): string[] | null {
  const urlRegex = /\b(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,}\b/gi;
  return userInput.match(urlRegex) || [];
}


export function niceToMeetYou(fullName: string): string {
  const regex = /^(.*?),\s*(.*)$/;

  return fullName.replace(regex, "Nice to meet you, $2 $1");
}