# Teste da BeatsCode

Atualmente, serão feitas duas estapas de teste onde elas não precisam necessariamente ser concluídas, o que importa é a sua lógica e desenvolvimento.
Então, mesmo se não conseguir desenvolver, tente elaborar o máximo possível a sua forma de resolução de como você faria essa tarefa, nem que seja somente descrevendo a resolução.

# Setup

Este projeto está configurado com o Create React App, então todas as configurações devem ser feitas dentro do `/src`.
Após baixar os fontes pela primeira vez, instale os pacotes do node pelo comando `npm install` e, depois, para cada vez que for iniciar o projeto e começar a desenvolver, basta fazer um `npm start` no _root_ do projeto.

# Lógica

## Questão 1: Encontrar o menor positivo possível

Escreva uma função:

    function solution(A);

no qual recebe um vetor A com N inteiros.
O retorno deve ser o menor inteiro positivo (maior que 0) que não consta em A.

Exemplo 1: `A = [1, 3, 6, 4, 1, 2]`, a função deve retornar 5.

Exemplo 2: `A = [1, 2, 3]`, a função deve retornar 4.

Exemplo 3: `A = [−1, −3]`, a função deve retornar 1.

N é um inteiro entre 1 e 100.000.
Cada elemento do vetor A é um inteiro entre -1.000.000 e 1.000.000.

## Questão 2: Sequência Fibonacci

Cada novo termo da sequência de Fibonacci é gerada pela soma dos dois termos anteriores. Iniciando com 1 e 2, os 10 primeiros termos serão:

`1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...`

Considerando os termos da sequência de Fibonacci cujos valores não excedem quatro millões, calcule a soma de todos os termos pares.

## Questão 3: Encontre o vencedor de um jogo de Cartas

Há um jogo de baralho no qual o valor das cartas deste baralho segue a seguinte ordem:

`A > K > Q > J > 0 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2`

Escreva uma função:

    function getWinner(A, B);

no qual recebe 2 parâmetros A e B, um vetor, com as jogadas de cada jogador na ordem em que foram jogadas.
Obrigatoriamente os dois vetores tem o mesmo tamanho.
E as cartas seguem a hierarquia descrita acima.

O retorno da função deve ser:

    1:	caso o jogador com a vetor A é o vencedor
    0:	caso houve um empate
    -1:	caso o jogador com a vetor B é o vencedor

Exemplo: `A = [4, 5, A, 6, 2]`, `B = [3, 8, 7, Q, 4]`, a função deve retornar -1

# Estilização e React

Usando a api pública do `https://swapi.dev`, crie um site em react que mostre os filmes do Star Wars e suas informações dinamicamente.

Sugestão: exibir uma lista dos filmes e, ao clicar no filme, exibe o elenco e/ou alguma outra informação disponível na api

Será avaliado organização de código, solução e criatividade.
