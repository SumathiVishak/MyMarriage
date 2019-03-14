var fullTime;
setInterval(() => {
    var difference;
    var finalDate = new Date("05-23-2019 10:30");
    var currentDate = new Date();
    difference = finalDate-currentDate;
    fullTime = dhm(difference);
    timeInt = fullTime.split(":")
    var ex = 0;
   

    document.getElementById("days").innerHTML = timeInt[0]+"days";
    document.getElementById("hours").innerHTML = timeInt[1]+"hours";
    document.getElementById("mins").innerHTML = timeInt[2]+"mins";
    document.getElementById("secs").innerHTML = timeInt[3]+"secs";
}, 1000);

function dhm(ms){
    days = Math.floor(ms / (24*60*60*1000));
    daysms=ms % (24*60*60*1000);
    hours = Math.floor((daysms)/(60*60*1000));
    hoursms=ms % (60*60*1000);
    minutes = Math.floor((hoursms)/(60*1000));
    minutesms=ms % (60*1000);
    sec = Math.floor((minutesms)/(1000));
    return days+":"+hours+":"+minutes+":"+sec;
}
function myMap() {
    // var mapProp= {
    //   center:new google.maps.LatLng(16.515099,80.632095),
    //   zoom:15,
    // };
    // var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    // var marker = new google.maps.Marker({position: TARAPET, map: map});
    // }
   
var ManickamMahal = {lat: 8.7911, lng: 78.1412};
var map = new google.maps.Map(
    document.getElementById('googleMap'), {zoom: 15, center: ManickamMahal});
var marker = new google.maps.Marker({position: ManickamMahal, map: map});

}
    
    setTimeout(() => {
        myMap()  
    }, 1000);
    
    var marker = new google.maps.Marker({position: myCenter});

    marker.setMap(map);
    
