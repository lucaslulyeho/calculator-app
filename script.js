let link = document.getElementById('link');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let del = document.getElementById('del');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let point = document.getElementById('point');
let equals = document.getElementById('equals');
let reset = document.getElementById('reset');

let display = document.getElementById('display');

let toggle1 =  document.getElementById('toggle-1');
let toggle2 =  document.getElementById('toggle-2');
let toggle3 =  document.getElementById('toggle-3');

let toggleWrapper1 = document.getElementById('toggle-1-wrapper');
let toggleWrapper2 = document.getElementById('toggle-2-wrapper');
let toggleWrapper3 = document.getElementById('toggle-3-wrapper');

let initialNum = "";

let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

let theme = 1;

// display.innerText = initialNum;
let buttonsArray = [one, two, three, four, five, six, seven, eight, nine, zero, point];
// one.onclick = function(){
//     display.innerText = '1'
// }

toggleWrapper1.onclick = function(){
    toggle1.style.visibility = 'visible';
    toggle2.style.visibility = 'hidden';   
    toggle3.style.visibility = 'hidden';

}
toggleWrapper2.onclick = function(){
    toggle1.style.visibility = 'hidden';
    toggle2.style.visibility = 'visible';   
    toggle3.style.visibility = 'hidden';
}
toggleWrapper3.onclick = function(){
    toggle1.style.visibility = 'hidden';
    toggle2.style.visibility = 'hidden';   
    toggle3.style.visibility = 'visible';
}
for(let num of buttonsArray){
    num.onclick = function(){

        console.log('hellllooo');
        if(operator == ""){
           
            if(firstNum.length<16){
                firstNum += num.innerText;
                // firstNumFormatted =
                display.innerText =  Number(firstNum).toLocaleString("en-US");
            }
            
            console.log(firstNum.length);
        }else{
            if(secondNum.length < 16){
                secondNum += num.innerText;
                display.innerText = Number(secondNum).toLocaleString("en-US");
            }
            
        }  
        
    }
}

plus.onclick = function(){
    operator = "add";
}
minus.onclick= function(){
    operator = "sub";
}
multiply.onclick = function(){
    operator = 'mult';
}
divide.onclick = function(){
    operator = 'div'
}

function add(){

    result = Number(firstNum) + Number(secondNum);
    return result;
}
function sub(){

    result = Number(firstNum) - Number(secondNum);
    return result;
}
function mult(){
    result =  Number(firstNum) * Number(secondNum);
    return result;
}
function div(){
    result = Number(firstNum) / Number(secondNum);
    return result;
}

reset.onclick = function(){
    // operator = "";
    // firstNum = ''
    // secondNum = ''
    // display.innerText
    location.reload();
}
del.onclick = function(){
    if(operator == ""){
        firstNum = firstNum.slice(0, -1);
        display.innerText =  Number(firstNum).toLocaleString("en-US");
    } else {
        secondNum = secondNum.slice(0, -1);
        display.innerText =  Number(secondNum).toLocaleString("en-US");
    }
}
equals.onclick = function(){
    
    if(operator == "add"){
        display.innerText = add().toLocaleString("en-US");
        console.log('we add');
    } else if(operator == "sub"){
        display.innerText = sub().toLocaleString("en-US");
        console.log('we minus');
    } else if(operator == "mult"){
        display.innerText = mult().toLocaleString("en-US");
        console.log('we mult');
    } else if(operator == "div"){
        display.innerText = div().toLocaleString("en-US");
        console.log('we div');
    }else {
        console.log('we do nothing');
    }

    operator = "";
    secondNum = "";
    firstNum = String(result);
    console.log('priniting numbers')
    console.log(firstNum);
}