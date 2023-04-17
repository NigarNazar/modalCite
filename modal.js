const button = document.querySelector("button");
const modalTable = document.querySelector(".modal-table");
const xmark = document.querySelector(".fa-circle-xmark");


button.addEventListener("click", function (e) {
    modalTable.classList.add('active');

});


xmark.addEventListener('click', function () {
    modalTable.classList.remove('active');
});

var projectID = 0;
let projects = [
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
    {
        "rent": [],
        "occup": [],
        "vip": [],
    },
] 


const hElement = document.querySelectorAll("h3")[0];
const hElement1 = document.querySelectorAll("h3")[1];
const hElement2 = document.querySelectorAll("h3")[2];
const hElement3 = document.querySelectorAll("h3")[3];
const hElement4 = document.querySelectorAll("h3")[4];
const hElement5 = document.querySelectorAll("h3")[5];
const hElement6 = document.querySelectorAll("h3")[6];

const section = document.querySelector('.section');
const total = document.querySelector(".total");
const for2 = document.querySelector(".for");
const occuPed2 = document.querySelector(".occuped");
const vipV = document.querySelector(".vip")

const color_unknow1 = document.querySelector('.color-unknow1');
const color_unknow2 = document.querySelector('.color-unknow2');
const color_unknow3 = document.querySelector('.color-unknow3');
const p1 = document.querySelectorAll("p")[0];
const p2 = document.querySelectorAll("p")[1];
const p3 = document.querySelectorAll("p")[2];

hElement.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 0;
    color_unknow1.style.width = '45%'
    color_unknow1.style.height = '40%'
    color_unknow1.style.backgroundColor = '#F8EFBA'
    p1.innerHTML = '15%'
    p2.innerHTML = '35%'
    p3.innerHTML = '65%'
    p1.style.color = '#000'
    color_unknow2.style.width = '45%'
    color_unknow2.style.height = '70%'
    color_unknow2.style.backgroundColor = '#55E6C1'
    color_unknow1.style.content = 'vip'
    color_unknow3.style.width = '55%'
    color_unknow3.style.height = '100%'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.right = '0'
    color_unknow3.style.top = '0'
    color_unknow3.style.backgroundColor = '#2d98da'
    // if(projects[projectID]['rent'].length  > 0){
    //     for(let i = 0 ; i < projects[projectID]["rent"].length ; i++){
    //         var child = document.querySelector(".total_"+i);
    //         console.log(child)
    //         var rent = document.querySelector(".rent_"+i);
    //         rent.remove()
    //         var occup = document.querySelector(".occup_"+i);
    //         occup.remove()
    //         var vipp = document.querySelector(".vip_"+i); 
    //         vipp.remove()
            
    //     }
    // }
    

   
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
        for2.appendChild(span1)
        
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
      occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
      vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }
    e.preventDefault();
});

