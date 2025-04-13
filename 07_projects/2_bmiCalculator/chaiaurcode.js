// form k andar submit button h, click nhi submit use hoga
const form = document.querySelector('form');

// agar yahi pe values lena chahenge to milengi hi nhi... jab hum submit click karr rhe h tab hi hum uss value ko lena chah rhe h

// form submit ya to POST ya GET se, lekin jab bhi submit hota h to uski values URL ya fir Server mei chali jaati h...Uss Default action ko rokna hoga

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // kyuki value string milti h
  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  // kuch checks lagate h
  if (h === '' || h < 0 || isNaN(h)) {
    result.innerHTML = `Please give a valid height ${h}`;
  } else if (w === '' || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid weight ${w}`;
  } else {
    const p1 = document.createElement('p');
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    p1.append(document.createTextNode(bmi));
    result.append(p1);

    const p2 = document.createElement('p');

    if (bmi < 18.6) {
      p2.append(document.createTextNode('Under Weight'));
    } else if (bmi < 25) {
      p2.append(document.createTextNode('Normal Range'));
    } else {
      p2.append(document.createTextNode('Overweight'));
    }
    result.append(p2);
  }
});
