let fieldValue;
let totalValueElem;

//------------cached DOM elements--------------//

const inputElem = document.querySelector('input');

const plusElem = document.getElementById('plus');
const minusElem = document.getElementById('minus');
const totalElem = document.getElementById('total');

//------------------init--------------------------//
init();
function init(){
  fieldValue = 0;
  render();
}

//-------------------render-----------------------//
render();
function render(){
  if(totalValueElem === undefined){
    createTotalElem();
  }
  totalValueElem.innerText = fieldValue;
  let currentTotal = totalValueElem.innerText;
  checkNegative(currentTotal);
}

function checkNegative(num){
  num >= 0 ? totalElem.setAttribute('class', 'positive') : totalElem.setAttribute('class', 'negative');
}


//-------------------functions---------------------//

function createTotalElem(){
  totalValueElem = document.createElement('h2');
  totalElem.appendChild(totalValueElem);

}


///---------event listeners----------///

plusElem.addEventListener('click', sum);
minusElem.addEventListener('click', less);



//---------------------------- controller-------------------------//
function sum() {
    fieldValue +=  Number(inputElem.value);
    console.log(fieldValue);
    
    render();
  }

  function less(){
    fieldValue -= Number(inputElem.value);

    render();
  }