function isChecked(){
    let yes1 = document.getElementById('yes') .isChecked;
    let no1 = document.getElementById('no') .isChecked;

    if(yes1===false && no1 === false){
        alert('Please select yes or no')
        return false;
    }
    else {
        return true;
    }


}




function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 21) {
        text = "You are Not 21";
    } else {
        window.location.href = '21+spots.html';
    }
    document.getElementById("demo").innerHTML = text;
}

function myFunction1(){
    window.location.href = 'Ratings.html';
}
