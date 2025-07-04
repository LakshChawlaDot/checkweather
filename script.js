// function get_weather(){
//     const apiKey="f9358af017294b90aaa121512252306"
//     const city=document.getElementById("input").value;

//     const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

//     fetch(url)
//         .then(Response=>{
//             if(!Response.ok){
//                 throw new Error("city not found");
                
//             }
//             return Response.json()
//         }
//         )

//         .then(data => {
//             const weatherHTML = `
//                 <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
//                 <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
//                 <p><strong>Condition:</strong> ${data.current.condition.text}</p>
//                 <img src="${data.current.condition.icon}" alt="Weather Icon">
//                 <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
//                 <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
//             `;
//             document.getElementById("form").innerHTML = weatherHTML;
//         })

// }
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "f9358af017294b90aaa121512252306";

  document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
         const weather = data.current;
        const location = data.location;
        const weatherDiv = document.getElementById("weatherResult");
        weatherDiv.innerHTML = `
           <h2>${location.name}, ${location.country}</h2>
            <p><strong>Local Time:</strong> ${location.localtime}</p>
            <p><strong>Temperature:</strong> ${weather.temp_c}°C</p>
            <p><strong>Feels Like:</strong> ${weather.feelslike_c}°C</p>
            <p><strong>Condition:</strong> ${weather.condition.text} <img src="${weather.condition.icon}" alt="icon"></p>
            <p><strong>Humidity:</strong> ${weather.humidity}%</p>
            <p><strong>Wind:</strong> ${weather.wind_kph} km/h (${weather.wind_dir})</p>
            <p><strong>UV Index:</strong> ${weather.uv}</p>
            <p><strong>Last Updated:</strong> ${weather.last_updated}</p>
          `;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  });
});
