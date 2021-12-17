let parent = document.getElementById("showitems");
let localcourse = JSON.parse(localStorage.getItem("coursecart"));
// console.log(localcourse)
function showproduct() {
    var sum = 0;
    localcourse.forEach(function (products) {
        let div = document.createElement("div");
        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.setAttribute("id", "cutitem");
        delBtn.onclick = function () {
            deleteFromCart(products);
        }
        let img = document.createElement("img");
        img.src = products.image
        let product_name = document.createElement("h4")
        product_name.textContent = products.name;
        let product_price1 = document.createElement("p");
        product_price1.textContent = "₹ " + products.price1;
        let product_price = document.createElement("p");
        product_price.textContent = "₹ " + products.price;
        var lines = document.createElement("hr");
        lines.setAttribute('class', 'H')
        div.append(delBtn, img, product_name, product_price1, product_price)
        parent.append(div, lines)
        sum = sum + Number(products.price)
    })
    // console.log(sum)
    var totalAmount = document.getElementById("totalamount")
    totalAmount.textContent = sum;
    var addCGST = document.getElementById("cgst");
    addCGST.textContent = Math.round(sum * 9 / 100);
    var addSGST = document.getElementById("sgst");
    addSGST.textContent = Math.round(sum * 9 / 100);
    let total = Number(totalAmount.innerText) + Number(addCGST.innerText) + Number(addSGST.innerText)
    var totalpay = document.getElementById("total")
    totalpay.textContent = total;
    var payable_money = document.getElementById("money");
    payable_money.innerHTML ="₹ " + total;
}
showproduct()
function deleteFromCart(products) {
    const cartdata = JSON.parse(localStorage.getItem("coursecart"));
    const newdata = deleteFn(cartdata, products);
    localStorage.setItem("coursecart", JSON.stringify(newdata));
    window.location.reload();
}
function deleteFn(cartdata, products) {
    for (let i = 0; i < cartdata.length; i++) {
        const productName = products.name;
        if (cartdata[i].name == productName) {
            cartdata.splice(i, 1)
        }
    }
    return cartdata
}
var btn_promo = document.getElementById("promo");
btn_promo.addEventListener("click", applycode);
function applycode() {
    btn_promo.disabled = true;
    // console.log("yes")
    var res = document.getElementById("total").textContent
    // console.log(res, "asd")
    var total_amount = Number(res);
    var afterpromo = Math.floor(total_amount - (total_amount * 30) / 100);
    let promoInput = document.getElementById("text").value;
    checker(total_amount, afterpromo, promoInput)
    function checker(total_amount, afterpromo, promoInput) {
        if (promoInput === "masai30") {
            var totalpay = document.getElementById("total")
            totalpay.textContent = afterpromo;
            var payable_money = document.getElementById("money");
            payable_money.textContent ="₹ " + afterpromo;
            // localStorage.setItem("total", JSON.stringify(afterpromo));
        }
        // else {
        //     var totalpay = document.getElementById("total")
        //     totalpay.textContent = total_amount;
        //     // localStorage.setItem("total", JSON.stringify(afterpromo));
        // }
    }
}
// start card details modal js
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
function validate() {
    // modal js
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
        function validate() {
            // modal js
            var modal = document.getElementById("myModal");
            var btn = document.getElementById("myBtn");
            var span = document.getElementsByClassName("close")[0];
            btn.onclick = function () {
                modal.style.display = "block";
            }
            span.onclick = function () {
                modal.style.display = "none";
            }
        }
        function validat() {
            var cardnumber = document.getElementById("cardNumber").value;
            var expiry = document.getElementById("exp").value;
            var cardname = document.getElementById("cardName").value;
            var Cvv = document.getElementById("cvv").value;
            // console.log(cardnumber, expiry, cardname, Cvv);
            // console.log(cardnumber, expiry, cardname, Cvv);
            if (cardnumber.length == 16 && expiry.length == 5 && cardname != "" && Cvv.length == 3) {
                alert("payment Successful");
                window.location.href = "profile.html";
                // setTimeout(function () {
                   
                // }, 2000);
                // window.localStorage.clear();
                localStorage.removeItem('coursecart')
            } else {
                alert("your card is details wrong")
            }
        }
    }
    // end card details modal js
}
function validat() {
    var cardnumber = document.getElementById("cardNumber").value;
    var expiry = document.getElementById("exp").value;
    var cardname = document.getElementById("cardName").value;
    var Cvv = document.getElementById("cvv").value;
    // console.log(cardnumber, expiry, cardname, Cvv);
    // console.log(cardnumber, expiry, cardname, Cvv);
    if (cardnumber.length == 16 && expiry.length == 5 && cardname != "" && Cvv.length == 3) {
        alert("payment Successful");
        setTimeout(function () {
            window.location.href = "profile.html";
        }, 1500);
        // window.localStorage.clear();
        localStorage.removeItem('coursecart')
    } else {
        alert("your card is details wrong")
    }
}
// end card details modal js
// var payable_money = document.getElementById("money");
// payable_money.innerHTML = "₹" + JSON.parse(localStorage.getItem("total"));