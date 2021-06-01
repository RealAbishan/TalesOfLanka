/*Script For the Form*/


function validateForm()
{
    var formName = document.forms["submitForm"]["fName"].value;
    var formMail = document.forms["submitForm"]["mail"].value;
    var formFeedBack = document.forms["submitForm"]["feedBack"].value;
    var ratefeedBack = document.forms["submitForm"]["rating"].value;
    

   


    if( formName=="" && formMail =="" && formFeedBack=="")
    {
        alert("Please Fill the Feed Back Form");
        return false;
    }

    else if (formName=="" && formMail =="")

    {
        alert("Please Fill the Name And Mail Fields");
        return false;
    }

    
    else if (formMail =="" && formFeedBack=="")

    {
        alert("Please Fill the Mail And Feedback Fields");
        return false;
    }

    else if (formName=="" && formFeedBack=="")

    {
        alert("Please Fill the Name And Feedback Fields");
        return false;
    }

    else 
     {
        alert("Thank you" +  " " + formName + " " + " for your Feedback." + " " + "You've rated our service as" + " " + ratefeedBack + " " + "Your comment about our service was" +
        " " + formFeedBack + " ");
     }
    

    
}




/*
let message = [];
let txt = [];

function featureSubmit() {
    let suggestName =  document.getElementById("lname").value;
    let suggesetedFeature = document.getElementById("formIn").value;

    if
}

*/