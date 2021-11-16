//Exercise 4

/*
1) Write a JavaScript function to check whether an 'input' is an array or not.

    Test Data:
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));
    false
    true
*/

function is_array(myInput){ 
    if(Array.isArray(myInput)){
        return true;
    }
    else{
        return false;
    }
}

function is_array2(myInput){
    return Array.isArray(myInput);
}

let returnedValue = is_array("mousato_agori");
console.log(returnedValue);

returnedValue = is_array([1,2,3]);
console.log(returnedValue);

returnedValue = is_array([1]);
console.log(returnedValue);

returnedValue = is_array(1);
console.log(returnedValue);

returnedValue = is_array2([1,2,3]);
console.log(returnedValue);

