if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // var x = num.toString(2);
        // x = String("00000000" + x).slice(-8);
        // var y = bit - 8;
        // var z = x.charAt(y);
        // return parseInt(z);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num){
      var x = num.toString(2);
      return String("00000000" + x).slice(-8);
    },

    multiply: function(a, b) {
      a *= 10000;
      b *= 10000;
      return (a * b)/(10000 * 10000);
    }
  };
});

