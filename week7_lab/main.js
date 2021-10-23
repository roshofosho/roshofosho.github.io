/*** Object Constructors ***/
function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.image = "elephant.jpg";
  this.image_alt = "Elephant Body by Icons Producer from the Noun Project";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.image_alt = "An adorable little dog with big ears and orange fur";
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image = "tiger.jpg";
  this.image_alt = "cute tiger by Vectors Market from the Noun Project";
}

/*** Global Variables ***/
let animals = [new Elephant(), new Dog(), new Tiger()];
let names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Elephant, Dog, or Tiger with a random name and random age
function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Elephant) 
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Tiger) 
  {
    return new Tiger(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  return getRandomIndex(5);
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}