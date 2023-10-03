// Create a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the query count for the endpoint
    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    // Check if the query count has reached the threshold (>= 5)
    if (queryCount >= 5) {
      throw new Error(`Endpoint load is high for ${endpoint.name}`);
    }
  } else {
    // If the endpoint is not in the weakMap, add it with a count of 1
    weakMap.set(endpoint, 1);
  }
}

// Example usage:
// Import the weakMap and queryAPI function in another file
// const { weakMap, queryAPI } = require('./yourModule');

// Call queryAPI with an endpoint
// const endpoint = {
//   protocol: 'http',
//   name: 'getUsers',
// };
// queryAPI(endpoint);
