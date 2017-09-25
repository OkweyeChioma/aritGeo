const assert =require('chai').assert;
const myApp = require('../src/main.js');
describe("Array Progression",function(){
	describe('handle arithmetic progression',function(){
		it("should return Arithmetic as array progression for[3,5,7,9,11]",function(){
			assert.equal(myApp.aritGeo([3,5,7,9,11]), 'Arithmetic')
		});
		it("should return Arithmetic as array progression for [1,2,3,4,5]",function(){
			assert.equal(myApp.aritGeo([1,2,3,4,5]),'Arithmetic')
		});
		it("should return Arithmetic as array progression for [20,10,0,-10,-20,-30]",function(){
			assert.equal(myApp.aritGeo([20,10,0,-10,-20,-30]),'Arithmetic')
		});
	})
	describe('handle geometric progression',function(){
		it("should return Geometric as array progression for[1,2,4,16,32]",function(){
			assert.equal(myApp.aritGeo([1,2,4,8,16,32]), 'Geometric')
		});
		it("should return Geometric as array progression for [1,-2,4,-8]",function(){
			assert.equal(myApp.aritGeo([1,-2,4,-8]),'Geometric')
		});
		it("should return Geometric as array progression for [81,27,9,3]",function(){
			assert.equal(myApp.aritGeo([81,27,9,3]),'Geometric')
		});
	})


	describe('handle arrays without predefined progression',function(){
		it("should return -1  as array progression for[2,'e',6,8]",function(){
			assert.equal(myApp.aritGeo([2,'e',6,8]), -1)
		});
		it("should return -1 as array progression for [2,4,6,7,16]",function(){
			assert.equal(myApp.aritGeo([2,4,6,7,16]),-1)
		});

		it("should return -1 as array progression for[5,9,10,12]",function(){
			assert.equal(myApp.aritGeo(['a','b','c']),-1)
		});

	})

	describe('handle empty arrays', function(){
		it("should return 0  for[]",function(){
			assert.equal(myApp.aritGeo([]),0)
		});
	});

})