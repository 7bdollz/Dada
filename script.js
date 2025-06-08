let inputField = document.querySelector("#userInput");
let outputField = document.querySelector("#userOutput");
let translateButton = document.querySelector("#uploadButton");

let words = {
  play: "pway",
  daddy: "dada",
  mum: "moma",
  brother: "bubba",
  sister: "sissy",
  blankets: "blankie",
  train: "choo choo",
  dog: "goggy",
  cat: "meow",
  car: "go go",
  pain: "owch",
  delicious: "yummy",
};
let userInput = "";

translateButton.addEventListener("click", () => {
  userInput = inputField.value.toLowerCase();
  let splitInput = userInput.split(" ");
  for (let i = 0; i < splitInput.length; i++) {
    for (let key in words) {
      if (splitInput[i] === key) {
        splitInput[i] = words[key];
      }
    }
  }
  let output = splitInput.join(" ");
  outputField.value = output;
  inputField.value = "";
});
