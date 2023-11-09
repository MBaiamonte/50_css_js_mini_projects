const panels=document.querySelectorAll('.panel') //query selector All is needed since I have multiple panels, it puts all the panels in a node list (similar to array)

//for each takes in a function (arrow function with event listener in this case)
panels.forEach((panel)=>{
    console.log(panel)
    panel.addEventListener('click',()=>{ //listing for a onClick event and when detected runs the below function. takes in event and function. 
        removeActiveClasses()
        panel.classList.add('active') //adds the class of active for a onClick event, classList gives us a list of all the classes we have. 
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })//end forEach
}//end removeActiveClasses