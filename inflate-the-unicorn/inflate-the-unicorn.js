// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//find  all imgs on html page.
let uni = document.getElementsByClassName('inflate-an-image')
let corn1 = 0,
  corn2 = 0,
  corn3 = 0
//assign onclick function to all unicorns
for (let i = 0; i < uni.length; i++) {
  uni[i].onclick = unicornClick
}

function unicornClick(e) {
  let cornboi = e.target

  if (corn1 == 0 && cornboi.name == 'one') {
    cornboi.src = './images/unicorn-1.png'
    corn1++
    console.log(corn1)
  } else if (corn1 == 1 && cornboi.name == 'one') {
    cornboi.src = './images/unicorn-2.png'
    corn1++
    console.log(corn1)
  } else if (corn1 == 2 && cornboi.name == 'one') {
    cornboi.src = './images/unicorn-3.png'
    corn1++
    console.log(corn1)
  } else if (corn1 == 3 && cornboi.name == 'one') {
    alert('Unicorn one says thanks')
    console.log(corn1)
  } else if (corn2 == 0 && cornboi.name == 'two') {
    cornboi.src = './images/unicorn-1.png'
    corn2++
    console.log(corn2)
  } else if (corn2 == 1 && cornboi.name == 'two') {
    cornboi.src = './images/unicorn-2.png'
    corn2++
    console.log(corn2)
  } else if (corn2 == 2 && cornboi.name == 'two') {
    cornboi.src = './images/unicorn-3.png'
    corn2++
    console.log(corn2)
  } else if (corn2 == 3 && cornboi.name == 'two') {
    alert('Unicorn Two says thanks')
    console.log(corn2)
  } else if (corn3 == 0 && cornboi.name == 'three') {
    cornboi.src = './images/unicorn-1.png'
    corn3++
    console.log(corn3)
  } else if (corn3 == 1 && cornboi.name == 'three') {
    cornboi.src = './images/unicorn-2.png'
    corn3++
    console.log(corn3)
  } else if (corn3 == 2 && cornboi.name == 'three') {
    cornboi.src = './images/unicorn-3.png'
    corn3++
    console.log(corn3)
  } else if (corn3 == 3 && cornboi.name == 'three') {
    alert('Unicorn Three says thanks')
    console.log(corn3)
  }
  // if check if unicorn is at 0
  //change to 1
  //change img
  //else if unicorn is at 1
  //change to 2
  //change img
  //else if unicorn is at 2
  //change to 2
  //change img
  //else  unicorn is at 3
  //alert (unicorn x says thanks)
}
