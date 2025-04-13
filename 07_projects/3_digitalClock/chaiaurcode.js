const clock = document.querySelector('#clock');

let date = new Date()
console.log(date.toLocaleTimeString());
// ye jab jab refresh hoga tab tab hi time update karega

// 1000 milisecond k baad run karta rhega
setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);