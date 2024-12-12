document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
 
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
    
            if (email && password) {
                localStorage.setItem('user', JSON.stringify({ name ,email, password }));
                alert('Registration successful!');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const user = JSON.parse(localStorage.getItem('user'));
    
            console.log('Entered email:', email);
            console.log('Entered password:', password);
            console.log('Stored user:', user);
    
            if (user && user.email === email && user.password === password) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }

    if (localStorage.getItem('loggedIn') && window.location.pathname.includes('login.html')) {
        window.location.href = 'home.html';
    }

    if (!localStorage.getItem('loggedIn') && window.location.pathname.includes('home.html')) {
        window.location.href = 'login.html';
    }
    if (localStorage.getItem('loggedIn') && window.location.pathname.includes('home.html')) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            document.getElementById('name').innerText = user.name;
        } 
        }
});
