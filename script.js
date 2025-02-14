document.addEventListener("DOMContentLoaded", function () {
    // Efek Scroll
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease-in-out";
    });
    
    function revealSections() {
        let scrollY = window.scrollY;
        sections.forEach(section => {
            if (section.offsetTop - 400 < scrollY) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", revealSections);
    revealSections();

    // Mode Gelap/Terang
    const toggle = document.getElementById('toggleMode');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', toggle.checked);
        localStorage.setItem('darkMode', toggle.checked);
    });
    
    // Cek localStorage agar mode tetap aktif saat reload
    if (localStorage.getItem('darkMode') === 'true') {
        toggle.checked = true;
        document.body.classList.add('dark-mode');
    }
    

    // Modal Sertifikat
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.8)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    modal.style.display = "flex";
    
    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "80%";
    modalImg.style.maxHeight = "80%";
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
    
    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    document.querySelectorAll(".certification img").forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });
});