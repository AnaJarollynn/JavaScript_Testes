function coletarDadosUsuario() {
    var usuarioCadastro = document.getElementById(`usuarioCadastro`).value;
    var emailCadastro = document.getElementById(`emailCadastro`).value;
    var senhaCadastro = document.getElementById(`senhaCadastro`).value;
    var senhaCadastroConfirmacao = document.getElementById9(`senhaCadastroConfirmacao`).value;

    var dadosCadastro = {
        usuario: usuarioCadastro,
        email: emailCadastro,
        senhaCadastro: senhaCadastro,
        senhaCadastroConfirmacao: senhaCadastroConfirmacao
    }

    var listaInformacoesCadastro = object.value(dadosCadastro);

    console.log(listaInformacoesCadastro);

    return false;
}