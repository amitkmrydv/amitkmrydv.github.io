// Fade-in on scroll
const faders = document.querySelectorAll('.fade-section');
const options = { threshold: 0.3 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, options);
faders.forEach(fader => observer.observe(fader));

// Dynamic Projects
const projects = [
    { title: "MBWPs CCDU", desc: "Refactored code to support CCDU BWP edge cases and Long PUCCH formats." },
    { title: "MBWPs", desc: "Implemented resource dimensioning in RRM, reorganized code to split Multi-BWPs for UE compatibility." },
    { title: "MOCN", desc: "Enabled Multi-Operator Core Network with multiple PLMNs and handled F1AP message-based PLMN logic." },
    { title: "NRPPA", desc: "Built end-to-end NR Positioning Protocol transaction, updating UE mobility to LMF via AMF over F1AP." },
    { title: "UAC Barring", desc: "Added UAC parameters to SIB1 for controlled UE service access." }
];

const projectList = document.getElementById('project-list');
projects.forEach(p => {
    const div = document.createElement('div');
    div.className = 'project-card fade-section';
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    projectList.appendChild(div);
    observer.observe(div); // fade in dynamically added projects
});

// Scroll Highlight for nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if(pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`header nav a[href="#${current}"]`)?.classList.add('active');
});
