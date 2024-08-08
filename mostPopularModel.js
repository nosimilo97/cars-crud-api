 export default function mostPopularModel(cars) {
    const modelCounts = {};
  
    // Count the occurrences of each model
    cars.forEach(car => {
      if (modelCounts[car.model]) {
        modelCounts[car.model]++;
      } else {
        modelCounts[car.model] = 1;
      }
    });
  
    // Find the model with the highest count
    let mostPopular = null;
    let maxCount = 0;
  
    for (const model in modelCounts) {
      if (modelCounts[model] > maxCount) {
        mostPopular = model;
        maxCount = modelCounts[model];
      }
    }
  
    return mostPopular;
  }
