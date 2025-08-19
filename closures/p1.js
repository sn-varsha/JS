function fun1(){
    console.log("inside fun1()");
    function fun2(){
        console.log("inside fun2()");
    }
    return fun2;
}

exmp = fun1();
exmp();