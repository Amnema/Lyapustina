//Checking of name field
function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s]{2,30}$/;

    if (regex.test(name)) { // if testing of first is true
        document.getElementById("name_check").style.color = "green";
        document.getElementById("name_check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("name_check").style.color = "red";
        document.getElementById("name_check").innerHTML = "Please, enter 2-30 characters";
        return false;
    }
}

//Checking of Phone number field
function checkTel() {
    var tel = document.getElementById("tel").value;
    var regex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (regex.test(tel)) { // if testing of first is true
        document.getElementById("tel_check").style.color = "green";
        document.getElementById("tel_check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("tel_check").style.color = "red";
        document.getElementById("tel_check").innerHTML = "Input is incorrect!";
        return false;
    }
}

//Checking of Address field
function checkAddress() {
    var address = document.getElementById("address").value;
    var regex = /^[a-zA-Z\s]{2,40},\s*[a-zA-Z\s]{2,40},\s*\d{1,300}$/;

    if (regex.test(address)) { // if testing of first is true
        document.getElementById("address_check").style.color = "green";
        document.getElementById("address_check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("address_check").style.color = "red";
        document.getElementById("address_check").innerHTML = "Please enter the address in the format: City, Street, House";
        return false;
    }
}

//Collect and output all the data
function outputData() {
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;

    if (name != "" && tel != "" && address != "" && date != "" && time != "") {
        
        alert("Hello, " + name + "! \n Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: \n Your phone number: " 
        +tel + "\nWe will deliver to this address: " + address + "\n Date and Time of delivery: " + dateAndTime + "\n We are glad that You use our company's services :)");
        
    }
    else {
       alert("Please, fill in all the fields..."); 
    }
}

function invisible() {
    document.getElementById("invisible_after_btn").style.display='none';
}

const block1= document.getElementById("big_block1");
block1.addEventListener('mouseenter', function() {
    block1.style.fontSize= '24px';
});
block1.addEventListener('mouseleave', function() {
    block1.style.fontSize= '';
});
const block2= document.getElementById("big_block2");
block2.addEventListener('mouseenter', function() {
    block2.style.fontSize= '24px';
});
block2.addEventListener('mouseleave', function() {
    block2.style.fontSize= '';
});
const block3= document.getElementById("big_block3");
block3.addEventListener('mouseenter', function() {
    block3.style.fontSize= '24px';
});
block3.addEventListener('mouseleave', function() {
    block3.style.fontSize= '';
});
