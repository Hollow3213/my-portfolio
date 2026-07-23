
const themeBtn = document.querySelector('.theme-toggle-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})


const oldPowerInput = document.getElementById('old-power')
const newPowerInput = document.getElementById('new-power')
const workHoursInput = document.getElementById('work-hours')
const tariffInput = document.getElementById('energy-tariff')
const resEnergy = document.getElementById('res-energy')
const resMonth = document.getElementById('res-month')
const resYear = document.getElementById('res-year')

function calculate() {
    const oldPower = Number(oldPowerInput.value);
    const newPower = Number(newPowerInput.value);
    const workHours = Number(workHoursInput.value);
    const tariff = Number(tariffInput.value);
    let dailySaved = (oldPower - newPower) * workHours;
    let yearEnerge = dailySaved * 365;
    let monthMoney = dailySaved * 30 * tariff;
    let yearMoney = yearEnerge * tariff;
    resEnergy.textContent = yearEnerge;
    resMonth.textContent = monthMoney.toFixed(2);
    resYear.textContent = yearMoney.toFixed(2);
}

oldPowerInput.addEventListener("input", calculate);
newPowerInput.addEventListener("input", calculate);
workHoursInput.addEventListener("input", calculate);
tariffInput.addEventListener("input", calculate);

calculate();