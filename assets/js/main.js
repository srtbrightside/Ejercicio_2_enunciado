function perSquad(nombre,edad,hobbie){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;

}

var espe = new perSquad('Esperanza Lucero','26', 'Fotografíar');
var cindy = new perSquad('Cindialy Berrios','23','Trekking');
var vale = new perSquad('Valentina Miranda','26', 'Dibujar');
var fer = new perSquad('Fernanda Zamora','30', 'Escuchar música');
var diana = new perSquad('Diana Villasmil','29', 'Ver series Coreanas');
var vanessa = new perSquad('Vanessa Pellegrini', '25', 'Jugar lol');
var natalia = new perSquad('Natalia Villalobos', '30', 'Tocar batería');
var vane = new perSquad('Vanessa García', '25', 'Probar cervezas')

var impre = document.getElementById('lista');

var res1 = "<b><li>Nombre y Apellido: </b>" + espe.nombre + "<br></li><b><li>Edad: </b>" + espe.edad + "<br></li><b><li>Hobbie: </b>" + espe.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
    var res2 = "<b><li>Nombre y Apellido: </b>" + cindy.nombre + "<br></li><b><li>Edad: </b>" + cindy.edad + "<br></li><b><li>Hobbie: </b>" + cindy.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res3 = "<b><li>Nombre y Apellido: </b>" + vale.nombre + "<br></li><b><li>Edad: </b>" + vale.edad + "<br></li><b><li>Hobbie: </b>" + vale.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res4 = "<b><li>Nombre y Apellido: </b>" + fer.nombre + "<br></li><b><li>Edad: </b>" + fer.edad + "<br></li><b><li>Hobbie: </b>" + fer.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res5 = "<b><li>Nombre y Apellido: </b>" + diana.nombre + "<br></li><b><li>Edad: </b>" + diana.edad + "<br></li><b><li>Hobbie: </b>" + diana.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res6 = "<b><li>Nombre y Apellido: </b>" + vanessa.nombre + "<br></li><b><li>Edad: </b>" + vanessa.edad + "<br></li><b><li>Hobbie: </b>" + vanessa.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res7 = "<b><li>Nombre y Apellido: </b>" + natalia.nombre + "<br></li><b><li>Edad: </b>" + natalia.edad + "<br></li><b><li>Hobbie: </b>" + natalia.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";
var res8 = "<b><li>Nombre y Apellido: </b>" + vane.nombre + "<br></li><b><li>Edad: </b>" + vane.edad + "<br></li><b><li>Hobbie: </b>" + vane.hobbie
    + "<br><br>" + "<textarea name='textarea' rows='9' cols='60'>Ingresa tu comentario</textarea>";

var res = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8;



impre.innerHTML = res;
