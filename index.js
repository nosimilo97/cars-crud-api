
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({extended: false }))
app.use(express.json())
app.use(express.static("public"));
app.use(cors())



    const cars = [
     {
        "color": "white",
        "make": "Volkswagen",
        "model": "Polo",
        "reg_number": "CL 61045"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CY 16875"
      },  {
        "color": "orange",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CK 32655"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "EcoSport",
        "reg_number": "CL 11318"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Micra",
        "reg_number": "CJ 16103"
      },  {
        "color": "orange",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CL 42789"
      },  {
        "color": "blue",
        "make": "Volkswagen",
        "model": "Jetta",
        "reg_number": "CA 46977"
      },  {
        "color": "white",
        "make": "Volkswagen",
        "model": "Polo",
        "reg_number": "CY 25661"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Micra",
        "reg_number": "CY 35475"
      },  {
        "color": "white",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CY 54886"
      },  {
        "color": "white",
        "make": "Toyota",
        "model": "Hilux",
        "reg_number": "CJ 16455"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CK 57166"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Fiesta",
        "reg_number": "CL 77790"
      },  {
        "color": "blue",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CY 98904"
      },  {
        "color": "white",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CF 75599"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CA 5510"
      },  {
        "color": "blue",
        "make": "Ford",
        "model": "Focus",
        "reg_number": "CF 75586"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CA 46137"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CK 22692"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CF 33543"
      },  {
        "color": "red",
        "make": "Volkswagen",
        "model": "Touran",
        "reg_number": "CA 94890"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CY 82252"
      },  {
        "color": "blue",
        "make": "Toyota",
        "model": "Yaris",
        "reg_number": "CL 9538"
      },  {
        "color": "white",
        "make": "Nissan",
        "model": "Juke",
        "reg_number": "CF 62002"
      },  {
        "color": "orange",
        "make": "Ford",
        "model": "Fiesta",
        "reg_number": "CJ 67577"
      },  {
        "color": "blue",
        "make": "Ford",
        "model": "Ranger",
        "reg_number": "CA 77852"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Hilux",
        "reg_number": "CY 52435"
      },  {
        "color": "blue",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CL 76173"
      },  {
        "color": "red",
        "make": "Toyota",
        "model": "Tazz",
        "reg_number": "CL 38315"
      },  {
        "color": "orange",
        "make": "Toyota",
        "model": "Corolla",
        "reg_number": "CK 41166"
      }
    ];


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

    app.get('/api/cars', (req, res) => {
        const mostPopular = mostPopularModel(cars);
        res.json({
            mostPopularModel: mostPopular
             });
      });


      app.post('/api/cars', (req, res) => {
        const car = req.body;
                cars.push(car);
        res.status(201).json(car);
      });


app.delete('/api/cars/:reg_number', (req, res) => {
  const { reg_number } = req.params;
  const carIndex = cars.findIndex(car => car.reg_number === reg_number);

  if (carIndex !== -1) {
    const deletedCar = cars.splice(carIndex, 1);
    res.status(200).json(deletedCar);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});


app.put('/cars/:reg_number', (req, res) => {
  const reg_number = req.params.reg_number;
  const updatedCar = req.body;
  const index = cars.findIndex(car => car.reg_number === reg_number);

  if (index !== -1) {
      cars[index] = updatedCar;
      res.status(200).json(updatedCar);
  } else {
      res.status(404).json({ message: "Car not found" });
  }
});


app.get('/api/listcars', (req, res) => {
  res.status(200).json(cars);
});


      app.listen(3002, function () {
        console.log('Example app listening on port 3002!');
        
    })