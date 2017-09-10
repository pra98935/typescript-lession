class DerivedClass{
      _engineName:string; 
      
      constructor(_engineName:string){  
            //this._engineName = "derived "+_engineName; 
            this._engineName = _engineName; 
      }

      multi(a:number,b:number){
            var c:number = a*b;
            return(c);
      }
}



class BaseClass extends DerivedClass{
      
      engineName:string; 
      
      constructor(engineName:string){ 
            super(engineName);
            this.engineName = engineName; 
            
      }
      
      enginef():void{
            console.log("void function "+this.engineName);
      }

      sum(a:number,b:number){
            var c:number = a+b;
            return(c);
      }

      substract(a:number,b:number){
            var c:number = a-b;
            return(c);
      }


}


var vobj = new BaseClass("HOnda");
vobj.enginef();
console.log(vobj.multi(4,5));


