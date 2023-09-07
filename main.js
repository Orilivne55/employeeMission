       var worker = {};
      
        function workerDetails() {
            var firstNameValue = document.getElementById("userFirstNameInput").value;
            var lastNameValue = document.getElementById("userLastNameInput").value;
            var emailValue = document.getElementById("emailInput").value;
            var theBirthValue = document.getElementById("dateInput").value;
            var phoneUserValue = document.getElementById("phoneNum").value;
            var userJobValue = document.getElementById("userJob").value;
            var workerFirstName = firstNameValue.charAt(0) == firstNameValue.charAt(0).toUpperCase();
            var workerLastName = lastNameValue.length <= 20;
            var date = new Date();
            var workerDateBirth = new Date(theBirthValue);
            var age = date.getFullYear() - workerDateBirth.getFullYear();
            var chackAge = age > 16 && age < 64;
            var workerEmail = (emailValue.lastIndexOf(".com") == emailValue.length - 4 && emailValue.length > 3) ||
                              (emailValue.lastIndexOf("co.il") == emailValue.length - 5 && emailValue.length > 4);
            var workerPhone = phoneUserValue.length == 10 && phoneUserValue.charAt(0) == "0";

            if (workerFirstName &&
                workerLastName &&
                chackAge &&
                workerEmail &&
                workerPhone) {
                worker = {
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    dateBirth: theBirthValue,
                    email: emailValue,
                    phone: phoneUserValue,
                    job: userJobValue,
                };
                console.log(worker);
                return true;
            } else
            {
                if(!workerFirstName){
                    nameLabel.innerHTML = `<span>first char must be capital char</span>`
                    nameLabel.style.color = "red"
                }
                if (!workerLastName) {
                    nameLabel2.innerHTML = `<span>must be less then 20 char</span>`
                    nameLabel2.style.color = "red"
                }
                if(!chackAge){
                    ageLable.innerHTML = `<span>you must be 18+</span>`
                    ageLable.style.color = "red"
                }
                if(!workerEmail){
                    emailLable.innerHTML = `<span>must end with ".com" / "co.il"</span>`
                    emailLable.style.color = "red"
                }
                if(!workerPhone){
                    phoneLable.innerHTML = `<span>must start with 0 & 10 numbers</span>`
                    phoneLable.style.color ="red"
                }
                return false;
            }
        }
        
        var timeDisplay = document.getElementById("time");
        
        
        function refreshTime() {
  var dateString = new Date().toLocaleString("heb-is", {timeZone: "Asia/Jerusalem"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}
setInterval(refreshTime, 1000);


var submition = 0;
var falseSubmission = false;
var timerRunning = false;
function cancelAfterFourthsPressSubmit() {
    if (falseSubmission) {
        return;
    }
    submition++;
    if (submition >= 4 && !timerRunning) {
        disableInputs();
        startTimer();
        falseSubmission = true; 
    }
}

function disableInputs() {
    userFirstNameInput.disabled = true
    userLastNameInput.disabled = true
    dateInput.disabled = true
    emailInput.disabled = true
    phoneNum.disabled = true
    userJob.disabled = true
    btn.disabled = true
}

function enableInputs() {
    userFirstNameInput.disabled = false
    userLastNameInput.disabled = false
    dateInput.disabled = false
    emailInput.disabled = false
    phoneNum.disabled = false
    userJob.disabled = false
    btn.disabled=false
}

function startTimer() {
    var remainingTime = 30;
    var secondTimer = document.getElementById("secondTimer");
    secondTimer.innerText = remainingTime + " seconds left :)";

    var counterTimer = setInterval(function () {
        remainingTime--;

        if (remainingTime < 0) {
            enableInputs();
            secondTimer.innerText = "";
            clearInterval(counterTimer);
            timerRunning = false;
        } else {
            secondTimer.innerText = remainingTime + " seconds left :)";
        }
    }, 1000);

    timerRunning = true;
}







        
        
