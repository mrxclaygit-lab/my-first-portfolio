const btn = document.getElementById('btnAction');
const skillSection = document.getElementById('skillSection');

btn.addEventListener('click', () => {
    // Memunculkan section yang tersembunyi dengan efek smooth
    if (skillSection.style.display === "none" || skillSection.style.display === "") {
        skillSection.style.display = "grid";
        btn.innerText = "Sembunyikan Skill";
    } else {
        skillSection.style.display = "none";
        btn.innerText = "Lihat Skill Saya";
    }
});
