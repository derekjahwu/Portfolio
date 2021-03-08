function scrollAppear(){
    var resume = document.getElementById('resume-container');
    var resumePosition = resume.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    var skill = document.getElementById('skill1');
    var tools = document.getElementById('tools');
    var toolsPosition = tools.getBoundingClientRect().top;
    var skillPosition = skill.getBoundingClientRect().top;
    var burger 

    if(resumePosition < screenPosition){
        resume.classList.add('animate__animated');
        resume.classList.add('animate__fadeInDown');
        
    }

    if(skillPosition < screenPosition){
        skill.classList.add('animate__animated');
        skill.classList.add('animate__fadeInUp');
        
    }

    if(toolsPosition < screenPosition){
        tools.classList.add('animate__animated');
        tools.classList.add('animate__fadeInUp');
        
    }



}

window.addEventListener('scroll', scrollAppear);


// const burger = document.getElementById('burger');

// const close = document.getElementById('close');

// const mobileNav = document.getElementById('mobileNav');

function toggle() {
    const mobileNav = document.getElementById('mobileNav');
    const burger = document.getElementById('burger');

    if(mobileNav.style.display === "none", burger.style.display="block") {
        mobileNav.style.display = "block";
        burger.style.display = "none";
    } else {
        mobileNav.style.display = "none";
    }
}

function toggleX() {
    const mobileNav = document.getElementById('mobileNav');
    const burger = document.getElementById('burger');

    if(burger.style.display === "none", mobileNav.style.display="block") {
        burger.style.display = "block";
        mobileNav.style.display = "none";
    } else {
        burger.style.display = "none";
    }
}


