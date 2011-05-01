function console(hash) {
    var params = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,' +
                 'height=400,width=500,toolbar=no,top=50,left=50';
    console_win = window.open('/?console=' + hash, 'Console', params);
    if(console_win == null)
        alert('отключите блокировку всплывающих окон');
    else
        console_win.focus();
}