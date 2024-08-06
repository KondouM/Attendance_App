// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboardSection = document.getElementById('dashboard');
    const loginSection = document.getElementById('login');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // フォームデータの送信ロジック
        console.log(`メールアドレス: ${email}, パスワード: ${password}`);
        
        // 実際にはAPI呼び出しなどを行う
        alert('ログイン処理が実行されました。');

        // ログイン成功後の処理
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
    });
});
