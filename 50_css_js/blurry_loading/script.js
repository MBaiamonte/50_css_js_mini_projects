const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;
let int= setInterval(blurring, 30); // will run the blurring function every 30 ms incrementing load by one each rotation

function blurring(){
    load++
    console.log(load)
    
    //stops the load incrimination at 100
    if(load > 99){ 
        clearInterval(int)
    }

    //maps the two ranges. 0-100 for load text and 0 to 30 for blur styling
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0,100,1,0)
    background.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
