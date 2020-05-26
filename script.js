window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let invalidData = "Invalid data type in submission field: ";

   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("Please check your submission. All fields are required.");
      }
      if (typeof pilotName !== "string"){
         alert(`${invalidData}Pilot Name`);
      }
      if (typeof copilotName !== "string"){
         alert(`${invalidData}Copilot Name`);
      }
      if (isNaN(Number(fuelLevel))){
         alert(`${invalidData}Fuel Level`);
      }
      if (isNaN(Number(cargoMass))){
         alert(`${invalidData}Cargo Mass`);
      }

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
      
      let ready = true;

      if (Number(fuelLevel) >= 0 && Number(fuelLevel) < 10000 && fuelLevel !== "") {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
         ready = false;         
      }

      if (Number(cargoMass) >= 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
         ready = false;
      }

      if (ready) {
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = "green";
      }

      event.preventDefault();
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/