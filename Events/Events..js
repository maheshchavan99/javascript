function testClick( ) {
    console.log('haii welcome to events');
}
function changeName( firstUsername) {
    const element=document.getElementById('username')
    element.innerText=firstUsername
}

function changeBgColor( ) {
  const changecolor=  document.getElementById('hovercolor')
  changecolor.style.backgroundColor='skyblue'
}
function removeBgColor( ) {
    const removecolor=  document.getElementById('hovercolor')
    removecolor.style.backgroundColor='white'
  }

console.log('------------other type -------------------');
  function removeApplyBgColor(color) {
      const element=document.getElementById('changecolor')
      element.style.backgroundColor=color
      
  }

  console.log('----------------------------------');
  function getData( ) {
      const element=document.getElementById('randomdata') 
      console.log( 'onkeyup',element.value);
      document.getElementById('show').innerText=element.value.toUpperCase()
      
  }
  function checkboxClick()  {
      const element=document.getElementById('hobbies')
      console.log(element.checked);
  }
  function showData( ) {
    console.log( 'onkeydown'); 
}

// check box
function getData( ) {
    
}