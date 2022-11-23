var pesopeca =200;

if(pesopeca<100){
    console.log("a peça deve ter no minimo 100g")
}else{  
    console.log("a peca possui peso adequado")
}

var listadepecas = ["Amortecedor","Motor", "Filtro de Ar", "Disco de Freio"]

if (listadepecas.length < 10) {
    console.log ("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")
}

var nomepeca = "volante"

if (nomepeca.length > 3){
    console.log("Nome da peça está adequado para o cadastro!")
}else if (nomepeca.length == 0){
    console.log("O nome da peça não pode ser vazio!")
}else{
    console.log("O nome inválido. Cadastre un nome correto!")
}

// = -> atribuição de valor -> RECEBE
// == -> verificação se os valores são iguais -> É IGUAL?
// === -> verificação se os valores e o tipo são iguais 
// var idade = "20";
// if (idade === 20);


switch (nomepeca.length){
    case 0 :
        console.log("O nome da peça não pode ser vazio!");
        break;
        case 1:
        case 2:
        case 3:
            console.log("O nome inválido. Cadastre um nome correto!");
            break;
            default:
                console.log("Nome da peça está adequado para o cadastro!");
                break;
}