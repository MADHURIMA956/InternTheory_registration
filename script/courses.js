var course = [

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
        name: "It starter pack(4 courses)  ",

        price: "15999",
        price1: "32999",
        EMI: "starting at 915/month",
        Des: "learn the most demanded skills in the IT industry today.sig...",
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/finthumbnail.jpg",
        name: "Finance Starter Pack  ",

        price: "11999",
        price1: "23999",
        EMI: "starting at 687/month",
        Des: "learn the most demanded skills in the finance industry today ...",
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
        name: "Digital Marketing Course            ",

        price: "5999",
        price1: "11999",
        EMI: "starting at 343/month",
        Des: "Learn the art of digital marketing. Sign up for this online ...",

    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/stock-market-course.png",
        name: "Stock market course ",

        price: "5999",
        price1: "11999",
        EMI: "starting at 343/month",
        Des: "Learn how to trade and invest in stock markets.Enroll for the.."
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
        name: "Data Analytics with R programming Course           ",

        price: "5999",
        price1: "11999",
        EMI: "starting at 343/month",
        Des: "Learn data science online .."
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/web-development-course.png",
        name: "Web development Course    ",
        price: "3999",
        price1: "7999",
        EMI: "starting at 229/month",
        Des: "Learn the art of web designing and web development.join this .."
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/tally-gst-course.png",
        name: "Tally + GST Course        ",
        price: "5999",
        price1: "7999",
        EMI: "EMI starts at ₹343/month",
        Des: "Sign up for this online tally and gst course and learn how t ...",
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
        name: "Android App Development Using Kotlin Course        ",
        price: "5999",
        price1: "7999",
        EMI: "EMI starts at ₹343/month",
        Des: "Learn the art of android app..",
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png",
        name: "Advanced Excel Course           ",
        price: "2999",
        price1: "5999",
        EMI: "EMI starts at ₹172/month",
        Des: "Learn how to trade and invest in stock markets. Enrol for th ...",
    },

    {
        image: "https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
        name: "R Programming Course              ",
        price: "2999",
        price1: "5999",
        EMI: "EMI starts at ₹172/month",
        Des: "Learn r programming online. Sign up for this online r progra ...",
    },

];
// console.log(course)

course.forEach((item) => {
    const itemData = item;

    const html = `<div>
            <img src="${item.image}">
            <p class="p_name">${item.name}</p>
            <p class="p_des">${item.Des}</p>
            <hr style="border-top:1px dashed gray">
            <p class="p_price"><span style="display: inline; text-decoration: line-through; font-size:10px; color:gray;">₹${item.price1}</span>&nbsp;<span>₹&nbsp;${item.price}</span></p>
            <p class="p_emi">${item.EMI}</p>
            <button onclick="addToCart('${item.image}', '${item.name}', '${item.price1}', '${item.price}')" class="button">ADD TO CART</button>
            <button onclick="gotoDetail()" class="button1">KNOW MORE</button>
        </div>`;


    const courseSell = document.getElementById("online_course");
    // console.log(courseSell)
    courseSell.insertAdjacentHTML("beforeend", html);
});

function gotoDetail(){
    window.location.href='coursedetails.html'
}

if (localStorage.getItem("coursecart") === null) {
    localStorage.setItem("coursecart", JSON.stringify([]));
}

addToCart = (image, name, price1, price) => {
    // console.log("yes")

    const itemdata = { image, name, price1, price };

    let course_Cart = JSON.parse(localStorage.getItem("coursecart"))

    course_Cart.push(itemdata);

    localStorage.setItem("coursecart", JSON.stringify(course_Cart))
}
