const err=(msg, status)=>{
    let e = new Error(msg);
    e.status = status
    return e
}

const result =   err("heoo", '052');
console.log(result);