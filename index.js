navigator.permissions.query({name:'ambient-light-sensor'}).then(function(result) {
    if (result.state === 'granted') {
        console.log('granted');
    //   showLocalNewsWithGeolocation();
    } else if (result.state === 'prompt') {
    //   showButtonToEnableLocalNews();
        console.log('prompt');
    }
    // Don't do anything if the permission was denied.
  });


//   if ("AmbientLightSensor" in window) {
//     const sensor = new AmbientLightSensor();
//     sensor.addEventListener("reading", (event) => {
//       console.log("Current light level:", sensor.illuminance);
//     });
//     sensor.addEventListener("error", (event) => {
//       console.log(event.error.name, event.error.message);
//     });
//     sensor.start();
//   }

var lightValue = document.getElementById('value');

(async function(){
    const {state} = await navigator.permissions.query({
        name: "ambient-light-sensor"
    });

    if (state !== "granted") {
        console.warn("You haven't granted permission to use the light sensor");
        return;
    }

    const sensor = new AmbientLightSensor();

    sensor.addEventListener("reading", () => {
        console.log(sensor.illuminance);
        lightValue.innerHTML = 'working';
    });

    sensor.addEventListener("error", err => {
        console.error(err);
        lightValue.innerHTML = 'not working';
    });

    sensor.start();
}());
