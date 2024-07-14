const body = document.querySelector('body');
const initialTheme = 'light';

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
    updateButtonText(theme);
};

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
};

const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);
    } else {
        setTheme(initialTheme);
    }
};

const updateButtonText = (theme) => {
    const button = document.getElementById('themeButton');
    if (theme === 'light') {
        button.textContent = 'sáng';
    } else {
        button.textContent = 'tối';
    }
};

setThemeOnInit();
