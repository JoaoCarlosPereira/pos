function Verifica() {
    if (document.form.nome.value == '') {
        alert('Favor preencher o campo Nome');
        document.form.nome.focus();
        return false;
    }
    if (document.form.email.value == '') {
        alert('Favor preencher o campo email');
        document.form.email.focus();
        return false;
    }
    if (document.form.senha.value == '') {
        alert('Favor preencher o campo senha');
        document.form.senha.focus();
        return false;
    }
    if (document.form.rep_senha.value == '') {
        alert('Favor preencher o campo Repetir senha');
        document.form.rep_senha.focus();
        return false;
    }
}
function hidestatus() {
    windows.status = '';
    return true;
}