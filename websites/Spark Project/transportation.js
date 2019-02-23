let MiamiWeather = {};


//send a GET request to this endpoint to get Tampa weather
let weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=miami&APPID=69882536a7a55c8c1cb9b68561abab47&units=imperial';
// let weather1ApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Las+vegas&APPID=69882536a7a55c8c1cb9b68561abab47&units=imperial';
// let weather2ApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Destin&APPID=69882536a7a55c8c1cb9b68561abab47&units=imperial';
// let weather3ApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Cancun&APPID=69882536a7a55c8c1cb9b68561abab47&units=imperial';
// let weather4ApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Panama+City&APPID=69882536a7a55c8c1cb9b68561abab47&units=imperial';

function getMiamiWeather() {
    fetch(weatherApiUrl).then((response) => {return response.json();
    }).then((data) => {
        MiamiWeather = data;
        console.log(data);
        // let x = document.getElementById('weather').value;
        // x = 'the temperature is: '+MiamiWeather.main.temp+' degrees';
        // document.getElementById('weather') .innerHTML = x;
        console.log('the temperature is: '+MiamiWeather.main.temp+' degrees');
        // We can only fill the text field in once the fetch request has completed
        document.getElementById('weather').innerHTML = 'the temperature is: '+MiamiWeather.main.temp+' degrees';
   
    });
}


document.getElementById("getweatherM").addEventListener('click', function() {
    getMiamiWeather();
});






// let VegasWeather = {};

// function getVegasWeather() {
//     fetch(weather1ApiUrl).then((response) => {return response.json();
//     }).then((data) => {
//         VegasWeather = data;
//         console.log(data);
//         // let x = document.getElementById('weather').value;
//         // x = 'the temperature is: '+MiamiWeather.main.temp+' degrees';
//         // document.getElementById('weather') .innerHTML = x;
//         console.log('the temperature is: '+LasVegasWeather.main.temp+' degrees');
//         // We can only fill the text field in once the fetch request has completed
//         document.getElementById('weather').innerHTML = 'the temperature is: '+LasMiamiWeather.main.temp+' degrees';
   
//     });
// }
// document.getElementById("getweatherL").addEventListener('click', function() {
//     getMiamiWeather();
// });

// let DestinWeather = {};

// function getDestinWeather() {
//     fetch(weather2ApiUrl).then((response) => {return response.json();
//     }).then((data) => {
//         DestinWeather = data;
//         console.log(data);
//         // let x = document.getElementById('weather').value;
//         // x = 'the temperature is: '+MiamiWeather.main.temp+' degrees';
//         // document.getElementById('weather') .innerHTML = x;
//         console.log('the temperature is: '+DestinWeather.main.temp+' degrees');
//         // We can only fill the text field in once the fetch request has completed
//         document.getElementById('weather').innerHTML = 'the temperature is: '+DestinWeather.main.temp+' degrees';
   
//     });
// }

// document.getElementById("getweatherD").addEventListener('click', function() {
//     getMiamiWeather();
// });

