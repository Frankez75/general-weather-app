let weather = {
  apikey:"ec5932f21abe5d1812dddfa4901c68ed",
  fetchweather:function(city)
{fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
  + city 
  + "&units=metric&appid="
  + this.apikey)
  .then((response) => response.json())
  .then((data) => this.displayweather(data));
  },
  displayweather:function(data)
  {const {name} = data;
   const {icon,description} = data.weather[0];
   const {temp,humidity} = data.main;
   const {speed} = data.wind;
   
  document.querySelector(".city")
    .innerText = "Weather in" + name;
  document.querySelector(".iconIMG")
    .src="https://openweathermap.org/img/wn"
    + icon + "@2x.png"
  document.querySelector(".desc")
    .innerText = description
  document.querySelector(".Temp")
    .innerText = temp + "°C"
  document.querySelector(".humidity")
    .innerText = "humidity :" + humidity + "%"
  document.querySelector(".wind")
   .innerText = "Wind speed:" + speed + "km/h"
  document.querySelector(".weather")
   .classList.remove("loading");
   },
  search:function()
    {this.fetchweather(document.querySelector
      (".searchbar").value);
     }
   }

 document.querySelector("button")
 .addEventListener("click",function()
     {weather.search();}
     );
     
 document.querySelector(".searchbar")
 .addEventListener("keyup",function(event)
  {if (event.key == "Enter")
   {weather.search()}}
   );
