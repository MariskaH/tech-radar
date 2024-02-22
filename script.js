async function updateHeading(newHeading) {
  // Return promise instead of element
  return new Promise(async (resolve, reject) => {
    while (document.readyState !== 'complete') {
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    const element = document.getElementById('myHeading');
    if (!element) {
      reject(new Error('myHeading element not found'));
    }
    element.textContent = newHeading;
    // Resolve with updated element
    resolve(element);
  });
}

// Export function to be tested
export { updateHeading };