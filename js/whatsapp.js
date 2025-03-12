document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dikirim secara default

        // Ambil nilai input
        let name = document.querySelector('input[name="name"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let subject = document.querySelector('input[name="subject"]').value;
        let message = document.querySelector('textarea[name="message"]').value;

        // Format pesan WhatsApp
        let whatsappMessage = `Halo, saya ${name}%0AEmail: ${email}%0ASubjek: ${subject}%0APesan: ${message}`;

       
        let phoneNumber = "6285654174569"; 

        // Redirect ke WhatsApp
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, "_blank");
    });
});
