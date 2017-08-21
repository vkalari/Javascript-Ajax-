
var url = window.location.href.slice(window.location.href.indexOf('?') + 1);

var param = url.slice(url.indexOf("=") + 1);


var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         maindata = JSON.parse(this.responseText);


         //alert(maindata);
         console.log(maindata);
         console.log(maindata.allProducts[param].image_path);
         //var y = myObj.allProducts[0].image_path;

//         x.innerHTML = "<img id='img' src='" + y + "'>"


         var getimg = document.getElementById("img1");

         getimg.src = maindata.allProducts[param].image_path;

         var getinfo= document.getElementById("productinformation");
         getinfo.innerHTML = maindata.allProducts[param].product_description;



     }
 };
 xmlhttp.open("GET", "guitardata1.json.txt", true);
 xmlhttp.send();


function validateForm()
{
    var ae = document.getElementById('temp2');
    //alert(ae);
    ae.style.visibility ="visible";
    var ae = document.getElementById('temp1');
    //alert(ae);
    ae.style.visibility ="visible";
    var x = document.forms["Formdiv"]["fname"].value;
    var y = document.forms["Formdiv"]["lname"].value;
    var z = document.forms["Formdiv"]["cc"].value;
    var a = document.forms["Formdiv"]["email"].value;
   // var a = document.forms["Formdiv"]["stat"].value;

    //var b = document.getElementById('temp1');
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4= document.getElementById("p4");

    p1.innerHTML = x;
    p2.innerHTML = y;
    p3.innerHTML = z;
    p4.innerHTML = a;


    console.log(p1);


    //b.innerHTML =  "<br>" +x + "<br>" + y + "<br>" + z + "<br>" + a;

document.getElementById('formdiv').style.visibility = "hidden";
document.getElementById('reviewbtn').style.visibility = "hidden";

}


function Edit() {
    var ae = document.getElementById('temp1');
    //alert(ae);
    ae.style.visibility ="hidden";
    var ab = document.getElementById('temp2');
    ab.style.visibility ="hidden";
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4= document.getElementById("p4");

    document.forms["Formdiv"]["fname"].value = p1.innerHTML;
    document.forms["Formdiv"]["lname"].value= p2.innerHTML;
    document.forms["Formdiv"]["cc"].value= p3.innerHTML;
    document.forms["Formdiv"]["email"].value= p4.innerHTML;

    //var b = document.getElementById('temp1');

//b.innerHTML =  "<br>" +x + "<br>" + y + "<br>" + z + "<br>" + a;
    document.getElementById('formdiv').style.visibility = "visible";
    document.getElementById('reviewbtn').style.visibility = "visible";


}



function buy()
{

    var x = document.forms["Formdiv"]["fname"].value;
    var y = document.forms["Formdiv"]["lname"].value;
    var z = document.forms["Formdiv"]["cc"].value;
    var a = document.forms["Formdiv"]["email"].value;

    if(x == "" || !isNaN(x))
    {
        alert("Please enter your firstname");
        return false;
    }
   else if(y == "" || !isNaN(y) )
    {
        alert("Please enter your lastname");
        return false;
    }

    else if(isNaN(z) ||  z<17)
    {
        alert("Please enter correct credit card information");
        return false;
    }
    else if(a == "")
    {
        alert("Please enter correct email");
    }

    else if(typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("x", x);
        localStorage.setItem("y",y);

        //alert(param);
        var url = "page3.html?source=" + (param);

        console.log(url);

        window.location.href = url;

    }


}







