let estudantes = [
  {
    nome: 'Scheila',
    nota1: 7,
    nota2: 8
  },
  {
    nome: 'Rodrigo',
    nota1: 9,
    nota2: 8
  },
  {
    nome: 'Diego',
    nota1: 9,
    nota2: 9,
  },
  {
    nome: 'Maya',
    nota1: 4,
    nota2: 2,
  },
];

function resultadoConcurso(nome, nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  if (media >= 7) {
    return alert(
      `A média do(a) aluno(a) ${nome} é: ${media}
       Parabéns, ${nome}! Você foi aprovado(a) no concurso!`);
  } else {
    return alert(
      `A média do(a) aluno(a) ${nome} é: ${media}
       Não foi dessa vez, ${nome}! Tente novamente!`);
  }
}

for (let estudante of estudantes) {
  resultadoConcurso(estudante.nome, estudante.nota1, estudante.nota2);
};