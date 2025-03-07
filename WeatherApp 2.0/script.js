const container = document.querySelector(',container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', ()=> {
    
    const APIKey = 'ebb717ca16de3a6e4f0be7fcbc5c7a1d';
    const city  = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={APIKey}').then(response.json()).then(json =>{

        const img = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                img.src ='img/sunny.png';
                break;

            case 'Rain':
                img.src ='img/rainy.png';
                break;

                case 'Snow':
                    img.src ='img/snowy.png';
                    break;

                    case 'Cloud':
                        img.src ='img/Cloudly.png';
                        break;
                    
                        case 'Mist':
                            img.src ='img/Mist.png';
                            break;
                        
                            case 'Haze':
                                img.src ='img/Haze.png';
                                break;

                default:
                    img.src ='img/Cloudly.png';
                    
        }

        temperature.innerHTML =  '${parseInt(jason.main.temp)}<span>°C</span>';
        description.innerHTML =  '${json.weather[0].description}';
        humidity.innerHTML =  '${json.main,humidity}%';
        wind.innerHTML =  '${parseInt(jason.wind.speed)}Km/h';

    });
});