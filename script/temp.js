let celsius = document.getElementById('low')
let fahren = document.getElementById('high')
let convert = document.getElementById('calc')
let clear = document.getElementById('clr')

convert.addEventListener('click', (event)=>{
    fahren.innerText += parseFloat(eval(`${celsius.value}*9/5+32`)).toFixed(2)
})

clear.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
fahren.innerText = 'Fahrenheit:';
celsius.value = '';
}









