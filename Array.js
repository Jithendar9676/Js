///Arrays

// let myArray=[2,3,5,76,2,9]

// console.log("main" ,myArray) // main [ 2, 3, 5, 76, 2, 9 ]
// console.log(typeof myArray) // object
// console.log(myArray[1]) //3
// console.log(myArray.indexOf(3)) //1
// console.log(myArray.includes(6)) // false
// console.log("push",myArray.push(10)) //push 7
// console.log(myArray) // [ 2, 3, 5, 76, 2, 9 ,10]
// console.log("pop",myArray.pop()) // pop 10
// console.log( myArray) //[ 2, 3, 5, 76, 2, 9 ]
// console.log("unshift",myArray.unshift(1)) // unshift 7
// console.log(myArray) //[ 1,2, 3, 5, 76, 2, 9 ]
// console.log("shift",myArray.shift()) //shift 1
// console.log(myArray) // [ 2, 3, 5, 76, 2, 9 ]
// console.log("join",myArray.join()) // join 2,3,5,76,2,9
// console.log(myArray) //[ 2, 3, 5, 76, 2, 9 ]
// console.log("slice",myArray.slice(1,3)) //slice [ 3, 5 ]
// console.log(myArray) //[ 2, 3, 5, 76, 2, 9 ]
// console.log("splice",myArray.splice(1,3)) // splice [ 3, 5, 76 ]
// console.log(myArray) // [ 2, 2, 9 ]



let marvel_heros=["Iron man","caption america","Hulk","Thor","Vision"]
let dc_heros=["Super man","bat man","Aquaman","flash"]
// concat add one array into another array
let addingArry =marvel_heros.concat(dc_heros)
 
console.log(addingArry) //[ 'Iron man', 'caption america', 'Hulk', 'Thor', 'Vision' ,"Super man","bat man","Aquaman","flash"]
// we use Spread and combine more two array in one Array
let combine=[...marvel_heros,...dc_heros]
console.log(combine)////[ 'Iron man', 'caption america', 'Hulk', 'Thor', 'Vision' ,"Super man","bat man","Aquaman","flash"]

let numAray=[253,73,93,[37,84,839],94,[34,83,[84,0,9,9],9]]

//flat method is used to neted Array to Array 
let flatAray=numAray.flat(Infinity)
console.log(flatAray) //[253, 73, 93, 37, 84, 839,94, 34, 83, 84,  0,  9,9,  9]

let a="jithendar"
console.log(Array.from(a)) // ['j', 'i', 't','h', 'e', 'n','d', 'a', 'r]


let c ={name :"jithendar Reddy",age :24,salary:25000}

console.log(Array.from(c)) //[]
console.log(Array.of(a)) // [ 'jithendar' ]