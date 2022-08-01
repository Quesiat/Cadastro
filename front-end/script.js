function cadastro() {
    const form = document.querySelector('.cadastroPessoas');
    const resultado = document.querySelector('#resultado');

    const cadastroPessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const email = form.querySelector('#email');
        const segmento = form.querySelector('input[name="devweb"]:checked');
        const senioridade = form.querySelector('#senioridade');
        const tecnologias = form.querySelectorAll('input[name="tecnologia"]:checked');
        let tecnologia = '';

        for (var checkbox of tecnologias) {
            tecnologia += `${checkbox.value},`;
        }

        const experiencia = form.querySelector('#experiencia');

        cadastroPessoas.push = ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            segmento: segmento.value,
            senioridade: senioridade.value,
            tecnologia: tecnologia,
            experiencia: experiencia.value
        });

        console.log(cadastroPessoas);

        console.log(nome.value, sobrenome.value, email.value, segmento.value, senioridade.value, tecnologia, experiencia.value);
        //resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${email.value} ${segmento.value} ${senioridade.value} ${tecnologia} ${experiencia.value}</p>`;
        alert(`Seus dados foram enviados com sucesso! \nNome: ${nome.value} \nSobrenome: ${sobrenome.value} \nEmail: ${email.value} \nSegmento: ${segmento.value} \nSenioridade: ${senioridade.value} \nTecnologias: ${tecnologia} \nExperiências: ${experiencia.value}`);

    }
    form.addEventListener('submit', recebeEventoForm);
}
cadastro();