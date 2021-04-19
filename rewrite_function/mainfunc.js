
function main (a = 2, b = 3, c) { 
    let sumres = sum(a,b);
    if(typeof c === 'function'){
       return c(sumres);
    } else {
        return sumres;
    }
}

function sum (a, b) { 
        return a + b; 
}