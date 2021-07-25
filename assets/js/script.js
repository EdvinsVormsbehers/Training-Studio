let weather = {
    //"apiKey": "59b68e981126a31011e5ca039720c0c8",
    //"apiKey": "ecbb3886f8fe3f8258d1cae670ce6cde",
    //"apiKey": "25edf8923e4ee5e7762dcd621a01458f",
    "apiKey": "c8d4ad4225665a1bb0246344610b27c0",
    /*fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data)=> console.log(data));
    },
    displayWeather:function (data) {
        const{name} =data;
        const{icon,description} = data.weather;
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        

    }*/
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => response.json())
            .then((data)=> this.displayWeather(data));
    },
    displayWeather:function (data) {
        const{name} =data;
        const{icon,description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText= temp + "°C";
        document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText= "Wind speed: " + speed + "m/s";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
        .addEventListener("click",function(){
            weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather(Denver);


const addMessage = async () => {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value

    try {
        const response = await fetch('http://127.0.0.1:5000/insert_message/'
            + name + '/' + email + '/' + subject + '/' + message, {method: 'POST',});
        const data = await response.json();

        //	enter you logic when the fetch is successful
        console.log(data);
    }
    catch(error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
    }
}


// jQuery(document).ready(function($){
//
//     sessionStorage.setItem('h5ab-print-article', '<div id="h5ab-print-content"><h1>Kontakti</h1>' + "<p><a href=\"http:\/\/studijasievietem.lv\/index.php\/nodarbibu-saraksts\/16245023_1636678733016221_1238352632_o-2\/\"><img class=\"alignnone wp-image-383 \" src=\"http:\/\/studijasievietem.lv\/wp-content\/uploads\/2016\/11\/16245023_1636678733016221_1238352632_o-1-300x168.jpg\" alt=\"\" width=\"511\" height=\"286\" srcset=\"http:\/\/studijasievietem.lv\/wp-content\/uploads\/2016\/11\/16245023_1636678733016221_1238352632_o-1-300x168.jpg 300w, http:\/\/studijasievietem.lv\/wp-content\/uploads\/2016\/11\/16245023_1636678733016221_1238352632_o-1-768x430.jpg 768w, http:\/\/studijasievietem.lv\/wp-content\/uploads\/2016\/11\/16245023_1636678733016221_1238352632_o-1.jpg 944w\" sizes=\"(max-width: 511px) 100vw, 511px\" \/><\/a><\/p>\n<h2><strong>Darba laiks<\/strong><\/h2>\n<p><strong>DARBA DIEN\u0100S<\/strong><br \/>\nPirmdien 9:00-12:00, 15:00-21:00<br \/>\nOtrdien 9:00-12:00, 15:00-21:00<br \/>\nTre\u0161dien 9:00-12:00, 15:00-21:00<br \/>\nCeturtdien 9:00-12:00, 15:00-21:00<br \/>\nPiektdien 9:00-12:00, 15:00-21:00<br \/>\n<strong>BR\u012aVDIEN\u0100S<\/strong><br \/>\nSestdien 9:00-13:00<br \/>\nSv\u0113tdien SL\u0112GTS<\/p>\n<p><strong>Adrese:<\/strong> M\u0101lkalnes prospekts 34, Ogre<br \/>\n<strong>Telefons:<\/strong> 65027775<br \/>\n<strong>E-pasts<\/strong>: info@studijasievietem.lv<\/p>\n<div class=\"addtoany_share_save_container addtoany_content addtoany_content_bottom\"><div class=\"a2a_kit a2a_kit_size_32 addtoany_list\" data-a2a-url=\"http:\/\/studijasievietem.lv\/index.php\/kontakti\/\" data-a2a-title=\"Kontakti\"><a class=\"a2a_button_draugiem\" href=\"https:\/\/www.addtoany.com\/add_to\/draugiem?linkurl=http%3A%2F%2Fstudijasievietem.lv%2Findex.php%2Fkontakti%2F&amp;linkname=Kontakti\" title=\"Draugiem\" rel=\"nofollow noopener\" target=\"_blank\"><\/a><a class=\"a2a_button_facebook\" href=\"https:\/\/www.addtoany.com\/add_to\/facebook?linkurl=http%3A%2F%2Fstudijasievietem.lv%2Findex.php%2Fkontakti%2F&amp;linkname=Kontakti\" title=\"Facebook\" rel=\"nofollow noopener\" target=\"_blank\"><\/a><a class=\"a2a_button_twitter\" href=\"https:\/\/www.addtoany.com\/add_to\/twitter?linkurl=http%3A%2F%2Fstudijasievietem.lv%2Findex.php%2Fkontakti%2F&amp;linkname=Kontakti\" title=\"Twitter\" rel=\"nofollow noopener\" target=\"_blank\"><\/a><\/div><\/div>" + '</div>');
//
//     $.strRemove = function(theTarget, theString) {
//         return $("<div/>").append(
//             $(theTarget, theString).remove().end()
//         ).html();
//     };
//
//     var articleStr = sessionStorage.getItem('h5ab-print-article');
//     var removeArr = ['video','audio','script','iframe'];
//
//     $.each(removeArr, function(index, value){
//         var processedCode = $.strRemove(value, articleStr);
//         articleStr = processedCode;
//     });
//
//     var fullPrintContent = articleStr;
//     sessionStorage.setItem('h5ab-print-article', fullPrintContent);
//
// });

