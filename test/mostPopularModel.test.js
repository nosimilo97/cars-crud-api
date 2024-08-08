
import assert from "assert";
import mostPopularModel from "../mostPopularModel.js";

describe('mostPopularModel', () => {
    it('should return the most popular model', () => {
      const cars = [
        { model: 'Toyota' },
        { model: 'Honda' },
        { model: 'Toyota' },
        { model: 'Ford' },
        { model: 'Toyota' }
      ];
  
      const result = mostPopularModel(cars);
      assert.strictEqual(result, 'Toyota');
    });
  
    it('should return null if no cars are provided', () => {
      const cars = [];
  
      const result = mostPopularModel(cars);
      assert.strictEqual(result, null);
    });
  
    it('should handle multiple models with the same frequency', () => {
      const cars = [
        { model: 'Toyota' },
        { model: 'Honda' },
        { model: 'Toyota' },
        { model: 'Honda' }
      ];
  
      const result = mostPopularModel(cars);
      assert.ok(result === 'Toyota' || result === 'Honda');
    });
   
    it('should return the only model if there is only one car', () => {
      const cars = [
        { model: 'Mazda' }
      ];
  
      const result = mostPopularModel(cars);
      assert.strictEqual(result, 'Mazda');
    });
  });