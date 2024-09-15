function loadAboutInformation() {
    const aboutLeftContainer = document.getElementById('about-left-container');

    const aboutP1 = document.createElement('p');
    const aboutP2 = document.createElement('p');

    aboutP1.textContent = `I am a copywriter and a creative developer with a Computer Science degree and ongoing MBA studies. My toolkit includes HTML, CSS, JavaScript, and I'm expanding into Python and Django.`
    aboutP2.textContent = `My unique blend of technical know-how and business acumen allows me to craft compelling narratives and develop elegant digital solutions. Whether it's crisp copy or clean code, I approach each project with relentless dedication to quality and client satisfaction.`;
    
    if (aboutLeftContainer) {
       
        aboutLeftContainer.appendChild(aboutP1);
        aboutLeftContainer.appendChild(aboutP2);

    } else {
        console.log("Could not find about-left-content element");
    }
}

function loadAboutList() {
    const aboutRightContainer = document.getElementById('about-right-container');

    const aboutP3 = document.createElement('p');
    const aboutP4 = document.createElement('p');
    // const aboutListItem3 = document.createElement('p');
    // const aboutListItem4 = document.createElement('p');
    // const aboutListItem5 = document.createElement('p');

    aboutP3.textContent = `While I'm new to the professional scene, I'm quickly adapting to market trends. My portfolio showcases my ability to solve complex problems through both words and code.`;
    aboutP4.textContent = `Interested in collaboration? Let's connect and create something impactful.`;
    aboutP4.className = 'about-p4';
    // aboutListItem1.textContent = `Computer Scientist`;
    // aboutListItem2.textContent = `MBA Student`;
    // aboutListItem3.textContent = `Python Developer`;
    // aboutListItem4.textContent = `Copywriter`;
    // aboutListItem5.textContent = `Email Marketer`;

    if (aboutRightContainer) {

        aboutRightContainer.appendChild(aboutP3);
        aboutRightContainer.appendChild(aboutP4);

    } else {
        console.log("Could not find about-right-content element");
    }
}

//Button is used in the function below.
const portfolioButton = document.createElement('button');
portfolioButton.className += 'portfolio-button';
portfolioButton.textContent = 'View My Portfolio';

function loadCopywritingDescription(){
    const copywriting_description_container = document.getElementById('project-1-description');

        const copywriting_description_h3 = document.createElement('h3');
        copywriting_description_h3.className += 'copy-description-heading';
        const copywriting_description_p1 = document.createElement('p');
        copywriting_description_p1.className += 'copy-para-1';
        const copywriting_description_p2 = document.createElement('p');
        copywriting_description_p2.className += 'copy-para-2';
        const copywriting_description_p3 = document.createElement('p');
        copywriting_description_p3.className += 'copy-para-3';
        const copywriting_description_p4 = document.createElement('p');
        copywriting_description_p4.className += 'copy-para-4';


        copywriting_description_h3.textContent = "My Copywriting Journey";

        // Where you want to use HTML tags, create an element (e.g., 'p') then use element.innerHTML 
        // with the text that has tags. Finally, appendChild to the main class.
        
        // The other way is to add the text to a const variable and then use regular expression to add/replace
        // tags and then concat it to innerHTML and then append it to the main class.
        copywriting_description_p1.innerHTML =
        `
        My journey into copywriting was purely accidental. One day, while doom scrolling Instagram <em>(we've all been there, right? *cue collective sigh*)</em>, I stumbled upon a post about "earning through copywriting". Intrigued, I swiped through, discovering a whole new world that aligned perfectly with my newly found passion for writing.
        `;
        
        copywriting_description_p2.innerHTML =
        `
        Excited by this prospect, I dove headfirst into the realm of persuasive prose. Books became my constant companions, their pages revealing the secrets of this craft. I found myself analyzing billboard ads during my commute, trying to decode their magic <em>(I never knew words were so powerful)</em>.
        `;

        copywriting_description_p3.textContent =
        `
        As my knowledge grew, so did my determination. I started small, crafting product descriptions for imaginary gadgets and sales letters for fictional services. Slowly but surely, my portfolio took shape &ndash; each piece a testament to my growing skills.
        `;
        copywriting_description_p3.textContent =
        `
        Today, I stand firm in the oath I took when I first started: to not stop until I reach the summit of copywriting. This accidental adventure has become my purposeful passion. And Let's just say Instagram scrolling was the most productive procrastination of my life. :P
        `;
        copywriting_description_p4.textContent =
        `
        See My Journey By Clicking Below.
        `       
        ;
    
    if(copywriting_description_container) {

        copywriting_description_container.appendChild(copywriting_description_h3);
        // copywriting_description_p1.innerHTML = modifiedp1Text;
        copywriting_description_container.appendChild(copywriting_description_p1);
        copywriting_description_container.appendChild(copywriting_description_p2);
        copywriting_description_container.appendChild(copywriting_description_p3);
        copywriting_description_container.appendChild(copywriting_description_p4);
        copywriting_description_container.appendChild(portfolioButton);
    }
    else {
        console.log("could not find project-2 element.")
    }
}
function gotoLink() {
    window.open("https://drive.google.com/drive/folders/1bRoJ56OVF8riNUj7WN3y8yv4zfEOolqZ?usp=drive_link");
    // window.open("https://cheatcc.com/");
}
portfolioButton.addEventListener('click', gotoLink)

