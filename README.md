## Setup instructions.
Create a CRUD API APPLICATION:
where you will Create, Read, Update and Delete API application using Alpine.js, Axios, Node, and Express to perform various operations on car data.

## API endpoints

### To get most popular model
GET http://localhost:3002/api/cars HTTP/1.1

### To add new car on the list
POST http://localhost:3002/api/cars HTTP/1.1
Content-type: application/json

{
  "color":"red",
  "make": "VW",
  "model":" Polo-GTI",
  "reg_number": "CA 5550"
}


### To delete a car from the list

DELETE http://localhost:3002/api/cars/CL 61045 HTTP/1.1


### Used to get list of cars
GET http://localhost:3002/api/listcars HTTP/1.1


### Used to update the car
PUT http://localhost:3002/cars/CY 52435 HTTP/1.1
Content-type: application/json

 {
        "color": "orange",
        "make": "Toyota",
        "model": "Hilux",
        "reg_number": "CY 52435"
      }


## CHOSE A FUNCTION TO WORK WITH:
Most popular car model function, it should return most popular model.
T
function mostPopularModel(cars) {
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
      

## CREATE MOCHA TEST FOR THE FUNCTION YOU CHOSE

[![Build Status](https://img.shields.io/github/workflow/status/nosimilo97/cars-crud-api/tree/main)](https://github.com/nosimilo97/cars-crud-api/tree/main)


  
