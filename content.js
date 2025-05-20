const targetNode = document.querySelector('.tjp-wrapper');

if (targetNode) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (mutation.target.classList.contains('active')) {
          const overlayNode = document.querySelector('.tjp-overlay');
          const paywallNode = document.querySelector('.tjp-paywall');
          
          if (overlayNode) {
            overlayNode.remove();
          }
          
          if (paywallNode) {
            paywallNode.remove();
          }

          document.styleSheets[0].insertRule(`
            .tjp-wrapper.active::before {
              height: 0px !important;
            }
          `, 0);

          const buttonNode = document.querySelector('.tjp-premium');
          if (buttonNode) {
            buttonNode.innerText = "FREE";
          }
          buttonNode.style.backgroundColor = "#2295da";

          mutation.target.style.overflow = 'scroll';
          showNotification("Paywall Removed", "You can now read this article for free!");
        }
      }
    }
  });
  observer.observe(targetNode, { attributes: true });
}

function showNotification(title, message) {
  const notification = document.createElement('div');
  notification.classList.add('tjp-notification');
  notification.innerHTML = `
    <div class="tjp-notification-content" style="background-color: #4CAF50; color: white; padding: 10px; margin: 10px; border-radius: 5px; z-index: 9999; position: fixed; bottom: 0; right: 0;">
      <h3 style="margin: 0; font-family: Verdana, sans-serif;">${title}</h3>
      <p style="margin: 0; font-family: Verdana, sans-serif;">${message}</p>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}