hElement1.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 1;
    color_unknow1.style.width = '50%'
    color_unknow1.style.height = '50%'
    color_unknow1.style.backgroundColor = '#273c75'
    p1.innerHTML = '25%'
    p2.innerHTML = '25%'
    p3.innerHTML = '55%'
    p1.style.color = '#fff'
    color_unknow2.style.width = '50%'
    color_unknow2.style.height = '50%'
    color_unknow2.style.backgroundColor = '#fbc531'
    color_unknow3.style.width = '50%'
    color_unknow3.style.height = '100%'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.right = '0'
    color_unknow3.style.top = '0'
    color_unknow3.style.backgroundColor = '#A3CB38'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
       for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
      occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
        vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }
    
    e.preventDefault();
});
hElement2.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 2
    color_unknow1.style.width = '100%'
    color_unknow1.style.height = '50%'
    color_unknow1.style.backgroundColor = '#273c75'
    p1.innerHTML = '50%'
    p2.innerHTML = '10%'
    p3.innerHTML = '40%'
    p1.style.color = '#fff'
    color_unknow2.style.width = '55%'
    color_unknow2.style.height = '50%'
    color_unknow2.style.backgroundColor = '#fbc531'
    color_unknow3.style.width = '45%'
    color_unknow3.style.height = '50%'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.top = '50%'
    color_unknow3.style.right = '0'
    color_unknow3.style.backgroundColor = '#D6A2E8'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
        for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
       occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
        vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
      total.appendChild(span1)
    }
    
    e.preventDefault();
});
hElement3.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 3
    color_unknow1.style.width = '0'
    color_unknow1.style.height = '0'
    color_unknow1.style.backgroundColor = ''
    p1.innerHTML = ''
    p2.innerHTML = '50%'
    p3.innerHTML = '50%'
    p1.style.color = '#fff'
    color_unknow2.style.width = '50%'
    color_unknow2.style.height = '100%'
    color_unknow2.style.backgroundColor = '#c0392b'
    color_unknow3.style.width = '50%'
    color_unknow3.style.height = '100%'
    color_unknow3.style.backgroundColor = '#f9ca24'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.top = '0'
    color_unknow3.style.right = '0'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
        for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
       occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
       vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }
    
    e.preventDefault();

});
hElement4.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 4
    color_unknow1.style.width = '100%'
    color_unknow1.style.height = '60%'
    color_unknow1.style.backgroundColor = '#2f3640'
    color_unknow1.style.color = '#fff'
    p1.innerHTML = '70%'
    p2.innerHTML = '25%'
    p3.innerHTML = '55%'
    p1.style.color = '#fff'
    color_unknow3.style.width = '100%'
    color_unknow3.style.height = '60%'
    color_unknow3.style.backgroundColor = '#dcdde1'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.top = '45%'
    color_unknow3.style.right = '0'
    color_unknow3.style.textAlign = 'center'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
       for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
      occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
      vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }
    
    e.preventDefault();
});
hElement5.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    projectID = 5
    color_unknow1.style.width = '50%'
    color_unknow1.style.height = '60%'
    color_unknow1.style.backgroundColor = '#e67e22'
    p1.innerHTML = '45%'
    p2.innerHTML = '104%'
    p3.innerHTML = '44%'
    p1.style.color = '#fff'
    p3.style.textAlign = 'center'
    color_unknow2.style.width = '50%'
    color_unknow2.style.height = '40%'
    color_unknow2.style.backgroundColor = '#e74c3c'
    color_unknow3.style.width = '50%'
    color_unknow3.style.height = '100%'
    color_unknow3.style.backgroundColor = '#9b59b6'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.top = '0'
    color_unknow3.style.right = '0'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
       for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
       occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
       vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }
    
    e.preventDefault();
});
hElement6.addEventListener('click', function (e) {
    section.classList.add('sec-active');
    
    projectID = 6
   color_unknow1.style.width = '40%'
    color_unknow1.style.height = '50%'
    color_unknow1.style.backgroundColor = '#273c75'
    p1.innerHTML = '35%'
    p2.innerHTML = '67%'
    p3.innerHTML = '83%'
    p1.style.color = '#fff'
    color_unknow2.style.width = '100%'
    color_unknow2.style.height = '50%'
    color_unknow2.style.backgroundColor = '#fbc531'
    color_unknow3.style.width = '60%'
    color_unknow3.style.height = '50%'
    color_unknow3.style.backgroundColor = '#A3CB38'
    color_unknow3.style.position = 'absolute'
    color_unknow3.style.top = '0'
    color_unknow3.style.right = '0'
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "rent_" + i
        
        span1.innerHTML = projects[projectID]['rent'][i]
       for2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['occup'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "occup_" + i
        
        span1.innerHTML = projects[projectID]['occup'][i]
       occuPed2.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['vip'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "vip_" + i
        
        span1.innerHTML = projects[projectID]['vip'][i]
       vipV.appendChild(span1)
    }
    for(let i = 0 ; i < projects[projectID]['rent'].length ; i++){
        let span1 = document.createElement("span");
        span1.className = "total_" + i
        
        span1.innerHTML = parseInt(projects[projectID]['rent'][i]) + parseInt(projects[projectID]['occup'][i]) + parseInt(projects[projectID]['vip'][i]);
       total.appendChild(span1)
    }

    e.preventDefault();
    
});
 


const overlayMenu = document.querySelector(".overlay-menu");
const faBars = document.querySelector(".fa-bars");
const menuMark = document.querySelector('.menu-mark');

faBars.addEventListener('click', function () {
    overlayMenu.classList.add('over-active');
    document.querySelector('.container').style.marginLeft = "250px"
    overlayMenu.style.transform = 'translateX(0)'
    document.querySelector('.container').style.transition = '1.1s'
})

menuMark.addEventListener('click', function () {
    overlayMenu.classList.remove('over-active');
    document.querySelector('.container').style.marginLeft = "0"
    overlayMenu.style.transform = 'translateX(-250px)'


})


const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

color_unknow1.addEventListener('mouseover', function () {
    text1.innerHTML = 'for rent'

})
color_unknow1.addEventListener('mouseout', function () {
    text1.innerHTML = ''
})
color_unknow2.addEventListener('mouseenter', function () {
    text2.innerHTML = 'occuped'
    text2.style.hover = '#95afc0'
})
color_unknow2.addEventListener('mouseleave', function () {
    text2.innerHTML = ''
})

color_unknow3.addEventListener('mouseenter', function () {
    text3.innerHTML = 'vip'
    text3.style.hover = '#95afc0'
})
color_unknow3.addEventListener('mouseleave', function () {
    text3.innerHTML = ''
})


const btnSend = document.querySelector('.btnSend');
const input = document.querySelectorAll('input')[0];
const input1 = document.querySelectorAll('input')[1];
const input2 = document.querySelectorAll('input')[2];
const input3 = document.querySelectorAll('input')[3];
const forRent = document.querySelector('#rent');
const occuped = document.querySelector('#occup');
const vip = document.querySelector('#vip');
const selected = document.querySelector('#select');
 







btnSend.addEventListener('click' , addModal)

function addModal(e){
   
    const price = input3.value
    if(price === ""){
        return
    }
     let selecValue = selected.value
   if(selecValue === 'For Rent' ){
    projects[projectID]['rent'].push(price);
   }else if( selecValue === 'Occuped'){
    projects[projectID]['occup'].push(price);
   }else if( selecValue === 'Vip'){
    projects[projectID]['vip'].push(price);
   }
   console.log(projects)
   input3.value = "" 
 selecValue.value = 'For Rent'
   
e.preventDefault()
}