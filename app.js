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

    // adding  Operators 

    const operators = document.querySelectorAll(".opr")

    operators.forEach((opr)=>{
        opr.addEventListener("click",()=>{
               addOperators(opr.id)
        })
    })

    // Performing Calculations 

    const equal = document.querySelector("#equals")

    equal.addEventListener("click",()=>{
        calculate(display)
    })




})


const symbol = ["+","/","-","x","^"]

function calculate(display){
    let result = display.textContent;
    let i;

    for(i = 0;i<symbol.length;i++){
        if(result.includes(symbol[i])){
            break
        }
    }

    // if(result[0] ==  "-"){
    //     result = result.replace("-","")
    //     console.log(result)

    // }
    let nums;
    switch(i){
        case 0:
             nums = result.split("+")
            if(nums[0] == "-"){
                nums.splice(0,1)
                nums[0] = "-" + nums[0]
            }
            let sum =  nums.reduce((total,value)=> parseFloat(total) + parseFloat(value))
            display.textContent = sum
            break;
        case 1 :
            nums = result.split("/")
            console.log(nums)
            if(nums[0] == "-"){
                nums.splice(0,1)
                nums[0] = "-" + nums[0]
            }
            let div =  nums.reduce((total,value)=> parseFloat(total) / parseFloat(value))
            display.textContent = div.toFixed(2)
            break;
        case 2 :
            nums = result.split("-")
            if(nums[0] == "-"){
                nums.splice(0,1)
                nums[0] = "-" + nums[0]
            }
            let sub =  nums.reduce((total,value)=> parseFloat(total) - parseFloat(value))
            display.textContent = sub
            break;
        case 3 :
            nums = result.split("x")
            console.log(nums)
            if(nums[0] == "-"){
                nums.splice(0,1)
                nums[0] = "-" + nums[0]
            }
           
            let mul =  nums.reduce((total,value)=> parseFloat(total) * parseFloat(value))
            display.textContent = mul
            break;
        case 4 :
            nums = result.split("^")
            if(nums[0] == "-"){
                nums.splice(0,1)
                nums[0] = "-" + nums[0]
            }
            let pow =  nums.reduce((total,value)=> parseFloat(total)**parseFloat(value))
            display.textContent = pow.toFixed(2)
            break;
    

    }

}



function addOperators(type){


    const display = document.querySelector("#result");

    let symbolContains = symbol.filter((s)=> display.textContent.includes(s))
  

   switch(type){
    case "add" :
        if(symbolContains.length == 0 && display.textContent != "" || display.textContent[0] == "-"){
            display.textContent = display.textContent + "+"
       }
       break;
    
    case "sub":
        if(symbolContains.length == 0 && display.textContent != ""|| display.textContent[0] == "-"){
            display.textContent = display.textContent + "-"
       }

       break;
    case "mul" :
        if(symbolContains.length == 0 && display.textContent != "" || display.textContent[0] == "-"){
            display.textContent = display.textContent + "x"
       }

       break;
    case "div" : 
       if(symbolContains.length == 0 && display.textContent != "" || display.textContent[0] == "-"){
        display.textContent = display.textContent + "/"
       }
       break;
    
    case "pow":
        if(symbolContains.length == 0 && display.textContent != "" || display.textContent[0] == "-"){
            display.textContent = display.textContent + "^"
       }

       break;

        
   }
   
}

function addFloat(){
    
    let display = document.querySelector("#result");
    let result = display.textContent;
    let symbolContains = symbol.filter((s)=> result.includes(s))

    if( result == "" ){
        display.textContent = "0."
    }
    else if(result.indexOf(".") == -1){
        display.textContent = display.textContent + "."
    }
}

