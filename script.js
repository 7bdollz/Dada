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
  doctor:"docor",
  apple:"apull",
  food:"yum yum",
  mom:"momma",
  aeroplane:"aeyopane" 
};
let userInput = "";

translateButton.addEventListener("click",() => {
  userInput = inputField.value.toLowerCase(); // Convert input to lowercase
  let splitInput = userInput.split(" ");
  for (let i = 0; i < splitInput.length; i++) {
    if (words.hasOwnProperty(splitInput[i])) { // Check if the word is a key
      splitInput[i] = words[splitInput[i]]; // Replace with translation
    }
  }
  let output = splitInput.join(" ");
  outputField.value = output;
});
