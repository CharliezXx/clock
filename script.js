(function(){

        let clockSeconds = document.querySelector("#clock-seconds"),
            clockMinutes = document.querySelector("#clock-minutes"),
            clockHours = document.querySelector("#clock-hours");

        function getTime() {

            let date = new Date(),
                seconds = date.getSeconds(),
                minutes = date.getMinutes(),
                hours = date.getHours(),

                degSeconds = seconds*360/60,
                degMinutes = (minutes+seconds/60)*360/60,
                degHours = (hours+minutes/60+seconds/60/60)*360/12;

                clockSeconds.setAttribute('style', 'transform: rotate('+ degSeconds + 'deg)');
                clockMinutes.setAttribute('style', 'transform: rotate('+ degMinutes + 'deg)');
                clockHours.setAttribute('style', 'transform: rotate('+ degHours + 'deg)');
        }
        setInterval(getTime,1000);
        getTime();
    }());