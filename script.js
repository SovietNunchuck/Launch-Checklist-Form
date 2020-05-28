window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let invalidData = "Invalid data type in submission field: ";

   let json = [];
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const missionTarget = document.getElementById("missionTarget");
            let x = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[x].name}</li>
               <li>Diameter: ${json[x].diameter}</li>
               <li>Star: ${json[x].star}</li>
               <li>Distance from Earth: ${json[x].distance}</li>
               <li>Number of Moons: ${json[x].moons}</li>
            </ol>
            <img src="${json[x].image}">
            `;
         });
      });

   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      let ready = true;

      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
      
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("Please check your submission. All fields are required.");
      } else {
         if (!isNaN(Number(pilotName))){
            alert(`${invalidData}Pilot Name`);
            pilotStatus.innerHTML = "No pilot assigned";
            ready = false;
         }

         if (!isNaN(Number(copilotName))){
            alert(`${invalidData}Copilot Name`);
            copilotStatus.innerHTML = "No copilot assigned";
            ready = false;
         }

         if (isNaN(Number(fuelLevel))){
            alert(`${invalidData}Fuel Level`);
            fuelStatus.innerHTML = "Invalid input for fuel level";
            ready = false;      
         } else if (Number(fuelLevel) >= 0 && Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            ready = false;  
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }

         if (isNaN(Number(cargoMass))){
            alert(`${invalidData}Cargo Mass`);
            cargoStatus.innerHTML = "Invalid input for cargo mass";
            ready = false;
         } else if (Number(cargoMass) >= 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            ready = false;
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }

         if (ready) {
            faultyItems.style.visibility = "hidden";
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
         } else if (!ready) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
         }
      }
      event.preventDefault();
   });
});