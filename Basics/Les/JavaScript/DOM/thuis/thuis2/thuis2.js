// Exercise
// 1. Use querySelectorAll to select all the keys elements Ok!!!
const keys = document.querySelectorAll(".key");
console.log(keys);
// 2. Use querySelectorAll to select all the audio elements Ok!!!
// const audios = document.querySelectorAll('audio');
// console.log(audios);
// 3. Create keydown event listener on document to log the key value of the key that was pressed. (e.key) and add a class of playing to the key element that was pressed
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  // const key = document.querySelector(`.key[data-key="${e.key}"]`)
  // key.classList.add('playing')
  switch (e.key.toUpperCase()) {
    case "A":
      playSound("65");
      break;
    case "S":
      playSound("83");
      break;
    case "D":
      playSound("68");
      break;
    case "F":
      playSound("70");
      break;
    case "G":
      playSound("71");
      break;
    case "H":
      playSound("72");
      break;
    case "J":
      playSound("74");
      break;
    case "K":
      playSound("75");
      break;
    case "L":
      playSound("76");
      break;
  }
});

// 4. Create a function that takes a key value as an argument (data-key="75") OK
// 5. Loop through the audio elements and play the audio element that has the same data-key as the key value passed to the function

function playSound(keyValue) {
  const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
  console.log(audio);
  audio.play();
}

// 6. Create switch statement that calls the function with the correct key value for each key

// 7. Test it out
