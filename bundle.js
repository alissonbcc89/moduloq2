"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var user = ['Diego', 23, 'Rocketseat'];
var newUser = usuarios.map(function (idad) {
  return idad.idade;
});
var filterUse = usuarios.filter(function (item) {
  if (item.idade > 18) {
    return item;
  }
});
var findUse = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat';
});
console.log(findUse);
var multiplicadois = user.filter(function (item) {
  return item.idade * 2;
});
var retornaM = multiplicadois.filter(function (item) {
  return item.idade >= 50;
});
console.log(retornaM);
