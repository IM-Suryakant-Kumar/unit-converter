/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    let metersToFeets = (inputValue * 3.281).toFixed(3)
    let feetsToMeters = (inputValue / 3.281).toFixed(3)
    let litersToGallons = (inputValue * 0.264).toFixed(3)
    let gallonsToLiters = (inputValue / 0.264).toFixed(3)
    let killosToPounds = (inputValue * 2.204).toFixed(3)
    let poundsToKillos = (inputValue / 2.204).toFixed(3)
    
    lengthEl.innerHTML = `${inputValue} meters = ${metersToFeets} feet | ${inputValue} feet = ${feetsToMeters} meters`
    volumeEl.innerHTML = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`
    massEl.innerHTML = `${inputValue} kilos = ${killosToPounds} pounds | ${inputValue} pounds = ${poundsToKillos} kilos`
})