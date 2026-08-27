// GLOBAL SYSTEM STORAGE
const YOUR_UPI_ID = "naruka13@fam";
let selectedProduct = null;
let activeUsername = "";

// Dynamic Component Injector Engine
window.addEventListener('DOMContentLoaded', async () => {
    // 1. Load Username Component
    await loadComponent('username-component', 'components/username/username.html');
    // 2. Load Packages Component
    await loadComponent('packages-component', 'components/packages/packages.html');
    // 3. Load Payment Component
    await loadComponent('payment-component', 'components/payment/payment.html');
    
    // Inject scripts after UI is active
    injectScript('components/username/username.js');
    injectScript('components/packages/packages.js');
    injectScript('components/payment/payment.js');
});

async function loadComponent(elementId, filepath) {
    try {
        const response = await fetch(filepath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (err) {
        console.error("Component loading failed:", filepath, err);
    }
}

function injectScript(filepath) {
    const script = document.createElement('script');
    script.src = filepath;
    document.body.appendChild(script);
}

function focusStore() {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}
