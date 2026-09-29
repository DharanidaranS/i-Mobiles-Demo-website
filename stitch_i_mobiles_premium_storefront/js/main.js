document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('button[aria-label="Menu"]');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu toggle clicked');
            // Implement mobile menu toggle logic here
        });
    }

    // 2. Category Filter Tabs functionality
    const filterTabs = document.querySelectorAll('#products-showcase button');
    const productCards = document.querySelectorAll('#products-showcase .grid > div'); // Adjust selector as needed

    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active state from all tabs
            filterTabs.forEach(t => {
                t.classList.remove('bg-primary-container', 'text-on-primary-container', 'shadow-[0_0_14px_rgba(0,112,243,0.5)]', 'font-semibold');
                t.classList.add('bg-surface-container-high', 'text-on-surface-variant', 'font-medium');
            });

            // Add active state to clicked tab
            const clickedTab = e.currentTarget;
            clickedTab.classList.remove('bg-surface-container-high', 'text-on-surface-variant', 'font-medium');
            clickedTab.classList.add('bg-primary-container', 'text-on-primary-container', 'shadow-[0_0_14px_rgba(0,112,243,0.5)]', 'font-semibold');

            const category = clickedTab.textContent.trim().toLowerCase();

            // Dummy logic for filtering - currently assumes category text maps to classes or data attributes
            console.log(`Filtering for category: ${category}`);
            // Implementing actual filter logic requires product cards to have data-category attributes.
            // For now we just log it since the HTML isn't set up with data-attributes.
        });
    });

    // 3. WhatsApp Enquiry Form handling
    const sendWhatsappBtn = document.getElementById('send-whatsapp-btn');
    if (sendWhatsappBtn) {
        sendWhatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('enq-name').value.trim();
            const phone = document.getElementById('enq-phone').value.trim();
            const device = document.getElementById('enq-device').value.trim();
            const message = document.getElementById('enq-message').value.trim();

            if (!name || !device) {
                alert('Please fill in at least your name and the device you are interested in.');
                return;
            }

            const whatsappNumber = '919876543210';
            const text = `Hi i Mobiles,\n\nI am ${name}.\nI am enquiring about: ${device}.\nPhone: ${phone}\nMessage: ${message}`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});
