function go() {
    const pw = $('#code_textbox').val();

    if (pw == '2022274274') {
        location.href = '../top/index.html';
    } else {
        $('.error_text').text('パスワードが間違っています。');
    }
}