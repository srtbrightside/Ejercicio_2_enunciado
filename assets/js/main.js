function perSquad(nombre,edad,hobbie){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;

}
var espe = new perSquad('Esperanza Lucero','26', 'Diseñar');
var cindy = new perSquad('Cindialy Berrios','23','Trekking');
var vale = new perSquad('Valentina Miranda','26', 'Dibujar');
var fer = new perSquad('Fernanda Zamora','30', 'Escuchar música')


var impre = document.getElementById('lista');

var res1 = "<b><li>Nombre y Apellido: </b>" + espe.nombre + "<br></li><b><li>Edad: </b>" + espe.edad + "<br></li><b><li>Hobbie: </b>" + espe.hobbie
    + "<br><br>";
var res2 = "<b><li>Nombre y Apellido: </b>" + cindy.nombre + "<br></li><b><li>Edad: </b>" + cindy.edad + "<br></li><b><li>Hobbie: </b>" + cindy.hobbie
    + "<br><br>";
var res3 = "<b><li>Nombre y Apellido: </b>" + vale.nombre + "<br></li><b><li>Edad: </b>" + vale.edad + "<br></li><b><li>Hobbie: </b>" + vale.hobbie
    + "<br><br>";
var res4 = "<b><li>Nombre y Apellido: </b>" + fer.nombre + "<br></li><b><li>Edad: </b>" + fer.edad + "<br></li><b><li>Hobbie: </b>" + fer.hobbie
    + "<br><br>";


var res = res1 + res2 + res3 + res4;

impre.innerHTML = res;
