// let pilotName = null;
// let copilotName = null;
// let fuelLevel = null;
// let cargoMass = null;



window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let invalidData = "Invalid data type in submission field: ";

   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("Please check your submission. All fields are required.");
         event.preventDefault();
      }
      if (typeof pilotName !== "string"){
         alert(invalidData + "Pilot Name");
         event.preventDefault();
      }
      if (typeof copilotName !== "string"){
         alert(invalidData + "Copilot Name");
         event.preventDefault();
      }
      if (isNaN(Number(fuelLevel))){
         alert(invalidData + "Fuel Level");
         event.preventDefault();
      }
      if (isNaN(Number(cargoMass))){
         alert(invalidData + "Cargo Mass");
         event.preventDefault();
      }
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