if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
       return arr.indexOf(item);
    },

    sum : function(arr) {
        var l = arr.length, i=0, n=0;
        while(i<l)n+=arr[i++];
        return n;
    },

    remove : function(arr, item) {
      for (var i = 0; arr.length > i; i++) {
        if (arr[i] === item){
          arr.splice(i, 1);        }
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = arr.length; i--;) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }

        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr; 
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
    var count = 0, i = 0;
      for (i; arr.length > i; i++) {
        if(arr[i] === item){
          count += 1;
        };
      }
    return count;
    },

    duplicates : function(arr) {

    // var count = 0, i = 0;
    //   for (i; arr.length > i; i++) {
    //     if(arr[i] === item){
    //       count += 1;
    //     };
    //   }

    //   return count;
    },

    square : function(arr) {
      var count = 0, i = 0;
      for (i; arr.length > i; i++) {
        if(arr[i] === item){
          count += 1;
        };
      }

      return count;

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
