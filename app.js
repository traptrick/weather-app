const input = document.getElementById('ask');
const btn = document.getElementById('btn');
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const API = '5323cf0b57f729cb7c8ef2d8a4ec9ec8';


            const call = async () => {
                 
                  try {
                        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API}`);
                        let data = await response.json();

                        let kelvin = data.main.temp;
                        let celsius = Math.floor(kelvin - 273.15);
                        let fahrenheit = Math.floor(celsius * 1.8 + 32);
                  
                        let iconId = data.weather[0].icon;
                        let description = data.weather[0].description;
                        let city = data.name;
                        let country = data.sys.country;
                  
                        iconElement.innerHTML = `<img src="icons/${iconId}.png"/>`;
                        tempElement.innerHTML = `${celsius}°<span>C</span>`;
                        descElement.innerHTML =  `${description}`;
                        locationElement.innerHTML = `${city}, ${country}`;
                  
                        tempElement.addEventListener('click', () =>{ 
                                    if( tempElement.innerHTML.includes("C") ){
                                          tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
                                    }
                                    else{
                                          tempElement.innerHTML = `${celsius}°<span>C</span>`;
                                    }
                        });   
                  } catch (error) {
                                iconElement.innerHTML = ``;
                                 tempElement.innerHTML = ``;
                                 descElement.innerHTML =  `🥺`;
                                locationElement.innerHTML = `Oops! Place Not Found 🤷`;
                  }
                             
            }

btn.addEventListener('click', call);