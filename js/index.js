const img = document.querySelector('.img-fluid') 

img.addEventListener('mouseover', function(){
    img.style.width = '370px'; 
})

img.addEventListener('mouseout', () => {
    img.style.width = '400px'; 
})

const bus = document.querySelector('.bus'); 

bus.addEventListener('click', () => {
    bus.style.border = 'thick solid black'; 
})

const header = document.querySelector('#header'); 


document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();  

    header.textContent = `You have pressed the ${key} key!`
})


const img2 = document.querySelector('.img2'); 


img2.addEventListener('dblclick', () => {
    img2.style.border = 'thick solid gray'; 
})


const img3 = document.querySelector('.boat'); 


img3.addEventListener('mouseenter', () => {
    img3.style.width = '500px'; 
})


img3.addEventListener('mouseout', () => {
    img3.style.width = '600px'; 
})


const text = document.querySelector('.text'); 


text.addEventListener('copy', () => {
    text.style.fontSize = '30px'; 
    text.style.color = 'red'
})


const button = document.querySelector('.btn'); 

console.log(button); 


button.addEventListener('click', () => {
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
})

const body = document.body; 

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        body.style.background = 'gray'; 
    }
})