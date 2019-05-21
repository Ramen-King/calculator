let field = "";
let hidden = "";
let total = "";
let operator = "";


window.onload = init;
function init() {
  /**
   * need selectors for *
   * keyOperator are math functions 
   * keyEqual = math()
   * buttons
   */
  const func = [numInput, keyOps, clearField, calc]
  const buttons = document.querySelectorAll("button");
  
 buttons.forEach(value => value.addEventListener("click", ...func));
  

const keyOps = (event) => {
  event.preventDefault();
  operator = this.dataset.action;
  
};

const clearField = (event) => {
  event.preventDefault();
  operator = this.dataset.action;
};

const calc = (event) => {
  event.preventDefault();
  operator = this.dataset.action;
};

const numInput = () => {
  event.preventDefault();
  const regex = /^["0-9"]/g;
  const num = event.target.innerText;
  if (regex.test(num)) {
    field += num;
  }
  display(field);
};

// display & reassignment functions
const display = value => {
  document.querySelector(".calculatorDisplay").innerText = value;
};

const converter = value => {
    value.toString();
};
// magic makes voodoo
function funcOps(){
let operator = "";
  switch (operator){
    case "add":
      result = start + last
      display(result);
      converter(result);
      break;

    case "subtract":
      total = parseFloat(hidden) - parseFloat(field);
      display(total);
      converter(total);
      break;

    case "multiply":
      total = parseFloat(hidden) * parseFloat(field);
      display(total);
      converter(total);
      break;

    case "divide":
      total = parseFloat(hidden) / parseFloat(field);
      display(total);
      converter(total);
      break;

    case "clear":
      operator = "";
      hidden = "";
      field = "0";
      break;

    case "calculate":
      //something
      break;

    case "decimal":
      let dec = field.includes(".");
      if (!dec) return;
      field += event.target.innerText;
      break;

    case "calculate":
      total;
      break;

    default:
      }}}
