/**
 * Wheater a given array of integers is sorted in ascending order
 */


const checkSortedArray =(arr)=>{
    for(let i =0 ; i< arr.length-1; i++){
        if(arr[i+1]<arr[i]){
            return false;
        }
    }
    return true;
}

console.log(checkSortedArray([70,8,9,74,89]));


