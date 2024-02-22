import { toBeInTheDocument } from '../../node_modules/@testing-library/jest-dom';
import { screen } from '../../node_modules/@testing-library/dom';

beforeEach(() => {
  document.body.innerHTML = '<h1 id="myHeading">Original Heading</h1>';
});

test('updateHeading should update the heading content', async () => {

  // Add async keyword to test function
  async () => {

    // Log elements to test selector
    const element = screen.getByText('Original Heading');
    console.log(element);

    expect(element).toBeInTheDocument();

    // Make sure updateHeading returns a promise
    await updateHeading('New heading'); 

    const updatedElement = screen.getByText('New heading');
    console.log(updatedElement);
    
    expect(updatedElement).toBeInTheDocument();

  }
});


