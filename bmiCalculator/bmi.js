const formData=document.querySelector('form')
console.log(formData)

formData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    console.log(height,weight)
    const results=document.querySelector('#results')
    if(height == '' || height <0 || isNaN(height)){
        results.innerHTML=`<span>pealse enter vaild height ${height}</span>`
    }else  if(weight == '' || weight <0 || isNaN(weight)){
        results.innerHTML=`<span>pealse enter vaild weight ${weight}</span>`
    }else{
        const bmi=(weight/((height*height)/10000).toFixed(2))
       const span= document.createElement('span')
        results.appendChild(span.appendChild(document.createTextNode(`${bmi} `)))
        if(bmi<18.6){
            results.appendChild(span.appendChild(document.createTextNode('\n your are under weight')))
        }else if(bmi>18.6 || bim<24.9){
            results.appendChild(span.appendChild(document.createTextNode('\n your are normal weight')))

        }else{
            results.appendChild(span.appendChild(document.createTextNode('\n your are over weight')))
        }
        
    }
})