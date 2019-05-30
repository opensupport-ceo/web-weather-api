
function rplLine(value){
    if (value != null && value != "") {
        return value.replace(/\n/g, "\\n");
    }else{
        return value;
    }
}

function realTimeWeather1(nx, ny){
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
 
    var _nx = nx,
    _ny = ny,
    apikey = "API-Key",
    today = yyyy+""+mm+""+dd,
    basetime = hours + "00",
    fileName = "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData";
    fileName += "?ServiceKey=" + apikey;
    fileName += "&base_date=" + today;
    fileName += "&base_time=" + basetime;
    fileName += "&nx=" + _nx + "&ny=" + _ny;
    fileName += "&pageNo=1&numOfRows=10";
    fileName += "&_type=json";
 
    $.ajax({
        url: fileName,
        type: 'GET',
        cache: false,
        success: function(data) {
            //var myXML = rplLine(data.responseText);
            var myXML = JSON.stringify(data);
            var indexS = myXML.indexOf('"body":{"items":{');
            var indexE = myXML.indexOf("}]}");
            var result = myXML;
            //result = myXML.substring(indexS, indexE);

            var jsonObj = $.parseJSON('[' + result + ']');
            //console.log(jsonObj);
            var rainsnow = jsonObj[0].response.body.items.item[0].fcstValue;
            var rain_state = jsonObj[0].response.body.items.item[1].fcstValue;
            var rain = jsonObj[0].response.body.items.item[3].fcstValue;
            var sky = jsonObj[0].response.body.items.item[4].fcstValue;
            var temperature = jsonObj[0].response.body.items.item[5].fcstValue;

            console.log(rainsnow);
            console.log(rain_state);
            console.log(rain);
            console.log(sky);
            console.log(temperature);
                      
            var contentText = document.getElementById('allweather');
            contentText.innerHTML = "하늘 상태 : " + sky + " / 눈 비 상태 : " + rainsnow + " / 온도 : " + temperature;
        },
        error:function(request,status,error){
            alert("다시 시도해주세요.\n" + "code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
 
}







