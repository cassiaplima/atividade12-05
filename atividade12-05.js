//Exercios-03 Cassia Pereira Lima-- DATA  12/05/22

//Atividade-01

/*let nascimento = prompt('Digite o seu ano de nascimento')

if(nascimento <= 2004){
  alert('Voce pode votar')
}else{
    alert('Voce nao pode votar')
}*/

//Atividade-02

/*let senha= prompt('Digite a sua senha') 
if(senha == 1234){
    alert('Acesso permitido')
}else{
    alert('Acesso negado')
}*/

//Atividade-03

let turno = prompt ('Em qual turno vc estuda');

let valor = ['M','m','V','v','N','n'];
if(turno == valor[0] || turno == valor[1]) {
    alert('Bom Dia');
}
else if(turno == valor[2] || turno == valor[3]) {
    alert('boa tarde');
}
else if(turno == valor[4] || turno == valor[5]){
    alert('boa noite');
}
else {
    alert('Invalido');
}