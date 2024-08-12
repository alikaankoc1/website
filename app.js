document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Lütfen tüm alanları doldurunuz.');
        event.preventDefault(); // Formun gönderilmesini engeller
    } else {
        alert('Mesaj Gönderilemedi! Bu sitenin henüz backend kodlaması yazılmamıştır. İletişim bölümü daha sonra aktif hale gelecektir. ');
          event.preventDefault();
    }
});


var menuBar = document.querySelector("#menu_bar");
var navLinks = document.querySelector(".nav_links");

navLinks.style.top = "-450px";
menuBar.onclick = function(){
    if(navLinks.style.top == "-450px"){
        navLinks.style.top = "50px";
     }
        else{
            navLinks.style.top = "-450px";
        }
}