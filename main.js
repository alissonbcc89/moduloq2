const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
] ;

const user = [
    'Diego', 23, 'Rocketseat'
    
];

const newUser = usuarios.map(function(idad){
    return idad.idade;
});

const filterUse = usuarios.filter(function(item){
    if(item.idade > 18)
    {
        return item;
    }
});

const findUse =usuarios.filter(function(item){

    return item.empresa === 'Rocketseat';
});


console.log(findUse);   

const multiplicadois = user.filter(function(item){
    if(item.idade*2 >=50){
    return item.idade ;
    }
});

const retornaM = multiplicadois.filter(function(item){

    return item.idade >= 50;
});

console.log(retornaM);