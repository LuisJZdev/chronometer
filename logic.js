function Times(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
}

const times = new Times(
    document.getElementById("hour"),
    document.getElementById("minute"),
    document.getElementById("second")
) 

console.log(times.hour.textContent);

const selectedTimes = new Times(
    document.getElementById("hour-select"),
    document.getElementById("minute-select"),
    document.getElementById("second-select")
)

const selectTimeButtons = new Times(
    [document.getElementById("hour-backward"), document.getElementById("hour-forward")],
    [document.getElementById("minute-backward"), document.getElementById("minute-forward")],
    [document.getElementById("second-backward"), document.getElementById("second-forward")],
) 


const startStopButton = document.getElementById("start-stop-button");

for (let i=0; i<60; i++) {
    selectedTimes.hour.innerHTML += "<option value=" + i + ">" + i + "</option>"
    selectedTimes.minute.innerHTML += "<option value=" + i + ">" + i + "</option>"
    selectedTimes.second.innerHTML += "<option value=" + i + ">" + i + "</option>"
}

selectedTimes.hour.addEventListener("click", () => {
    times.hour.innerText = selectedTimes.hour.value.length == 1? '0'+selectedTimes.hour.value: selectedTimes.hour.value;
})
selectedTimes.minute.addEventListener("click", () => {
    times.minute.innerText = selectedTimes.minute.value.length == 1? '0'+selectedTimes.minute.value: selectedTimes.minute.value;
})
selectedTimes.second.addEventListener("click", () => {
    times.second.innerText = selectedTimes.second.value.length == 1? '0'+selectedTimes.second.value: selectedTimes.second.value;
})

startStopButton.addEventListener("click", () => {

    if (startStopButton.textContent == "start") {
        startStopButton.innerText = "stop";

        for (selectedTime in selectedTimes) {
            selectedTimes[selectedTime].disabled = true;
        }
        for (selectedButton in selectTimeButtons) {
            selectTimeButtons[selectedButton][0].disabled = true;
            selectTimeButtons[selectedButton][1].disabled = true;
        }


    } else {
        startStopButton.innerText = "start";

        for (selectedTime in selectedTimes) {
            selectedTimes[selectedTime].disabled = false;
        }
        for (selectedButton in selectTimeButtons) {
            selectTimeButtons[selectedButton][0].disabled = false;
            selectTimeButtons[selectedButton][1].disabled = false;
        }

    }



})