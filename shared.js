function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    else setTimeout(initIcons, 100);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
    document.getElementById('overlay').classList.toggle('hidden');
}

function simulateAction(resultId) {
    const el = document.getElementById(resultId);
    if (el) {
        el.classList.remove('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        initIcons();
    }
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.querySelectorAll('input, select, textarea').forEach(el => { el.value = ''; });
    }
}

function updateDarkModeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const iconEl = document.getElementById('dark-mode-icon');
    if (iconEl) {
        iconEl.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        initIcons();
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkModeIcon();
}

window.addEventListener('DOMContentLoaded', () => {
    // Init dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    initIcons();
    updateDarkModeIcon();

    // 根據目前檔案名稱自動標記 sidebar 的 active 狀態
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.toggle('active', link.dataset.href === current);
    });
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    const overlay = document.getElementById('overlay');
    if (overlay) overlay.addEventListener('click', toggleSidebar);
});
