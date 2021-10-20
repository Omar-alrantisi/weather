

async function getJson(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b64811d1bdd155af065a2b8e5b104f32&units=metric`;

    const response = await fetch(apiUrl);
   const data = await response.json();
  console.log(data);

  //today
  let dayToday=document.getElementById("daytoday");
  let today = new Date();
  dayToday.innerHTML=today.toLocaleString('en-us', {  weekday: 'long' });

  //date
  let dateToday=document.getElementById("date_today");
  let date =`${today}`.split(' ');
  dateToday.innerHTML=date[2]+" "+date[1]+" "+date[3];

  //location
  let location =document.getElementById("location");
  location.innerHTML=data.name;

  //temp
  let wetherTemp=document.getElementById("weather-temp");
  wetherTemp.innerHTML=`${data.main.temp}°C`;
//description
let weatherDesc=document.getElementById("weather-desc");
weatherDesc.innerHTML=data.weather[0].main;

//hemidity

let hem=document.getElementById("hemvalue");
hem.innerHTML=data.main.humidity;

//wind
let wind=document.getElementById("speed");
wind.innerHTML=`${data.wind.speed}km/h`;


  
}

getJson();

let countris =document.getElementById("country");

countris.addEventListener("change",function(){
    getJson(countris.value);
})




























/*let select_contry=document.getElementById("country");

select_contry.addEventListener("change",change);

let contries=select_contry.value;
let v=`https://api.openweathermap.org/data/2.5/weather?q=${contries}&appid=b64811d1bdd155af065a2b8e5b104f32`

fetch(v)
.then(response => response.json())
.then(data => 
    
    
    {

        console.log(data);
        location1.innerHTML=data.name+" "+ data.sys.country;
         temp.innerHTML= convertToCelsius(data.main.temp);
    }
)

    
    
 
// console.log(data.main.);

//Today
let today = new Date();
let day = document.getElementById("date_day");

day.innerHTML=today.toLocaleString('en-us', {  weekday: 'long' });

//date
let dayy = document.getElementById("date_today");
dayy.innerHTML=date[2]+" "+date[1]+" "+date[3];
let date =`${today}`.split(' ');

//location
let location1 =document.getElementById("location");





 function change(){
     console.log(select_contry.value);
 }
 
//
let temp=document.getElementById("weather-temp");

function convertToCelsius(num){
    let c=num - 273.15
return `${c}`.substr(0,2)+"°C"
}

*/