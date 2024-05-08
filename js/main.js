

$(document).ready(function() {
    // Aplicar máscaras aos campos de telefone, CPF e CEP
    $("#telefone").mask("(99) 9999-9999"); // Máscara de telefone
    $("#cpf").mask("999.999.999-99"); // Máscara de CPF
    $("#cep").mask("99.999-999"); // Máscara de CEP
});
$('form').validate({
    // Regras de validação para cada campo
    rules: {
        nome: {
            required: true // Campo de nome obrigatório
        },
        email: {
            required: true, // Campo de email obrigatório
            email: true // Validar formato de email
        },
        telefone: {
            required: true // Campo de telefone obrigatório
        },
        mensagem: {
            required: true // Campo de mensagem obrigatório
        }
    },
    // Mensagens de erro personalizadas
    messages: {
        nome: 'Por favor insira seu nome completo', // Mensagem de erro do nome
        email: 'Por favor insira um e-mail válido', // Mensagem de erro do email
        telefone: 'Por favor insira seu número de telefone', // Mensagem de erro do telefone
        mensagem: 'Por favor insira sua mensagem' // Mensagem de erro da mensagem
    },
    // Função a ser executada quando o formulário for válido
    submitHandler: function(form) {
        console.log("Formulário enviado com sucesso!");
        alert("Formulário enviado com sucesso!");
        form.submit(); // Enviar o formulário para o servidor
    }
});
