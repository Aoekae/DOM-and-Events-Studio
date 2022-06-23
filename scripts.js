// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {

    const abortMission = document.getElementById("missionAbort");
    const takeOff = document.getElementById("takeoff");
    const paragraph = document.getElementById("flightStatus");
    const flightBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket")

    takeOff.addEventListener("click", event => {
        const userConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (userConfirmation === true) {
          paragraph.innerHTML = 'Shuttle in Flight.'
          flightBackground.style.background = "blue";
          shuttleHeight.innerHTML = "10000";
        }
      });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed."
        flightBackground.style.background = "";
        shuttleHeight.innerHTML = "0";
    });
    
    abortMission.addEventListener("click", event => {
        const userConfirmation = window.confirm("Confirm that you want to abort the mission.")
        if (userConfirmation === true) {
          paragraph.innerHTML = 'Mission aborted.'
          flightBackground.style.background = "";
          shuttleHeight.innerHTML = "0";
        }
      });

      up.addEventListener("click", event => {
        rocket.style.position = "absolute";
        dest = parseInt(rocket.style.position + 10);
        newHeight = Number(shuttleHeight.innerHTML)
        newHeight += 10000;
        shuttleHeight.innerHTML = newHeight;
      });    

      
      down.addEventListener("click", event => {
        rocket.style.position = "absolute";
        dest = parseInt(rocket.style.position - 10);
        newHeight = Number(shuttleHeight.innerHTML)
        newHeight -= 10000;
        shuttleHeight.innerHTML = newHeight;
      });    

      
      left.addEventListener("click", event => {
        rocket.style.left = "absolute";
        dest = parseInt(rocket.style.left + 10);
        });    


    
}

window.addEventListener("load", init);