document.getElementById('shopping-bag').addEventListener('click', function() {
    var spinner = document.getElementById('loading-spinner');
    if (spinner.style.display === 'none' || spinner.style.display === '') {
      spinner.style.display = 'block';
    } else {
      spinner.style.display = 'none';
    }
  });
  