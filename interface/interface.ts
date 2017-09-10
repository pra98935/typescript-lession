interface calculation { 
   sum(a:number,b:number,c:number,e:number); 

   substract(a:number,b:number,c:string); 
} 

class BaseClass2 implements calculation{
      
      constructor(){ }

      sum(a:number,b:number){
            var c:number = a+b;
            return(c);
      }

      substract(a:number,b:number){
            var c:number = a-b;
            return(c);
      }


}


var vobBaseClass2 = new BaseClass2();

console.log(vobBaseClass2.sum(5,6));

console.log(vobBaseClass2.substract(9,6));
