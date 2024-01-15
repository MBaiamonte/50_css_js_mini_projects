const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active') //toggles the class of active for an onclick event for btn
    input.focus()
})