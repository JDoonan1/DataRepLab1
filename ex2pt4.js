//pass 4 values
const ages = [25, 31, 42, 77];

//Calls a defined callback function on each element of an array, and returns an array that contains the results.
let PartD = ages.map((element)=>{
   if(element < 70){
    return element*2;
   } else{
    return element;
   }
});
console.log(PartD);


