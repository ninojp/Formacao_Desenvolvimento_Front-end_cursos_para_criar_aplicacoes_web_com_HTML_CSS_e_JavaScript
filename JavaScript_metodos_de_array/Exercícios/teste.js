let estudantes = [
    {id: 1, nome: "Andy", curso: "JavaScript"},
    {id: 2, nome: "Karine", curso: "Python"},
    {id: 3, nome: "João", curso: "JavaScript"},
    {id: 4, nome: "Moni", curso: "JavaScript"},
    {id: 5, nome: "Antônio", curso: "JavaScript"},
    {id: 6, nome: "Luan", curso: "C#"},
    {id: 7, nome: "Bia", curso: "Python"},
    {id: 8, nome: "Vinny", curso: "C#"}
]

let salaDeJavaScript = filtraEstudantesPorCurso('javaScript')//erro AQUI!, letra minúscula
function filtraEstudantesPorCurso(nomeDoCurso) {
    return estudantes.filter(alunos => alunos.curso == nomeDoCurso)
}
console.log(salaDeJavaScript)
//---------------------------------------------------------------------------
let salaDeJavaScript2 = filtraEstudantesPorCurso('JavaScript')
function filtraEstudantesPorCurso(nomeDoCurso) {
    return estudantes.filter(alunos => alunos.curso == nomeDoCurso)
}
console.log(salaDeJavaScript2)
//---------------------------------------------------------------------------
console.log(estudantes.filter(estudante => estudante.curso == 'JavaScript'))