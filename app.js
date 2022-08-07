// https://calculator.swiftutors.com/rotational-kinetic-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const rotationalKineticEnergyRadio = document.getElementById('rotationalKineticEnergyRadio');
const momentofInertiaRadio = document.getElementById('momentofInertiaRadio');
const angularVelocityoftheObjectRadio = document.getElementById('angularVelocityoftheObjectRadio');

let rotationalKineticEnergy;
let momentofInertia = v1;
let angularVelocityoftheObject = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

rotationalKineticEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Moment of Inertia (rads/sec)';
  variable2.textContent = '(ω) Angular Velocity of the Object (kg/m²)';
  momentofInertia = v1;
  angularVelocityoftheObject = v2;
  result.textContent = '';
});

momentofInertiaRadio.addEventListener('click', function() {
  variable1.textContent = '(Ek) Rotational Kinetic Energy (J)';
  variable2.textContent = '(ω) Angular Velocity of the Object (kg/m²)';
  rotationalKineticEnergy = v1;
  angularVelocityoftheObject = v2;
  result.textContent = '';
});

angularVelocityoftheObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(Ek) Rotational Kinetic Energy (J)';
  variable2.textContent = '(I) Moment of Inertia (rads/sec)';
  rotationalKineticEnergy = v1;
  momentofInertia = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(rotationalKineticEnergyRadio.checked)
    result.textContent = `Rotational Kinetic Energy = ${computeRotationalKineticEnergy().toFixed(2)} J`;

  else if(momentofInertiaRadio.checked)
    result.textContent = `Moment of Inertia = ${computeMomentofInertia().toFixed(2)} rads/sec`;

  else if(angularVelocityoftheObjectRadio.checked)
    result.textContent = `Angular Velocity of the Object = ${computeAngularVelocityoftheObject().toFixed(2)} kg/m²`;
})

// calculation

function computeRotationalKineticEnergy() {
  return 0.5 * Number(momentofInertia.value) * Math.pow(Number(angularVelocityoftheObject.value), 2);
}

function computeMomentofInertia() {
  return (2 * Number(rotationalKineticEnergy.value)) / Math.pow(Number(angularVelocityoftheObject.value), 2);
}

function computeAngularVelocityoftheObject() {
  return Math.sqrt((2 * Number(rotationalKineticEnergy.value)) / Number(angularVelocityoftheObject.value));
}