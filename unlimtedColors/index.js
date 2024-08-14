console.log("hi")

const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
        console.log(color)
    }
    return color;
}

console.log(randomColor())
let change
const startChange=()=>{
if(!change){
    change=  setInterval(()=>{
        document.body.style.backgroundColor=randomColor()
    },1000)
}
}
const stopChange=()=>{
    clearInterval(change)
    change=null
}

document.querySelector('#start').addEventListener('click',startChange)
document.querySelector('#stop').addEventListener('click',stopChange)