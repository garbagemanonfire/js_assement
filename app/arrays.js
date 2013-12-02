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

    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr; 
    },

    curtail : function(arr) {

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

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