function loadProgrammingDescription(){
    const programming_description_container = document.getElementById('project-4-description');

    const programming_description_h3 = document.createElement('h3');
    programming_description_h3.className += 'programming-description-heading';
    const programming_description_p1 = document.createElement('p');
    programming_description_p1.className += 'programming-para-1';
    const programming_description_p2 = document.createElement('p');
    programming_description_p2.className += 'programming-para-2';
    const programming_description_p3 = document.createElement('p');
    programming_description_p3.className += 'programming-para-3';
    const programming_description_p4 = document.createElement('p');
    programming_description_p4.className += 'programming-para-4';
    const programming_description_p5 = document.createElement('p');
    programming_description_p5.className += 'programming-para-5';


    programming_description_h3.textContent = `My Journey into the World of Code`;
    programming_description_p1.textContent = `From the moment I first laid eyes on a computer, I was spellbound. As a child, my curiosity led to countless "experiments" on our family PC – each click and crash a thrilling step in my coding odyssey.`;
    programming_description_p2.textContent = `Entering a Computer Science program felt like stepping into a digital wonderland. Each course was a new adventure, but it was in development that I found my true calling. This passion ignited when Python entered my life during my Data Science program, opening up a world of possibilities.`;
    programming_description_p3.textContent = `Hungry for more, I dove into CS50W, where I not only sharpened my Python skills but also got acquainted with Django – a powerful ally in my coding arsenal. Armed with this knowledge and fueled by excitement, I set out to create something practical and fun.`;
    programming_description_p4.textContent = `New chapters are waiting to be written, and I'm buzzing with ideas for my next big project. Will it be a game that brings joy to players, or a website that solves real-world problems?`;
    programming_description_p5.textContent = `Who knows? Maybe you'll be part of the next exciting installment!`;

    if(programming_description_container) {
      
        programming_description_container.appendChild(programming_description_h3);
        programming_description_container.appendChild(programming_description_p1);
        programming_description_container.appendChild(programming_description_p2);
        programming_description_container.appendChild(programming_description_p3);
        programming_description_container.appendChild(programming_description_p4);
        programming_description_container.appendChild(programming_description_p5);


    }
    else {
        console.log("Could not find project-4-description element.")
    }
}

const functionsToRun = [
    loadAboutInformation,
    loadAboutList,
    loadCopywritingDescription,
    loadProgrammingDescription
];

document.addEventListener('DOMContentLoaded', function() {
    functionsToRun.forEach(func => func());
    
});

// JQuery code here for services section exclusively

// const services = {
//     "email-marketing": "Our branding service helps businesses create a strong, memorable identity that resonates with their target audience.",
//     "marketing-funnel": "We offer full-stack development services, creating robust and scalable web and mobile applications tailored to your needs.",
//     copywriting: "Our UI/UX design service focuses on creating intuitive, user-friendly interfaces that enhance user experience and engagement.",
//     "one-pager-site": "From logos to marketing materials, our graphic design service helps businesses communicate visually with their audience.",
//     "python-development": "Our SEO service improves your online visibility, helping your business rank higher in search engine results and attract more organic traffic."
// };
// $(document).ready(function() {

//     $('.service-item').click(function() {
//         $('.service-item').removeClass('active');
//         $(this).addClass('active');
//         const service = $(this).data('service');
//         $('#service-content').html(`<h2>${$(this).text()}</h2><p>${services[service]}</p>`).hide().fadeIn();
//     });

//     $('#contact-form').submit(function(e) {
//         e.preventDefault();
//         // Here you would typically send the form data to a server
//         alert('Thank you for your message. We will get back to you soon!');
//         this.reset();
//     });

//     // Trigger click on first service item to show initial content
//     $('.service-item:first').click();
// });
