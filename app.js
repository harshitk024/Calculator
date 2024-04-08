document.addEventListener("DOMContentLoaded",()=>{



    const nums_buttons = document.querySelectorAll(".num");
    const display = document.querySelector("#result");
    const nums = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    nums_buttons.forEach((num)=>{
       num.addEventListener("click",()=>{
        display.textContent = display.textContent + nums.indexOf(num.id);
       })
    })



    // Clears all the numbers in Display

    const clear = document.querySelector("#clear");
    clear.addEventListener("click",()=>{
        display.textContent = "";
    });

    // Delete the last number in display

    const del = document.querySelector("#delete");
    del.addEventListener("click",()=>{
        let text =  display.textContent;
        display.textContent = text.slice(0,text.length  - 1);
    })

    // adding Floating point 

    const float = document.querySelector("#float")
    float.addEventListener("click",addFloat)

    //Performing calculations 

    const operators = document.querySelectorAll(".opr")

    operators.forEach((opr)=>{
        opr.addEventListener("click",()=>{
            switch(opr.id){
                case "add":
                    add(display);
                    break;
                case "sub":
                    sub()
                    break;
                case "mul" :
                    mul()
                    break;
                case "div":
                    div()
                    break;
                case "pow":
                    pow()
                    break;
            }
        })
    })




})

function add(display){
   let result = display.textContent;

   if(result.indexOf("+") == -1){
       display.textContent = display.textContent + "+"
   }
   
}

function addFloat(){

    let display = document.querySelector("#result");
    let result = display.textContent;

    if( result == ""){
        display.textContent = "0."
    }
    else if(result.indexOf(".") == -1){
        display.textContent = display.textContent + "."
    }
}

