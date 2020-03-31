"use strict";
let lesson = function(a){
    if (a - !String){
        alert('Аргумент не является строкой.');
    }
    if(a.length > 30) {
        a = a.substr(0, 30) + '...';
      }
    if (a - String){
        a = a.trim();
    }
};
lesson();
