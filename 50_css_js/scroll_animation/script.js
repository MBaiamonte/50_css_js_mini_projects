const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4 //for where in the view window we want the transformation to trigger
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop<triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}