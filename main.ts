import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayFindMultiples(myArray: number[]) : Array<Number> {
    
        var array:number[];
      for(var i=0;i<myArray.length;++i)
      {
          if(myArray[i]%5==0||myArray[i]%10==0)
           array.push(myArray[i])
      }
      return array;
    }

    public arraySeparate(myArray: any) : Array<string>{
        var array1:string[];
        for(var i=0;i<myArray.length;++i)
        {
            if(typeof(myArray[i]=="string"))
            array1.push(myArray[i])
        }
        return array1;
    }

    public arraySplit(str:string) : Array<number>{
         var arr=str.split(",")
         var arr1=[];
         for(var i=0;i<arr.length;++i)
         {
            var num=parseInt(str[i]);
            var m= Math.floor(num/2)
                var flag=0;
                if(num==0||num==1)
                {
                    break;
                    
                }
                else{
                for(var i =2;i<=m;++i)
                {
                    if(num%i==0)
                    {  
                        flag=1;      
                        break; 
                    }
                }
                }
                if(flag==0)
                {
                    arr1.push(num)
                    
                }
         }
         return arr1;
    }

    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        myArray.reverse();
        return myArray;
      
    }

    public arrayReplace(myArray:any):Array<number>{
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%3===0)
                myArray[i] = 5;
        }
        return myArray;
    }

       
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



