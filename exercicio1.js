/*Exemplo 01 | Descrição |
| --- | --- |
| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
a) números de 1 a 50
b) quando chegar no número 25 interrompa a instrução e pare o loop
c) quando chegar no número 10 pule a instrução|*/

for (i = 0; i <= 50; i++) {
  
    if (i > 25) {
        
        break
    }
    console.log(i)
}

for (i = 0; i <= 50; i++) {
  
    if (i = 10) {
        
        break
    }else{
        continue
    
    }
    console.log(i)
}


let numero = 0
while(numero < 50) {
    numero++;
    if(numero === 10){
        console.log('PULE');
        continue;
    }
    console.log( numero);
}
