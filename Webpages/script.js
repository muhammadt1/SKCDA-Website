function createTimer(timerId, startButtonId) {
    var timerElement = document.getElementById(timerId);
    var startButton = document.getElementById(startButtonId);
    var count = 5;
    var countdown;
  
    startButton.addEventListener("click", startTimer);
  
    function startTimer() {
      startButton.disabled = true;
      timerElement.textContent = count;
  
      countdown = setInterval(function() {
        count--;
        timerElement.textContent = count;
  
        if (count <= 0) {
          clearInterval(countdown);
          count = 5;
          timerElement.textContent = "Finish!";
          startButton.disabled = false;
        }
      }, 1000);
    }
  }

function zoom(element) {
  element.classList.toggle("zoom")
}
  
  createTimer("timer0", "startButton0");
  createTimer("timer1", "startButton1");
  createTimer("timer2", "startButton2");
  createTimer("timer3", "startButton3");
  createTimer("timer4", "startButton4");
  createTimer("timer5", "startButton5");
  createTimer("timer6", "startButton6");
  createTimer("timer7", "startButton7");
  createTimer("timer8", "startButton8");
 
  
  