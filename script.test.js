// Using Jest with jsdom
/** * 
 @jest-environment jsdom 
 * */
 

function updateHeading(newHeading) {
    const { updateHeading } = require('./script'); // Adjust the path as needed
  let element = document.getElementById('myHeading');
  if (element) {
    element.innerText = newHeading;
  }
}


