// Primeira ideia

// function verificaNome() {
//     const nomeInput = document.getElementById('name');
//     nomeInput.addEventListener('change', () => {console.log('nome mudou');})
//     console.log(nomeInput);
// }

// function verificaEmail() {
//     const emailInput = document.getElementById('email');
//     console.log(emailInput);
// }

// function verificaTelefone() {
//     const telefoneInput = document.getElementById('telefone');
//     console.log(telefoneInput);
// }

// function verificaMensagem() {
//     const mensagemInput = document.getElementById('mensagem');
//     console.log(mensagemInput);
// }

// Formulário preenchido?!

// function verificaFormulario(event) {
//     event.preventDefault(); // Prevent form submission

//     const nomeInput = document.getElementById('name').value;
//     const emailInput = document.getElementById('email').value;
//     const telefoneInput = document.getElementById('telefone').value;
//     const mensagemInput = document.getElementById('mensagem').value;

//     nomeInput == '' ? console.log('Nome: *campos obrigatórios') : console.log(`Nome: ${nomeInput}`);
//     emailInput == '' ? console.log('Email: *campos obrigatórios') : console.log(`Email: ${emailInput}`);
//     telefoneInput == '' ? console.log('Telefone: *campos obrigatórios') : console.log(`Telefone: ${telefoneInput}`);
//     mensagemInput == '' ? console.log('Mensagem: *campos obrigatórios') : console.log(`Mensagem: ${mensagemInput}`);
// }

// Formulario verde ou vermelho

function verificaFormulario(event) {
    event.preventDefault(); // Prevent form submission
  
    // const form = document.querySelector('.form');
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const mensagemInput = document.getElementById('mensagem');
    
    nomeInput.classList.remove('input-padrao');
    emailInput.classList.remove('input-padrao');
    telefoneInput.classList.remove('input-padrao');
    mensagemInput.classList.remove('input-padrao');

    const labelNome = nomeInput.nextElementSibling;
    if (labelNome && labelNome.tagName.toLowerCase() === 'label') {
        labelNome.remove();
      }
    const labelEmail = emailInput.nextElementSibling;
    if (labelEmail && labelEmail.tagName.toLowerCase() === 'label') {
        labelEmail.remove();
    }
    const labelTelefone = telefoneInput.nextElementSibling;
    if (labelTelefone && labelTelefone.tagName.toLowerCase() === 'label') {
        labelTelefone.remove();
    }
    const labelMensagem = mensagemInput.nextElementSibling;
    if (labelMensagem && labelMensagem.tagName.toLowerCase() === 'label') {
        labelMensagem.remove();
    }

    if (nomeInput.value == '') {
      nomeInput.classList.remove('input-preenchido');
      nomeInput.classList.add('input-vazio');
      nomeInput.insertAdjacentHTML(
        'afterend',
        "<label for='name' class='label-error'>*campos obrigatórios</label>"
      );
    } else {
      nomeInput.classList.remove('input-vazio');
      nomeInput.classList.add('input-preenchido');
    }

    if (emailInput.value == '') {
        emailInput.classList.remove('input-preenchido');
        emailInput.classList.add('input-vazio');
        emailInput.insertAdjacentHTML(
          'afterend',
          "<label for='name' class='label-error'>*campos obrigatórios</label>"
        );
      } else {
        emailInput.classList.remove('input-vazio');
        emailInput.classList.add('input-preenchido');
      }

      if (telefoneInput.value == '') {
        telefoneInput.classList.remove('input-preenchido');
        telefoneInput.classList.add('input-vazio');
        telefoneInput.insertAdjacentHTML(
          'afterend',
          "<label for='name' class='label-error'>*campos obrigatórios</label>"
        );
      } else {
          telefoneInput.classList.remove('input-vazio');
        telefoneInput.classList.add('input-preenchido');
      }

      if (mensagemInput.value == '') {
        mensagemInput.classList.remove('input-preenchido');
        mensagemInput.classList.add('input-vazio');
        mensagemInput.insertAdjacentHTML(
          'afterend',
          "<label for='name' class='label-error'>*campos obrigatórios</label>"
        );
      } else {
        mensagemInput.classList.remove('input-vazio');
        mensagemInput.classList.add('input-preenchido');
      }
  }