document.addEventListener('DOMContentLoaded', function() {
    var typedTextContainer = document.getElementById('typed-text');
    var textToType = "Download the site as resume.";
    var index = 0, interval = 150;
  

    function type() {
      typedTextContainer.innerHTML += textToType[index++];
      if (index < textToType.length) {
        setTimeout(type, interval);
      }
    }
  

    type();
  });
  