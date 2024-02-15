document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Hello, world!";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here (milliseconds)
      }
    }
  
    type();
  });