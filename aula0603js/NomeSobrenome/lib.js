var nome = prompt ('digite o nome');
var sobrenome = prompt ('digite o sobrenome');
//consloge.log("Bem vindo " + nome + " sobrenome ")
document.write("Bem vindo " + nome + "sobrenome"+ sobrenome);

if (nome === 'Chaves'){
    document.write("<img src= 'https://i.imgur.com/JnegRq8.png'>");
}else{
    document.write("<img src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F1016758053350576192%2F&psig=AOvVaw1TiTXv2nCWlFUiH8miHvsF&ust=1709856056561000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDJqqvs4IQDFQAAAAAdAAAAABAD'>");
}
