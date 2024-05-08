
$(document).ready(function() {
    // Aplicar máscaras aos campos de nome, telefone e mensagem
    $("#nome").mask({
        pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/
    });

    $("#telefone").mask({
        pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/ // Permite números e letras
    });

    $("#mensagem").mask({
        pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/
    });

    // Validar o formulário usando jQuery Validate
    $('form').validate({
        // Regras de validação para cada campo
        rules: {
            nome: {
                required: true,
                pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/ // Permite números e letras
            },
            mensagem: {
                required: true,
                pattern: /^[A-Za-záàâãéèêẽíìîĩóòôõúùûũçÇ0-9\s]+$/
            }
        },
        // Mensagens de erro personalizadas
        messages: {
            nome: 'Por favor insira seu nome completo',
            email: 'Por favor insira um e-mail válido',
            telefone: 'Por favor insira seu número de telefone ou nome',
            mensagem: 'Por favor insira sua mensagem'
        },
        // Função a ser executada quando o formulário for válido
        submitHandler: function(form) {
            console.log("Formulário enviado com sucesso!");
            alert("Formulário enviado com sucesso!");
            form.submit(); // Enviar o formulário para o servidor
        }
    });
});
