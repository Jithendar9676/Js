// for loop

let nums=[1,2,3,4,5,6,7]

for(e of nums){
    console.log(e)
}
for(const key in nums){
    console.log(nums[key]);
    
}
let val="jithendar Reddy"
for(e of val){
    console.log(e);
    
}

const map=new Map()
map.set("name","jithendar")
map.set("age","24")
map.set("salary","20000")

for(e of map){
    console.log(e)
}
for([key,value] of map){
    console.log(key,value)
}

const obj={
    id:1,
    user:"jithendar",
    password:"739283"
}

// for(e of obj){
//     console.log(e) //TypeError:obj is not iterable
// }

for(key in obj){
    console.log(`${key} : ${obj[key]}`)
}

const aray=[4,84,2,4,6,2,67,9]

aray.forEach((item)=>{
   console.log(item);
    
})

aray.forEach((item,index,array)=>{
console.log(item,index,array);

})
const cars=[
    {id:1,car:"swift",model:2022,amount:"5lakhs"},
    {id:2,car:"panch",model:2002,amount:"10lakhs"},
    {id:3,car:"skoda",model:2023,amount:"15lakhs"}
]

cars.forEach((item)=>{
    console.log(item.car)
})


