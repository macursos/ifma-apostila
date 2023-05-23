var botao = document.querySelector("#botao-enviar")

botao.addEventListener('click', (event) => {

    event.preventDefault();
    if(!validaNome()){
        swal('Nome inválido', 'Digite um nome com pelo menos 3 caracteres usando apenas letras e espaço', 'error')
    }
    else if (!validaEmail()){
        swal('E-mail inválido!', `Digite um e-mail como esse exemplo:
                                    
                                  email@email.com`, 'error')
    }
    else{
        fetch("https://formsubmit.co/snct.ifmagrajau@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: document.querySelector(".nome-formulario").value,
                email: document.querySelector(".email-formulario").value,
                message: document.querySelector(".contato__formulario--textarea").value,
                _subject: "Formulário Preenchido - MA CURSOS"
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)
        );
        swal("Formulário enviado com sucesso!", '', 'success')
        limpaFormulario()
    }
})

function limpaFormulario() {
    document.querySelector(".nome-formulario").value = ""
    document.querySelector(".contato__formulario--textarea").value = ""
    document.querySelector(".email-formulario").value = ""
}

function validaEmail(){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(document.querySelector(".email-formulario").value) 
}

function validaNome(){
    const regexNome = /[a-zA-Z].{2,}/
    return regexNome.test(document.querySelector(".nome-formulario").value)
}
