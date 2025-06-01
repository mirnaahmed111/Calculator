const screen = document.querySelector('.screen p');
const buttons = document.querySelectorAll('.btn');

let current = '';
let previous = '';
let operation = null;

function updateScreen() {
  screen.textContent = current || '0';
}

function clear() {
  current = '';
  previous = '';
  operation = null;
}

function appendNumber(number) {
  if (number === '.' && current.includes('.')) return;
  current += number;
}

function chooseOperation(op) {
  if (current === '') return;
  if (previous !== '') {
    compute();
  }
  operation = op;
  previous = current;
  current = '';
}

function compute() {
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case 'x':
      result = prev * curr;
      break;
    case '/':
      result = curr === 0 ? 'خطأ' : prev / curr;
      break;
    default:
      return;
  }
  current = result.toString();
  operation = null;
  previous = '';
}

function percent() {
  if (current) {
    current = (parseFloat(current) / 100).toString();
  }
}

function plusMinus() {
  if (current) {
    current = (parseFloat(current) * -1).toString();
  }
}

buttons.forEach(btn => {
  btn.onclick = function() {
    if (btn.classList.contains('zero')) {
      appendNumber('0');
    } else if (btn.classList.contains('one')) {
      appendNumber('1');
    } else if (btn.classList.contains('two')) {
      appendNumber('2');
    } else if (btn.classList.contains('three')) {
      appendNumber('3');
    } else if (btn.classList.contains('four')) {
      appendNumber('4');
    } else if (btn.classList.contains('five')) {
      appendNumber('5');
    } else if (btn.classList.contains('six')) {
      appendNumber('6');
    } else if (btn.classList.contains('seven')) {
      appendNumber('7');
    } else if (btn.classList.contains('eight')) {
      appendNumber('8');
    } else if (btn.classList.contains('nine')) {
      appendNumber('9');
    } else if (btn.classList.contains('quote')) {
      appendNumber('.');
    } else if (btn.classList.contains('plus')) {
      chooseOperation('+');
    } else if (btn.classList.contains('minus')) {
      chooseOperation('-');
    } else if (btn.classList.contains('multiply')) {
      chooseOperation('x');
    } else if (btn.classList.contains('division')) {
      chooseOperation('/');
    } else if (btn.classList.contains('equals')) {
      compute();
    } else if (btn.classList.contains('ac')) {
      clear();
    } else if (btn.classList.contains('percent')) {
      percent();
    } else if (btn.classList.contains('plus/minus')) {
      plusMinus();
    }
    updateScreen();
  }
});

updateScreen();
