function go() {
    const pw = $('#code_textbox').val();

    if (pw == '2022274274') {
        localStorage.setItem(token, pw);
        location.href = '../top/index.html';
    } else {
        $('.error_text').text('パスワードが間違っています。');
    }
}