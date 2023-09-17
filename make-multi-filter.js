'use strict';

var currentArray = [1,2,3];
function filterCriteria(element){


    // Probably a more proper way of going through indexes.
    for(let i = 0; i < currentArray.length-1; i++){
        if (element !== currentArray[i]){
            delete currentArray[i];
        }
    }


    //If the array has a set number of indexes
    // if(element !== 1) {
    //     delete currentArray[1];
    // }else if(element !== 2){
    //     delete currentArray[2];
    // }else if(element !== 3){
    //     delete currentArray[3];
    // }else {
    //     return currentArray;
    // }
}

function callback() {}