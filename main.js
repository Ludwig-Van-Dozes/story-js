

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = `It was 94 fahrenheit outside, so :insertx: ${xItem}  went for a walk. When they got to :inserty: ${yItem}, they stared in horror for a few moments, then  :insertz: ${zItem}. Bob saw the whole thing, but was not surprised — :insertx: ${xItem} weighs 300 pounds, and it was a hot day.`

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
var insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"]
var insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"]
let newStory = storyText.replace(insertX, )

let xItem = randomValueFromArray(insertX)
let yItem = randomValueFromArray(insertY)
let zItem =  randomValueFromArray(insertZ)



    
function result() {

  if(customName.value !== '') {
    const name = replace(storyText["Bob"], customName.value);

  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
  }
  story.textContent = 
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
