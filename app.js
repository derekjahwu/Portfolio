function scrollAppear(){
    var resume = document.getElementById('resume-container');
    var resumePosition = resume.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    var skill = document.getElementById('skill1');
    var tools = document.getElementById('tools');
    var toolsPosition = tools.getBoundingClientRect().top;
    var skillPosition = skill.getBoundingClientRect().top;

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


