async function product() {
    let res = await fetch('http://localhost:5000/api/products')
    let data = await res.json()
    // console.log(data)
    // showData(data)
    return data;
}

function showData(x, dis,heading11) {
    dis.innerHTML = null;
    let hh=document.createElement('h1')
    hh.innerText=heading11;
    hh.id='hh';
    dis.append(hh)

    x.forEach((el) => {
        let img = document.createElement('img')
        img.src = el.image;
        let box1 = document.createElement('div')
        box1.append(img)

        let position = document.createElement('h2')
        position.innerText = el.position;

        let cname = document.createElement('h5')
        cname.innerText = el.cname;

        let Category = document.createElement('p')
        Category.innerText = el.Category;

        let location = document.createElement('p')
        location.innerText = el.location;

        let salary = document.createElement('p')
        salary.textContent = el.salary;

        let box2 = document.createElement('div')
        box2.id = 'box2'
        box2.append(position, cname, Category, location, salary)

        let box3 = document.createElement('div')
        box3.id = 'box3'
        let viewandApplybtn = document.createElement('button')
        let weeks = document.createElement("p")
        if (el.catType == "addvertise") {
            viewandApplybtn.innerText = 'UPGRADE SKILLS';
            viewandApplybtn.onclick = function () {
                window.location.href = 'courses.html';
            }
            weeks.innerText = '4-6 weeks left'
        }
        else {

            viewandApplybtn.innerText = 'VIEW AND APPLY';
            
            viewandApplybtn.onclick = function () {
                localStorage.setItem('jobdetails', JSON.stringify(el))
                window.location.href = 'detailPage.html';
            }
            weeks.innerText = '4 weeks left'
        }


        let share = document.createElement('img')
        share.id = 'shareimg'
        share.src = "share.svg"


        box3.append(weeks, share, viewandApplybtn)

        let box4 = document.createElement('div')
        box4.id = 'box4';
        box4.append(box1, box2, box3)
        dis.append(box4)
    })
}


async function hello(xx,heading11){
    let x=await product();
       let y=x.filter((el)=>{
            if(el.catType.includes(xx))
           return el;

           if(el.Category.includes(xx))
           return el;
       })
      
            y.unshift(x[0])
      localStorage.setItem('filterData',JSON.stringify(y))
      localStorage.setItem('heading',JSON.stringify(heading11))
      window.location.href='internship&jobs.html'
   }


   function afterLogout(){
        
    document.getElementById("logoutbtn").addEventListener("click",()=>{
        console.log("wert")
        localStorage.removeItem("studentDetail");
        window.location.reload();
        window.location.href="loginStudent.html"

    })
   }
export { product, showData,hello,afterLogout}