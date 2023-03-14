const bootstrapColors =[ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' ];
const box1 = document.querySelector(".box1");
const body = document.body;
const btn = document.querySelector('.btn btn-light my-4 fw-bold btn-lg')

function Animation (){

    const color1 = `bg-${bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)]}`;
    const color2 = `bg-${bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)]}`;
    console.log(color1)
    
    // box1.classList.remove(...bootstrapColors); 
    // body.classList.remove(...bootstrapColors); 

    bootstrapColors.forEach(color=>{
        let colorExist = body.classList.contains(`bg-${color}`)
        if (colorExist){
            body.classList.remove(`bg-${color}`)
        }
    })

    bootstrapColors.forEach(color=>{
        let colorExist = box1.classList.contains(`bg-${color}`)
        if (colorExist){
            box1.classList.remove(`bg-${color}`)
        }
    })
  
    box1.classList.add(color1); 
    body.classList.add(color2); 
}

let startAnimation = null;
function Start(){
    startAnimation = setInterval(Animation, 300); 
}

function Stop(){
    clearInterval(startAnimation)
    window.location.reload()
}

// Step 1: Define 2 functions, 1 for the animation and 1 for the button click to start the animation
// OK

// Step 2: Link the function to the button
//OK?

// Step 3: Create 2 global variables to find '.box1' and 'body' elements
//OK

// Step 4: Create 2 local variables inside the Animation function to store new random colors
// only half ok? --> had help but now ok? 

// Step 5: Apply the random colors to the box and the body
//OK with help?

// Step 6: Create a setInterval inside the Start function to call the Animation function every 300ms
//OK







