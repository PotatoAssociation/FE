document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginTab.addEventListener('click', function() {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    });

    signupTab.addEventListener('click', function() {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    });
});

function login(event) {
    event.preventDefault(); // 폼 제출 방지

    const nickname = document.getElementById('loginNickname').value;
    const email = document.getElementById('loginEmail').value;

    if (nickname && email) {
        // 로그인 상태를 true로 설정
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("nickname", nickname);
        sessionStorage.setItem("email", email);

        // 로그인 후 마이페이지로 이동
        window.location.href = "mypage.html";
    } else {
        alert("닉네임과 이메일을 입력해주세요.");
    }
}
