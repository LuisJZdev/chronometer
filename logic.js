const times = {
    hour: document.getElementById("hour"),
    minute: document.getElementById("minute"),
    second: document.getElementById("second")
};

const selectedTimes = {
    hour: document.getElementById("hour-select"),
    minute: document.getElementById("minute-select"),
    second: document.getElementById("second-select")
}

console.log(times.hour);
console.log(times.minute);
console.log(times.second.textContent);

console.log(selectedTimes.hour);
console.log(selectedTimes.minute);
console.log(selectedTimes.second);

selectedTimes.hour.addEventListener("click", () => {
    times.hour.innerText = selectedTimes.hour.value.length == 1? '0'+selectedTimes.hour.value: selectedTimes.hour.value;
})
selectedTimes.minute.addEventListener("click", () => {
    times.minute.innerText = selectedTimes.minute.value.length == 1? '0'+selectedTimes.minute.value: selectedTimes.minute.value;
})
selectedTimes.second.addEventListener("click", () => {
    times.second.innerText = selectedTimes.second.value.length == 1? '0'+selectedTimes.second.value: selectedTimes.second.value;
})
