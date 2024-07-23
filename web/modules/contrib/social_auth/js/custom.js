document.addEventListener('DOMContentLoaded', function() {
    // Get all icons
    var icons = document.querySelectorAll('.social-auth.auth-icon');
    
    // Check if there are any icons
    if (icons.length > 0) {
      // Set the width for the first icon
      icons[0].style.width = '3.5em';
      
      // Set the width for all other icons
      for (var i = 1; i < icons.length; i++) {
        icons[i].style.width = '3em';
      }
    }
  });
  