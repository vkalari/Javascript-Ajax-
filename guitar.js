//document.addEventListener('DOMContentLoaded',function () {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }



    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);

            // var x =document.getElementById("guitarimg");

            // var y =myObj.allProducts[0].image_path;

            // x.innerHTML = "<img id='img' src='" + y + "'>"
            console.log(myObj);

        }
    };
    xmlhttp.open("GET", "guitardata1.json.txt", true);
    xmlhttp.send();

    var a = 0;



    function next() {
        var y = myObj.allProducts.image_path;
        var temp = document.getElementById("img");
        var temp1 = document.getElementById("productinfo");
        var temp2 = document.getElementById("shippinginfo");
        var temp3 = document.getElementById("custreview");


        //temp.innerHTML = "<img id='img' src='" + y + "'>"

        if (a < myObj.allProducts[a].image_path.length -1) {
            //
            //     //alert(x);
            var currentProductObj = myObj.allProducts[a + 1];
            temp.src = myObj.allProducts[a + 1].image_path;


            temp1.innerHTML = myObj.allProducts[a+1].product_description;
            temp2.innerHTML = myObj.allProducts[a+1].shipping_details;
            temp3.innerHTML = myObj.allProducts[a+1].customer_reviews;
            a++;
            console.log(myObj);
            //


            // nextImage = (getCurrentImageIndex() + 1) % myObj.allProducts.image_path.length;
            // var a = document.getElementById('img');
            // a.src = myObj.allProducts.image_path[nextImage];
        }

        else {
            alert("This is last image.");
            console.log(img.src);


        }
    }
// var tc;
// tc.src = myObj.allProducts[a].image_path;
// console.log(tc.src);


        function previous() {
            var temp = document.getElementById("img");
            var temp1 = document.getElementById("productinfo");
            var temp2 = document.getElementById("shippinginfo");
            var temp3 = document.getElementById("custreview");


            if (a >= 1) {


                temp.src = myObj.allProducts[a - 1].image_path;
                temp1.innerHTML = myObj.allProducts[a - 1].product_description;
                temp2.innerHTML = myObj.allProducts[a - 1].shipping_details;
                temp3.innerHTML = myObj.allProducts[a - 1].customer_reviews;
                a--;
                console.log(a);

            }


        }

        function buy() {
            //alert(a);
            var imgValue = document.getElementById("img1");
            var productInfoValue = document.getElementById("productinfo");

            // imgValue.src = myObj.allProducts[a].image_path;
            // productInfoValue.innerHTML = myObj.allProducts[a].product_description;

            var url = "page2.html?source=" + (a);
            // var element = document.getElementById('getelement');
            // element.setAttribute("page2.html",url);

            window.location.href = url;


        }



//)


