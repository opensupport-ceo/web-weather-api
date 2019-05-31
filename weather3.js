function realTimeWeather3(nx, ny){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    console.log("minutes: " + minutes)
 
    if(minutes < 30){
        // 30분보다 작으면 한시간 전 값
        hours = hours - 1;
        if(hours < 0){
            // 자정 이전은 전날로 계산
            today.setDate(today.getDate() - 1);
            dd = today.getDate();
            mm = today.getMonth()+1;
            yyyy = today.getFullYear();
            hours = 23;
        }
    }
    if(hours<10) {
        hours='0'+hours
    }
    if(mm<10) {
        mm='0'+mm
    }
    if(dd<10) {
        dd='0'+dd
    }

    /* 
    ** test for hours because of items's count 
    ** Could not get weather info. when from 05:30 to 08:29.
    */
    //hours = '05';

    console.log(hours);

    var _nx = nx,
    _ny = ny,
    apikey = "API-Key",
    today = yyyy+""+mm+""+dd,
    basetime = hours + "00",
    ForecastGribURL = "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData";
    ForecastGribURL += "?ServiceKey=" + apikey;
    ForecastGribURL += "&base_date=" + today;
    ForecastGribURL += "&base_time=" + basetime;
    ForecastGribURL += "&nx=" + _nx + "&ny=" + _ny;
    ForecastGribURL += "&pageNo=1&numOfRows=7";
    ForecastGribURL += "&_type=json";

    var xhr = new XMLHttpRequest();
    //xhr.open("GET" , encodeURI(ForecastGribURL) , true);
    xhr.open("GET" , ForecastGribURL , true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            alert(xhr.responseText);
            var text = xhr.responseText;
            text = text.replace(/(<([^>]+)>)/ig,"");
            text = '[' + text + ']';
            
            var jsonObj = JSON.parse(text);
            if(jsonObj[0].response.body.totalCount != 0){
                var rainsnow = jsonObj[0].response.body.items.item[0].fcstValue;
                var rain_state = jsonObj[0].response.body.items.item[1].fcstValue;
                var rain = jsonObj[0].response.body.items.item[3].fcstValue;
                var sky = jsonObj[0].response.body.items.item[4].fcstValue;
                var temperature = jsonObj[0].response.body.items.item[5].fcstValue;
            }else{
                console.log("Could not get weather info.");
            }
            
            console.log(rainsnow);
            console.log(rain_state);
            console.log(rain);
            console.log(sky);
            console.log(temperature);
        }
    }
    xhr.send();
}