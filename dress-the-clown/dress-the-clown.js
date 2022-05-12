// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0,
  bodyIndex = 0,
  shoeIndex = 0

let ClothesIndex = 0
//if 0=head, if 1=body, if 2 then feet

let clownHead = document.getElementById('head')
let clownBody = document.getElementById('body')
let clownShoes = document.getElementById('shoes')

document.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowRight':
      // headIndex++
      ChangeIndex('right')
      changeItem()
      break

    case 'ArrowLeft':
      // headIndex--
      ChangeIndex('left')
      changeItem()
      break
    case 'ArrowUp':
      ClothesIndex++
      // changeArea()
      break
    case 'ArrowDown':
      ClothesIndex--
      // changeArea()
      break
  }
}
function ChangeIndex(arrow) {
  if (arrow == 'right' && ClothesIndex == 0) {
    headIndex++
    if (headIndex == 6) {
      headIndex = 0
    }
    changeItem()
  } else if (arrow == 'left' && ClothesIndex == 0) {
    headIndex--
    if (headIndex == -1) {
      headIndex = 5
    }
    changeItem()
  } else if (arrow == 'right' && ClothesIndex == 1) {
    bodyIndex--
    if (bodyIndex == -1) {
      bodyIndex = 5
    }
    changeItem()
  } else if (arrow == 'left' && ClothesIndex == 1) {
    bodyIndex--
    if (bodyIndex == -1) {
      bodyIndex = 5
    }
    changeItem()
  } else if (arrow == 'right' && ClothesIndex == 2) {
    shoeIndex--
    if (shoeIndex == -1) {
      shoeIndex = 5
    }
    changeItem()
  } else if (arrow == 'left' && ClothesIndex == 2) {
    shoeIndex--
    if (shoeIndex == -1) {
      shoeIndex = 5
    }
    changeItem()
  } else {
    if (ClothesIndex == -1) {
      ClothesIndex = 2
    } else if (ClothesIndex == 4) {
      ClothesIndex = 0
    }
  }
  console.log(ClothesIndex)
}
function changeItem() {
  if (ClothesIndex == 0) {
    clownHead.src = './images/head' + headIndex + '.png'
  } else if (ClothesIndex == 1) {
    clownBody.src = './images/body' + bodyIndex + '.png'
  } else if (ClothesIndex == 2) {
    clownShoes.src = './images/shoes' + shoeIndex + '.png'
  }
}
