const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
    ID = e.target.id;
    // if(ID === 'grey'){
    //   body.style.backgroundColor = 'grey';
    // }
    // else if(ID === 'white'){
    //   body.style.backgroundColor = 'white';
    // }
    // else if(ID === 'blue'){
    //   body.style.backgroundColor = 'blue';
    // }
    // else{
    //   body.style.backgroundColor = 'yellow';
    // }
    body.style.backgroundColor = ID;
  });
});
