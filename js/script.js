let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');

let navLinks=document.querySelectorAll('header nav a');






window.onscroll=() =>{
    sections.forEach(sec =>{
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');
       

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                //  document.querySelectorAll('header nav a[href="#${id}"]').classList.addClass('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
               
            });
        }
    });

}


menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}

// window.onload = function() {
//       const imageElement = document.querySelector('.home-img');
//       if (imageElement) {
//         const handleMouseMove = (e) => {
//           let rect = imageElement.getBoundingClientRect();
//           let x = e.clientX - rect.left;
//           let y = e.clientY - rect.top;
  
//           let dx = (x - rect.width / 2) / (rect.width / 2);
//           let dy = (y - rect.height / 2) / (rect.height / 2);
  
//           imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
//         };

//         const handleMouseLeave = () => {
//           imageElement.style.transform = "";
//         };

//         imageElement.addEventListener('mousemove', handleMouseMove);
//         imageElement.addEventListener('mouseleave', handleMouseLeave);
//       }
//     }




// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//             });

//             // ✅ Use querySelector (single element), correct syntax
//             let currentLink = document.querySelector(`header nav a[href="#${id}"]`);
//             if (currentLink) {
//                 currentLink.classList.add('active');
//             }
//         }
//     });
// };

// // ✅ Toggle navbar on menu icon click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };
