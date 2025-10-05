function calculateBMI() {
  let height = document.getElementById('height').value / 100;
  let weight = document.getElementById('weight').value;
  let result = document.getElementById('result');

  if (!height || !weight) return (result.innerText = 'Enter height & weight!');

  result.innerText = 'BMI = ' + (weight / (height * height)).toFixed(1);
  
}
