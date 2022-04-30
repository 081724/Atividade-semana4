/*`Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. 
por exemplo: 3! = 3 * 2 * 1 // 6 |*/

function fatorial(numero) {
    let montante = 1;
    for (let i = 1; i < numero; i++) {
      let valor = montante * i;
      montante = montante + valor;
      if (i == numero - 1) {
        console.log(montante);
      }
    }
  }
  
  fatorial(5);