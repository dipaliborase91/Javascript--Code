var today = new Date();

var dayofweek = today.getDay() //Sunday - Saturday : 0 - 6 

if(dayofweek == 0) {
    console.log("Today is Sunday!")
} else {
    console.log("Waiting for Sunday!")
}