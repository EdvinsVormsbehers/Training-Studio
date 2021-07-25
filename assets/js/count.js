var countDownDate = new Date("Jul 27, 2021 18:30:00").getTime();
//lai apdeito laiku ik pec sekundes
var x = setInterval(function() {

//get sodienas datumu un laiku
    var now = new Date().getTime();

//atrodam attalumu starp tagadejo laiku un laiku lidz kuram skaitit
    var distance = countDownDate - now;

//laika aprekins dienam, stundam, minutem un sekundem
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//izdod rezultatu elementa ar id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

//when countdown ends
    if (distance < 0 )
    {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Training starts!!!";
        document.getElementById("hide").style.display = "none";
    }
}, 1000);
