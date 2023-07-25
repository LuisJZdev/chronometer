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

const selectTimes = new Times(
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
    selectTimes.hour.innerHTML += "<option value=" + i + ">" + i + "</option>"
    selectTimes.minute.innerHTML += "<option value=" + i + ">" + i + "</option>"
    selectTimes.second.innerHTML += "<option value=" + i + ">" + i + "</option>"
}

selectTimes.hour.addEventListener("click", () => {
    times.hour.innerText = selectTimes.hour.value.length == 1? '0'+selectTimes.hour.value: selectTimes.hour.value;
})
selectTimes.minute.addEventListener("click", () => {
    times.minute.innerText = selectTimes.minute.value.length == 1? '0'+selectTimes.minute.value: selectTimes.minute.value;
})
selectTimes.second.addEventListener("click", () => {
    times.second.innerText = selectTimes.second.value.length == 1? '0'+selectTimes.second.value: selectTimes.second.value;
})

selectTimeButtons.hour[0].addEventListener("click", () => {
    selectTimes.hour.value = selectTimes.hour.value == 0? 59: selectTimes.hour.value - 1;
    times.hour.innerText = selectTimes.hour.value.length == 1? '0'+selectTimes.hour.value: selectTimes.hour.value;
})
selectTimeButtons.hour[1].addEventListener("click", () => {
    selectTimes.hour.value = selectTimes.hour.value == 59? 0: Number(selectTimes.hour.value) + 1;
    times.hour.innerText = selectTimes.hour.value.length == 1? '0'+selectTimes.hour.value: selectTimes.hour.value;
})
selectTimeButtons.minute[0].addEventListener("click", () => {
    selectTimes.minute.value = selectTimes.minute.value == 0? 59: selectTimes.minute.value - 1;
    times.minute.innerText = selectTimes.minute.value.length == 1? '0'+selectTimes.minute.value: selectTimes.minute.value;
})
selectTimeButtons.minute[1].addEventListener("click", () => {
    selectTimes.minute.value = selectTimes.minute.value == 59? 0: Number(selectTimes.minute.value) + 1;
    times.minute.innerText = selectTimes.minute.value.length == 1? '0'+selectTimes.minute.value: selectTimes.minute.value;
})
selectTimeButtons.second[0].addEventListener("click", () => {
    selectTimes.second.value = selectTimes.second.value == 0? 59: selectTimes.second.value - 1;
    times.second.innerText = selectTimes.second.value.length == 1? '0'+selectTimes.second.value: selectTimes.second.value;
})
selectTimeButtons.second[1].addEventListener("click", () => {
    selectTimes.second.value = selectTimes.second.value == 59? 0: Number(selectTimes.second.value) + 1;
    times.second.innerText = selectTimes.second.value.length == 1? '0'+selectTimes.second.value: selectTimes.second.value;
})

startStopButton.addEventListener("click", () => {

    if (startStopButton.textContent == "start") {
        startStopButton.innerText = "stop";

        for (selectedTime in selectTimes) {
            selectTimes[selectedTime].disabled = true;
        }
        for (selectedButton in selectTimeButtons) {
            selectTimeButtons[selectedButton][0].disabled = true;
            selectTimeButtons[selectedButton][1].disabled = true;
        }

        let hour = Number(times.hour.textContent);
        let minute = Number(times.minute.textContent);
        let second = Number(times.second.textContent);

        console.log(second)

        let totalTime = (second*1000) + (minute*60000) + (hour*3600000);
        let totalTimeToPrint = new Times(hour, minute, second);

        console.log(totalTime)

        function miFuncion() {
            if (totalTimeToPrint.second == 0) {

                if (totalTimeToPrint.minute != 0) {
                    totalTimeToPrint.minute -= 1;
                    times.minute.innerText = totalTimeToPrint.minute < 10? '0'+String(totalTimeToPrint.minute): totalTimeToPrint.minute;

                    totalTimeToPrint.second = 59;
                    times.second.innerText = 59;
                } else {
                    
                    if (totalTimeToPrint.hour != 0) {
                        totalTimeToPrint.hour -= 1;
                        times.hour.innerText = totalTimeToPrint.hour < 10? '0'+String(totalTimeToPrint.hour): totalTimeToPrint.hour;

                        totalTimeToPrint.minute = 59;
                        times.minute.innerText = 59;

                        totalTimeToPrint.second = 59;
                        times.second.innerText = 59;
                    }

                }

            } else {

                totalTimeToPrint.second -= 1;
                times.second.innerText = totalTimeToPrint.second < 10? '0'+String(totalTimeToPrint.second): totalTimeToPrint.second;
            }

            
        }
        
        

        // const tiempoTotal = 5000; 
          
    
        const intervalo = 1000;
          
        
        function detenerBucle() {
            clearInterval(intervalID);
            console.log('El bucle ha terminado.');
        }
          
    
        const intervalID = setInterval(miFuncion, intervalo);

        setTimeout(detenerBucle, totalTime);

    } else {
        startStopButton.innerText = "start";

        for (selectedTime in selectTimes) {
            selectTimes[selectedTime].disabled = false;
        }
        for (selectedButton in selectTimeButtons) {
            selectTimeButtons[selectedButton][0].disabled = false;
            selectTimeButtons[selectedButton][1].disabled = false;
        }

    }



})