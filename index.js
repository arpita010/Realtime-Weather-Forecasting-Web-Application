
let val;
document.getElementById("submitbtn").addEventListener("click", () => {
    val = document.getElementById("inp").value;
    console.log("val is "+val);
    btnClicked();
});
function btnClicked() {
    console.log("inside btnClciked fucntion");
    console.log("value is " + val);
    let infoSec = document.getElementById("infoSection");
    console.log(infoSec);
    infoSec.style.display = "block";
    document.getElementById("searchSection").style.display = "none";
    var body = document.getElementsByTagName('body')[0];
    body.style.background= 'url(img/colorful.jpg)';
    body.style.backgroundPosition="center";
    body.style.backgroundRepeat= "no-repeat";
    body.style.backgroundOrigin="border-box";
    document.getElementById("cityName").innerHTML="City :   "+val;
    forapi(val); 
}
async function forapi(city){
console.log("city is "+city);

    var f = "https://api.openweathermap.org/data/2.5/weather?q="+city.trim()+"&appid=4a35ee10d83e688815c20ed70ce28bdf"

    const response = await fetch(f);    
    var data = await response.json();
    console.log(data);

    if(data.cod==200){
        document.getElementById("result-2").innerHTML=data.weather[0].description;
        document.getElementById("result-3").src="http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        document.getElementById("result-4").innerHTML=Math.round(((data.main.temp-273.15)*1.8)+32)+"°K";
        document.getElementById("result-5").innerHTML=Math.round(data.main.temp-273.15)+"°C";
        document.getElementById("longLabel").innerHTML=""+data.coord.lon;
        document.getElementById("latLabel").innerHTML=""+data.coord.lat;
        document.getElementById("HumidityLabel").innerHTML=""+data.main.humidity+"%";
        document.getElementById("WinSpeedLabel").innerHTML=""+data.wind.speed+" km/hr";
    console.log(data);
    }
}