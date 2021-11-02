let main = document.querySelector("main");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let displayBackToWork = document.querySelector("p");

let secoundBtn = document.getElementById("fimin");
secoundBtn.addEventListener("click",()=>{
    var cal = 5*60;
    startToCount(cal);
    displayBackToWork.textContent = `back to work at ${AddMinutesToCurrentTime(5)}`;
} );

let thirdBtn = document.getElementById("fifmin");
thirdBtn.addEventListener("click",()=>{
    var cal = 15*60;
    startToCount(cal);
    displayBackToWork.textContent = `back to work at ${AddMinutesToCurrentTime(15)}`;
} );

let forthBtn = document.getElementById("twmin");
forthBtn.addEventListener("click",()=>{
    var cal = 20;
    startToCount(cal);
    displayBackToWork.textContent = `back to work at ${AddMinutesToCurrentTime(20)}`;
} );

let fifthBtn = document.getElementById("onehr");
fifthBtn.addEventListener("click",()=>{
    var cal = 60*60;
    startToCount(cal);
    displayBackToWork.textContent = `back to work at ${AddMinutesToCurrentTime(60)}` ;
} );

let sixthBtn = document.querySelector("input").value;
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click",()=>{
    let inputUser =parseInt(sixthBtn);
    var cal = inputUser * 60;
    startToCount(cal);
    displayBackToWork.textContent = `back to work at ${AddMinutesToCurrentTime(inputUser)}`;
})



function startToCount(inputBtn) {
    let time = inputBtn;
     let countDown = setInterval(function () {
        let minutes = parseInt(time / 60);
        let seconds = parseInt(time % 60);
       if(minutes < 10){
           minutes = "0"+minutes;
       }
       if(seconds < 10){
           seconds = "0"+seconds;
       }

        minute.innerHTML = minutes;
        second.innerHTML = `:${seconds}`;
       time--;

        if (time < 0) {
            clearInterval(countDown);
        }
      
    }, 1000);
}

function AddMinutesToCurrentTime(minutes) {
    let now = new Date();
    let future = new Date(now.getTime() + minutes*60000);
    return parseInt(future.getHours())+":"+ parseInt(future.getMinutes());
    
}



