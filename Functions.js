// // Functions 


const add=function adding(...num){
    return num;
}

console.log(add(6328,732897,98398));

const hi =()=>{
    return "hi"
}



console.log(hi())

const hello=()=>("hello")
console.log(hello())

const hey=()=>({name:"user"});

console.log(hey());


(function test(){
    console.log("testing iiff function")
})();

(()=>{
console.log("another testing")
})();
((world)=>{
    console.log(`Hi world , ${world}`)
})("earth");

let val1=10
let val2=20
function addnum(num1,num2){
    let total=num1+num2
    return total
}

let results=addnum(val1,val2)
let results2=addnum(53,73)