    // import axios from "axios";  
document.addEventListener("alpine:init", () => { 
    Alpine.data("MostpopularModel", () => {
        return {
          cars: [],
          newCar: {
            color: '',
            make: '',
            model: '',
            isEditing: false,
            reg_number: ''
          },
          mostPopularModel: {},
          fetchCars() {
            axios.get(`https://cars-crud-api.onrender.com/api/listcars`)
                .then(response => {
                    this.cars = response.data;  
                    this.cars = [...this.cars];
                })
                .catch(error => {
                    this.message = 'Error fetching cars!';
                });
              
        },
        saveCar() {
          if (this.isEditing) {
            // Update the existing car
            axios.put(`https://cars-crud-api.onrender.com/cars/${this.newCar.reg_number}`, this.newCar)
              .then(response => {
                // Update the car in the local state
                const index = this.cars.findIndex(car => car.reg_number === this.newCar.reg_number);
                this.cars[index] = response.data;
                this.resetForm();
              })
              .catch(error => {
                console.error('Error updating car:', error);
              });
          } else {
            // Add a new car
            axios.post(`https://cars-crud-api.onrender.com/cars`, this.newCar)
              .then(response => {
                this.cars.push(response.data);
                this.resetForm();
              })
              .catch(error => {
                console.error('Error adding car:', error);
              });
          }
        },

        editCar(car) {
          this.newCar = { ...car };
          this.isEditing = true;
        },
          
          createCar() {
            this.cars.push({ ...this.newCar });
            this.fetchCars();
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


     

      
      
    