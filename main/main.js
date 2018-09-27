// Write your cade below:

const main = require('../main/main');

 describe('main()',() => {
	  it ('should calculate the remainder', () => {
		 expect(main(10,4)).toBe(2); 
	  });  
};