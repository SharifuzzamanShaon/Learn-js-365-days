function count(num){
    console.log(num);
    const newNum = num - 1;
    if(newNum>0){
        count(newNum);
    }
}
count(4)
// console.log(count(4));