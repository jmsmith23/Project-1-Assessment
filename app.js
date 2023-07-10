const totalNum = document.querySelector('total');

const countNum = document.querySelector('counter');

const addButton = document.querySelector('add');
addButton.addEventListener('click', () => {
  incrementNumber();
});

function incrementNumber(num) {
  const add = num++;
  return countNum.add;
}

const subButton = document.querySelector('subtract');
subButton.addEventListener('click', () => {
  decrementNumber;
});

function decrementNumber(num) {
  const subtract = num--;
  return countNum.subtract;
}
