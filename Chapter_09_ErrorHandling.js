function riskyOperation() {
  try {
    throw new Error('Something went wrong');
  } catch (err) {
    console.error('Caught:', err.message);
  }
}
riskyOperation();