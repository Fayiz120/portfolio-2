
  document.addEventListener("DOMContentLoaded", function() {
    const connectButton = document.getElementById("send-message");
    connectButton.addEventListener("click", generateWhatsAppLink);
  });

  function generateWhatsAppLink() {
   
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const message = document.getElementById("message").value;
    const message1 = "Hi, I am " + firstName +" "+ lastName + ". I want to say " + message ;

    // Construct the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=918606026387&text=${encodeURIComponent(message1)}`;
    
    // Redirect the user to the WhatsApp link
    window.location.href = whatsappLink;
  }

