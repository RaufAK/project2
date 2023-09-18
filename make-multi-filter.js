'use strict';

function MakeMultiFilter(originalArray){
    const arrayFilterer = function (filterCriteria = undefined, callback = undefined){
        if (arrayFilterer.currentArray === undefined){
            arrayFilterer.currentArray = originalArray;
        }
        if (Array.isArray(originalArray)) {
            if ((typeof filterCriteria === "function")) {
                arrayFilterer.currentArray =
                    arrayFilterer.currentArray.filter(e => filterCriteria(e));
            } else {
                return arrayFilterer.currentArray;
            }
        }
        if (typeof callback === 'function'){
            callback.call(originalArray, arrayFilterer.currentArray);
        }
        return arrayFilterer;
    };
    return arrayFilterer;
}
/*function filterCriteria(element){
    let currentArray = originalArray;

    if(currentArray.includes(element) === true){
        currentArray.remove(currentArray[i]);
        return false;
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
    return true;
}**/

/*function callback(currentArray) {
    this.originalArray = originalArray;
}**/