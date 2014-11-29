function makeArmy() {

  var shooters = [];
  for(var i=0; i<10; i++) {
    var shooter = function() { // a shooter is a function
      console.log( i);  // which should alert it's number
    };
    shooters.push(shooter);   
  }
  return shooters;
}
 
var army = makeArmy();

var shooter = army[0]; // first shooter

shooter(); // alerts 10, should be 0

shooter = army[5]; // 5th shooter
shooter(); // alerts 10, should be 5
