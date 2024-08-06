const btn = document.getElementById('btn');

const result = document.getElementById('result');

const calculateFixedDeposite = () => {
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);
    if (isNaN(principalAmount) || isNaN(rate) || isNaN(years) || principalAmount <= 0 || rate <= 0 || years <= 0) {
        alert("Enter a Valid Value");
        return;
    }
    const n = 4;
    const res = principalAmount * Math.pow((1 + (rate / (n * 100))), n * years);
    result.textContent = `The Compound Interst is : ₹${res.toFixed(2)}`;
}
btn.addEventListener('click', calculateFixedDeposite);