var url = window.location.href.slice(window.location.href.indexOf('?') + 1);
var param1 = url.slice(url.indexOf("=") + 1);

document.getElementById("firstname").innerHTML = localStorage.getItem("x");
document.getElementById("lastname").innerHTML = localStorage.getItem("y");

var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var combined = document.createElement('div');
combined.innerHTML = "Thank You" + " " + firstname.innerHTML + " " + lastname.innerHTML+ " " + "for purchase this product from us";
combined.id = 'new';
// var x =document.getElementById('div1').appendChild(combined);
var x = document.getElementById('div1').appendChild(combined);
console.log(x);


// window.location.href;
// window.location.href.slice(window.location.href.indexOf('?') + 1);
// var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
// var params;
// for (var i=0;i<url.length;i++) {
//     params = url[i].split("=");
// }


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        maindatapage3 = JSON.parse(this.responseText);


       // alert(maindatapage3);
        console.log(maindatapage3);
        //(maindatapage3.allProducts[param1].image_path);
        //var y = myObj.allProducts[0].image_path;

//         x.innerHTML = "<img id='img' src='" + y + "'>"


        var getimg1 = document.getElementById('img2');
        //getimg1.src = maindatapage3.allProducts[param1].image_path;
        getimg1.src = maindatapage3.allProducts[param1].image_path;


        var getdesc = document.getElementById('page3datadesc');
        getdesc.innerHTML = maindatapage3.allProducts[param1].product_description;

        var getshipping = document.getElementById('page3datashipping');
        getshipping.innerHTML = maindatapage3.allProducts[param1].shipping_details;

        var getprice = document.getElementById('page3dataprice');
        getprice.innerHTML = maindatapage3.allProducts[param1].price;





    }
};
xmlhttp.open("GET", "guitardata1.json.txt", true);
xmlhttp.send();


function relocate_home()
{
    location.href = "guitar.html";
}
