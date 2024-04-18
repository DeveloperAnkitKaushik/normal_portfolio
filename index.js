let isModelOpen = false;
let isDarkMode = false;
const scalingFactor = 1/20;

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.model-overlay-loading');
    const success = document.querySelector('.model-overlay-success');
    loading.classList += ' modal-overlay-visible';

    emailjs
    .sendform(
        'service_91sf8ui',
        'template_bvzourl',
        event.target,
        '4ScG4W9HM93QjdSf-'
    ).then(()=>{
        loading.classList.remove('modal-overlay-visible');
        success.classList +=  ' modal-overlay-visible';
    }).catch(() => {
        loading.classList.remove('model-overlay-visible');
         alert('The email service is Temporarily unavailable. Please contact me Directly - host@web.com');
    });
};



function toggleModel() {
    if(isModelOpen){
        isModelOpen = false;
        return document.body.classList.remove("model-open");
    }
    isModelOpen = true;
    document.body.classList += " model-open";
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if(isDarkMode){
       return document.body.classList += 'dark-theme';
    }
    return document.body.classList.remove('dark-theme');
}

function moveBackground (event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scalingFactor;
    const y = event.clientY * scalingFactor;
    for(let i =0; i<shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x*boolInt}px, ${y*boolInt}px)`;
        console.log(`${x},${y}`);
    }
}