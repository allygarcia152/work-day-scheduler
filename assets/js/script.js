// get the current date
var date = document.getElementById("currentDay");
var milHours = ["8","9","10","11","12","13","14","15","16","17"];
var saveBtnEl = document.querySelectorAll(".saveBtn");
var currentHour = parseInt(moment().format('HH'));

// save tasks for each hour
var saveText = function(){
  var hour = this.parentElement.dataset.hour;
  var value = this.previousElementSibling.value;
  
  localStorage.setItem(hour, value);
};

//reload tasks on reload
var reload = function(){
  milHours.forEach(function(hour){
    //get items from localStorage
    var timeBlock = document.querySelector(`[data-hour="${hour}"] textarea`);
    timeBlock.value = localStorage.getItem(hour);
    //set color coding by hour
    if (parseInt(hour) > currentHour) {
      timeBlock.classList.add("future")
    } else if (parseInt(hour) === currentHour){
      timeBlock.classList.add("present")
    } else if (parseInt(hour) < currentHour) {
      timeBlock.classList.add("past")
    }
    console.log(hour, typeof parseInt(hour));
    console.log(currentHour, typeof currentHour);
  });

};

// date format
date.textContent = moment().format('MMMM Do, YYYY');

// save items to schedule
saveBtnEl.forEach(function(el) {
  el.addEventListener("click", saveText);
});


reload();



