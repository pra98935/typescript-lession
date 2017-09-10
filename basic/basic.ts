class BasicExample{
    constructor(){
        console.log("Hello Team");
    }

    sum(a:number,b:number){
        let c:number = a+b;
        return(c);
    }
}

var Obj = new BasicExample();
var Result:number = Obj.sum(5,6);
console.log(Result);