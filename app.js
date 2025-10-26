let imagem = document.querySelector('img')


let gato = {
    nome: "Alaska",
    comeu: false,
    roupa: "img/gatinhoPcomida.png",

}


function alimetarGatinho(){
    if(gato.comeu == false){
     imagem.src = "img/gatinhAlimentando.png"
     gato.comeu = true
    }else{
        alert("Ele ainda está comendo")
    }

    
}
const roupas = document.querySelector('.rosto')
let armario = false
function trocaRoupa(){
   
    if(armario===false){
        const foto_principal = roupas.querySelector('img')
        foto_principal.remove()
    for(i=1; i<3;i++){
        const img = document.createElement("img");
        img.src = `img/roupa${i}.png`;
        roupas.appendChild(img);
        armario = true;
        
    }
}else{
    const imagens = roupas.querySelectorAll('img');
    imagens.forEach(img => img.remove());


    imagem = document.createElement("img");
    imagem.src = `img/gatinhoPcomida.png`;
    roupas.appendChild(imagem);
    armario = false


}
}