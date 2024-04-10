// JavaScript for client-side validation
document.getElementById("contact-btn").addEventListener("click", function(event) {
    // Check if honeypot field is filled out
    if (document.getElementById("honeypot").value !== "") {
      alert("Spam submission detected.");
      event.preventDefault(); // Prevent default mailto action
    }
  });
  