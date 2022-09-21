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

function fetchCourses() {
  var table = document.getElementById('lista-cursos-api');
  fetch('http://localhost:3100/courses')
    .then((result) => result.json())
    .then((list) => {
      list.map(item => {
        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        col1.innerHTML = item.name;
        col2.innerHTML = item.duration;
        row.appendChild(col1);
        row.appendChild(col2);
        table.append(row);
      })
    })
}