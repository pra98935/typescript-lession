'use strict'
import { suminterface1 } from "./suminterface"; 
class Importexa implements suminterface1{
      constructor(){
            
      }

      sum(a:number,b:number):number{
      	var c:number=a+b;
      	return c;
      }
}

var vobj = new Importexa();
var result:number = vobj.sum(5,6);
console.log(result);
