document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('gdpr-modal');
  var acceptBtn = document.getElementById('gdpr-accept');

  acceptBtn.addEventListener('click', function() {
    // User has accepted GDPR consent
    // Load Google Analytics script
    var gaScript = document.createElement('script');
    gaScript.src = 'https://www.google-analytics.com/analytics.js';
    document.head.appendChild(gaScript);

    modal.style.display = 'none';
  });

  modal.style.display = 'block';
});
