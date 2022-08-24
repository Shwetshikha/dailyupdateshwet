// Circle.radius = 2;
//use object literals //
//area property but read only//
//console.log(circle.area)

// first declare a circle object
const circle = {
    radius: 20,
    get area() {
        return Math.PI * this.radius * this.radius;         //for read only use "get" property

    }                       
};

console.log(circle.area);

//finding the area of a triangle//

const triangle = {
    base: 20,
    height: 40,
    get area() {
        return this.height * this.base / 2;
    }
};
console.log(triangle.area);