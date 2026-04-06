// HAMBURGER MENU
function toggleMenu() {
    let sidenav = document.getElementById('sidenav');
    let overlay = document.getElementById('overlay');

    sidenav.classList.toggle('open');
    overlay.classList.toggle('show');
}

// SMOOTH SCROLL
function scrollTo(sectionId) {
    let section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Menu band karo scroll ke baad
    let sidenav = document.getElementById('sidenav');
    let overlay = document.getElementById('overlay');
    sidenav.classList.remove('open');
    overlay.classList.remove('show');
}

// SERVICE ACCORDION
function toggleService(item) {
    let body = item.querySelector('.service-body');
    let isActive = item.classList.contains('active');

    // Pehle sab band karo
    document.querySelectorAll('.service-item').forEach(function(el) {
        el.classList.remove('active');
        el.querySelector('.service-body').style.display = 'none';
    });

    // Agar pehle se band tha toh kھolo
    if (!isActive) {
        item.classList.add('active');
        body.style.display = 'block';
    }
}

// CONTACT FORM
function sendMessage() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;

    // Check karo k sab fields bhare hain
    if (name === '' || email === '' || msg === '') {
        alert('Please fill all fields!');
        return;
    }

    // Success message dikhao
    document.getElementById('form-success').style.display = 'block';

    // Fields clear karo
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('msg').value = '';

    // 3 seconds baad success message hide karo
    setTimeout(function() {
        document.getElementById('form-success').style.display = 'none';
    }, 3000);
}

// SCROLL ANIMATION
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
