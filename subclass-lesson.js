function A()                        // Define super class
{
    this.x = 1;
}

A.prototype.DoIt = function()        // Define Method
{
    this.x += 1;
}

B.prototype = new A();                // Define sub-class
B.prototype.constructor = B;
function B()
{
    A.call(this);                    // Call super-class constructor (if desired)
    this.y = 2;
}

B.prototype.DoIt = function()        // Define Method
{
    A.prototype.DoIt.call(this);    // Call super-class method (if desired)
    this.y += 1;
}

b = new B();

console.log((b instanceof A) + ', ' + (b instanceof B) + '<BR/>');
b.DoIt();
console.log(b.x + ', ' + b.y);
