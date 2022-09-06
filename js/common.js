// auto_scroll ボタンを押して、画面を引数の位置までアニメーションスクロール
function auto_scroll(num, num2) {
    var num2 = num2 || 500;
    $('html,body').animate({
        scrollTop: $(num).offset().top - 100
    }, num2, function() {});
}


auth_user_type();

function auth_user_type() {
    var pw = localStorage.getItem(token);
    if (pw != '2022274274') {
        alert('認証エラー。最初からやり直してください。');
        location.href = 'https://www.hiryusai2022.tk/auth/';
    }
}