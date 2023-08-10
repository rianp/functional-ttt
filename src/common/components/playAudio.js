export function playAudio() {
  const audio = new Audio(process.env.PUBLIC_URL + "/cell.wav");
  audio.play();
}
