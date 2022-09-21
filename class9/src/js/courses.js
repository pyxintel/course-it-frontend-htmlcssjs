var title = "Lista de Cursos";
var date = new Date();
var courses = ["HTML", "CSS", "JS"];

console.log(date);
console.log(title, courses);

function forLoop() {
  console.log("\nIteração com 'for'\n")
  for (var i = 0; i < 3; i++) {
    console.log(courses[i]);
  }
}    

function whileLoop() {
  var j = 0;
  var ulCursos = document.getElementById('lista-cursos');
  while (j < 3) {
    var liCurso = document.createElement('li');
    liCurso.innerHTML = courses[j];
    ulCursos.append(liCurso);
    j++;
  }
}    
