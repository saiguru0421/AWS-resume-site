document.addEventListener('DOMContentLoaded', function() {
    var typedTextContainer = document.getElementById('typed-text');
    var textToType = "Welcome! I'm thrilled to have you here and eager to share my knowledge and expertise. Let's work together to learn and grow.";
    var index = 0, interval = 150;
  

    function type() {
      typedTextContainer.innerHTML += textToType[index++];
      if (index < textToType.length) {
        setTimeout(type, interval);
      }
    }
  

    type();
  });
  