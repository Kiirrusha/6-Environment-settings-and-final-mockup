document.addEventListener('DOMContentLoaded', function() {
    var radioInputs = document.querySelectorAll('input[type="radio"]');
  
    radioInputs.forEach(function(input) {
      input.addEventListener('change', function() {
        radioInputs.forEach(function(otherInput) {
          if (otherInput !== input) {
            otherInput.checked = false;
          }
        });
      });
    });
  });