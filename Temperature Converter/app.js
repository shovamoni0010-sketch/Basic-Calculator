let c = document.getElementById('celsius');
let f = document.getElementById('fahrenheit');
let k = document.getElementById('kelvin');

f.oninput = () => {
  if (f.value === '') {
    c.value = '';
    k.value = '';
    return;
  }
  c.value = (((f.value - 32) * 5) / 9).toFixed(2);
  k.value = (+c.value + 273.15).toFixed(2);

};

c.oninput = () => {
  if (c.value === '') {
     f.value = '';
     k.value = '';
     return;
   }
  f.value = ((c.value * 9) / 5 + 32).toFixed(2);
  k.value = (+c.value + 273.15).toFixed(2);
  
};

k.oninput = () => {
  if (k.value === '') {
    c.value = '';
    f.value = '';
    return;
  }
  c.value = (k.value - 273.15).toFixed(2);
  f.value = ((c.value * 9) / 5 + 32).toFixed(2);
};


 
//   if (isNaN(val)) return emptyOthers;

// if (value)


