// Ambil elemen tombol
const backToTopBtn = document.getElementById("backToTopBtn");

//tampilan tombol krtika scrool lebih dari 100px dari atas
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 0) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

//fungsi untuk scroll ke atas
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // animasi scroll halus   
    });
}