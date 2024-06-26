document.getElementById('shopping-bag').addEventListener('click', function() {
    var spinner = document.getElementById('loading-spinner');
    if (spinner.style.display === 'block') {
      spinner.style.display = 'none';
    } else {
      spinner.style.display = 'block';
    }
  });
  
4