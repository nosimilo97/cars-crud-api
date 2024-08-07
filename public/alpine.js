document.addEventListener("alpine:init", () => { 
    Alpine.data("MostpopularModel", () => {
        return {
            cars: [],
      newCar: { color: '', make: '', model: '',  reg_number: '' },
      mostPopularModel: { model: '' },
      
      fetchCars() {
        axios.get('http://localhost:3002/api/cars')
          .then(response => {
            this.cars = response.data;
          })
          .catch(error => {
            console.error('Error fetching cars:', error);
          });
      },

 createCar() { 
        axios.post('http://localhost:3002/api/cars', this.newCar)
          .then(response => {
            // this.cars.push(response.data);
            this.fetchCars();
            this.newCar = { color: '', make: '', model: '', year: '' };
          })
          .catch(error => {
            console.error('Error creating car:', error);
          });
      },

      getMostPopularModel() {
        axios.get('http://localhost:3002/api/cars')
          .then(response => {
            this.mostPopularModel = response.data;
          })
          .catch(error => {
            console.error('Error fetching most popular model:', error);
          });
      },

      deleteCar(reg_number) {
        axios.delete(`http://localhost:3002/api/cars/${reg_number}`)
            .then(() => {
                this.fetchCars();
            })
            .catch(error => {
                console.error('Error deleting car:', error);
            });
    },

init() {
        this.fetchCars();
      }
        }
    });
});


     

      
      
    