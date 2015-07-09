Object.prototype.inObj = 1;
 
function A()
{
    this.inA = 2;
}
 
A.prototype.inAProto = 3;

function B()
{
    this.inB = 4;
}

B.prototype = new A;            // Hook up A into B's prototype chain
B.prototype.constructor = B;

B.prototype.inBProto = 5;
 
x = new B;
console.log(x.inObj + ', ' + x.inA + ', ' + x.inAProto + ', ' + x.inB + ', ' + x.inBProto);
