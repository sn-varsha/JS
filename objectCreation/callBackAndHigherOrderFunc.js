function exmp(fun){
    fun(100,200);
}

function add(a,b){
    console.log(a+b);
}

exmp(add);
add(100,200);