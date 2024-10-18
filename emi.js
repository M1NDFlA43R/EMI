const principal=document.querySelector('#amount');
const intrest=document.querySelector('#iamount');
const time=document.querySelector('#month');
const calculate = document.querySelector('#calc');
const emi=document.querySelector('#emi');
console.log(principal,intrest,time);

function calculateEMI() {
    if(principal.value === '' || intrest.value === '' || time.value === ''){
        alert('Please enter all the values');
        return;
    }
    else{
        const p=principal.value;
        const r=intrest.value;
        const n=time.value;
        const emiValue = (p*(r/(12*100))*(1+r/(12*100))**(n))/((1+r/(12*100))**(n)-1);
        emi.textContent = emiValue.toFixed(2);
    }
}
calculate.addEventListener('click',calculateEMI);