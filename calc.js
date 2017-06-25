
console.log('poop')

function createButtons () {
  for (var i = 9; i > -1; i--) {
    var button = document.createElement('button')
    button.textContent = i
    button.value = i
    document.getElementById('left').appendChild(button)
    button.addEventListener('click', storeShowInput)
    button.className = 'numbers'
  }

  var plusbutton = document.createElement('button')
  plusbutton.textContent = '+'
  plusbutton.value = '+'
  document.getElementById('right').appendChild(plusbutton)
  plusbutton.addEventListener('click', storeShowInput)
  plusbutton.className = 'operators'

  var minusbutton = document.createElement('button')
  minusbutton.textContent = '-'
  minusbutton.value = '-'
  document.getElementById('right').appendChild(minusbutton)
  minusbutton.addEventListener('click', storeShowInput)
  minusbutton.className = 'operators'

  var timesbutton = document.createElement('button')
  timesbutton.textContent = 'x'
  timesbutton.value = '*'
  document.getElementById('right').appendChild(timesbutton)
  timesbutton.addEventListener('click', storeShowInput)
  timesbutton.className = 'operators'

  var dividebutton = document.createElement('button')
  dividebutton.textContent = '/'
  dividebutton.value = '/'
  document.getElementById('right').appendChild(dividebutton)
  dividebutton.addEventListener('click', storeShowInput)
  dividebutton.className = 'operators'

  var equalbutton = document.createElement('button')
  equalbutton.textContent = '='
  equalbutton.value = '='
  document.getElementById('left').appendChild(equalbutton)
  equalbutton.addEventListener('click', showResult)
  equalbutton.className = 'equal'

  var blankbutton = document.createElement('button')
  blankbutton.textContent = 'C'
  blankbutton.className = 'numbers'
  document.getElementById('left').appendChild(blankbutton)
  blankbutton.addEventListener('click', clear)
		// blankbutton.addEventListener('click', storeShowInput);
// console.log(equalbutton.value);
}

createButtons()

var inputArr = []
var showInput = []

function storeShowInput () {
	// console.log(isNaN(this.getAttribute('value')));
  if (isNaN(this.getAttribute('value'))) { inputArr.push(this.getAttribute('value')) } else { inputArr.push(parseInt(this.getAttribute('value'))) };
  showInput = inputArr.join('')
  document.getElementById('display').textContent = showInput
	// console.log(showInput);
}

// to re-arranage arr before summing
function pp (arr) {
	  if (!isNaN(arr[0])) {
	    arr.splice(0, 0, '+')
	    return arr
	  }
	  return arr
}

function sortplus (arr) {
	  if (arr.includes('+')) {
	  if (arr.indexOf('*') - arr.indexOf('+') > 2 ||
	  arr.indexOf('/') - arr.indexOf('+') > 2) {
	    var removed = arr.splice(arr.indexOf('+'), 2)
	    for (i = 0; i < removed.length; i++) {
	    arr.push(removed[i])
    }
	    sortplus(arr)
	  }
  } else { return arr }
	  return arr
}

function sortminus (arr) {
	  if (arr.includes('-')) {
	  if (arr.indexOf('*') - arr.indexOf('-') > 2 ||
	  arr.indexOf('/') - arr.indexOf('-') > 2) {
	    var removed = arr.splice(arr.indexOf('-'), 2)
	    for (i = 0; i < removed.length; i++) {
	    arr.push(removed[i])
    }
	    sortminus(arr)
	  }
  } else { return arr }
	  return arr
}

function addZero (arr) {
  arr.splice(0, 0, 0)
}

function count (re, e, i, ar) {
  if (e == '*') {
    re *= ar[i + 1]
  } else if (e == '+') {
    re += ar[i + 1]
  } else if (e == '-') {
    re -= ar[i + 1]
  } else if (e == '/') {
    re /= ar[i + 1]
  }
  return re
}

// var arr=[2,"*",2,"+",6];

function showResult () {
// console.log(arr.reduce(count,arr[0]))
  pp(inputArr)
  sortplus(inputArr)
  sortminus(inputArr)
  addZero(inputArr)
	// console.log(inputArr);
  var ans = inputArr.reduce(count, inputArr[0])
  document.getElementById('display').textContent = ans
// console.log(re);
}

function clear () {
  inputArr = []
  document.getElementById('display').textContent = inputArr
}
