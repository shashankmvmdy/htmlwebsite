document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'fb1c26a7d0f9a09f54f233ec3d21f172'; // Replace with your OpenWeatherMap API key
    const city = 'Bengaluru';
    const weatherElement = document.getElementById('weather');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Conditions: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        })
        .catch(error => {
            temperatureElement.textContent = 'Error fetching data';
            descriptionElement.textContent = 'Please try again later';
            console.error('Error fetching weather data:', error);
        });
});


