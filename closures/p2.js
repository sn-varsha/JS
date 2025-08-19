function outerFunc(){
    let outerVar=10;
    function innerFunc(){
        console.log("OuterVar : ",outerVar);
    }
    return innerFunc;
}

exmp = outerFunc();
exmp();