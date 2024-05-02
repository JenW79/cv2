// JavaScript for client-side validation
document.getElementById("contact-btn").addEventListener("click", function(event) {
    
    if (document.getElementById("honeypot").value !== "") {
      alert("Spam submission detected.");
      event.preventDefault(); 
    }
  });
  
