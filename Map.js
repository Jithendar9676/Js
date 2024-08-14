//map ,filter , reduce
const testData=[34,5,63,74,783,6,4,5,3,45]

const mydata=testData.filter((item)=>{
    return item>=50;
})
// console.log(mydata);
const alldata=testData.map((item)=>{
   return item *10
}).map((item)=>{
   return item+3
}).filter((item)=>{
    return item<=100
})

// console.log(alldata)
const alldata1=testData.map((item)=>item *10)
.map((item)=> item+3)
.filter((item)=> item>=100)
console.log(alldata1)

const all=testData.reduce((acc,crt)=>{
return acc+crt
},0)

console.log("all ",all)