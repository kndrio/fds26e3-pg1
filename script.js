function alternarCartao(idDoCartao) {
    //pega id a partir do ID recebido / passado
    let cartao = document.getElementById(idDoCartao);



    //dentro dele achar o paragrafo extra
    let extra = cartao.querySelector(".oculto");

    console.log(cartao, extra);
    
    //verificar se está oculto ou não
    if (extra.style.display === "none") {
        //exibir
        extra.style.display = "block";
    } else {
        //ocultar
        extra.style.display = "none";
    }

}