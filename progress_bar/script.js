
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //need the . in front of circle since there multiple. querySelectorAll gets all and puts them in a node list(essentially an array)

let currentActive=1

next.addEventListener('click',()=>{
    currentActive++
    if (currentActive>circles.length){
        currentActive=circles.length
        console.log(currentActive)
    } //end if
    update()
}) //end next

prev.addEventListener('click',()=>{
    currentActive--
    if (currentActive<1){
        currentActive=1
        console.log(currentActive)
    } //end if
    update()
}) //end prev

function update(){
    circles.forEach((circles,idx)=>{
        if(idx<currentActive){
            circles.classList.add("active")
        }
        else{
            circles.classList.remove("active")
        }//end if
    })//end forEach

//  setting progress bar color
    const actives=document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1)/(circles.length-1))*100 +'%'  //this is changing the width in our style sheet depending on how many "active" class tags we have

    //button disabled/able 
    if(currentActive===1){
        prev.disabled=true
    } else if(currentActive===circles.length){
        next.disabled=true
    } else{
        prev.disabled=false
        next.disabled=false
    }//end if


}//end update function