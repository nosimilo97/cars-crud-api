    // import axios from "axios";  
document.addEventListener("alpine:init", () => { 
    Alpine.data("MostpopularModel", () => {
        return {
          cars: [],
          newCar: {
            color: '',
            make: '',
            model: '',
            reg_number: ''
          },
          mostPopularModel: {},
          
          createCar() {
            this.cars.push({ ...this.newCar });
            this.newCar = { color: '', make: '', model: '', reg_number: '' };
          },
          
          deleteCar(reg_number) {
            this.cars = this.cars.filter(car => car.reg_number !== reg_number);
          },

          getMostPopularModel() {
  if (this.cars.length === 0) {
    this.mostPopularModel = {};
    return;
  }
  const modelCount = this.cars.reduce((acc, car) => {
    acc[car.model] = (acc[car.model] || 0) + 1;
    return acc;
  }, {});
  const mostPopular = Object.entries(modelCount).reduce((a, b) => b[1] > a[1] ? b : a);
  this.mostPopularModel = { model: mostPopular[0] };
}

        }
    });
});


     

      
      
    