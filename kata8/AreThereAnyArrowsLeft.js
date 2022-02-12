//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
const anyArrows = arrows => {
    for (let i = 0; i < arrows.length; i++){
    if (!arrows[i]['damaged'])return true;
  }
  return false;
  }