function compute()
{
    //Initialize variables and take values from users
    var principal = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Validation of the "Principal" input box
    if (principal <= 0 || principal==""){
        alert("Enter a positive number ");
        document.getElementById("principal").focus();
        return false;
    }
    
    //Calculate the generated interest
    var interest = principal * years * rate /100;

    //Calculate the year in which will be available
    var year = new Date().getFullYear() +parseInt(years);

    //Add the text to be shown to the HTML file
    document.getElementById("result0").insertAdjacentHTML('beforebegin','<br/>');
    document.getElementById("result0").innerText="If you deposit ";
    document.getElementById("result1").innerText=principal + ",";
    document.getElementById("result1").insertAdjacentHTML('afterend','<br/>');
    document.getElementById("result2").innerText="at an interest rate of ";
    document.getElementById("result2.1").innerText=rate + "%.";
    document.getElementById("result2.1").insertAdjacentHTML('afterend','<br/>');
    document.getElementById("result3").innerText="You will receive an amount of ";
    document.getElementById("result3.1").innerText=interest + ",";
    document.getElementById("result3.1").insertAdjacentHTML('afterend','<br/>');
    document.getElementById("result4").innerText="in the year ";
    document.getElementById("result4.1").innerText=year;
    document.getElementById("result4.1").insertAdjacentHTML('afterend','<br/>');

}

//Function to update the number next to the slider
function updateRate()
{
    //Get the rate from the slider
    var rateval = document.getElementById("rate").value;
    
    //Show the corresponding value
    document.getElementById("rate_val").innerText=rateval + '%';
}       