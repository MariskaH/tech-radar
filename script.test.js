import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

// Import or define the updateHeading function
import { updateHeading } from './script'; 

// Setup a mock HTML structure before each test
beforeEach(() => {
  document.body.innerHTML = '<h1 id="myHeading">Original Heading</h1>';
});

// Test the updateHeading function
test('updateHeading should update the heading content', async () => {
  // Log elements to test selector
  const element = screen.getByText('Original Heading');
  console.log(element);

  // Expect the element to be in the document
  expect(element).toBeInTheDocument();

  // Call the updateHeading function
  await updateHeading('New heading');

  // Get the updated element
  const updatedElement = screen.getByText('New heading');
  console.log(updatedElement);

  // Expect the updated element to be in the document
  expect(updatedElement).toBeInTheDocument();
});