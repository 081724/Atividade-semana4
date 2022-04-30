/*`Pares` |Imprima na tela os números pares existentes entre 0 e 100..|*/

for (i = 0; i <= 100; i++) {

    let par = i % 2
    if (par === 0) {
        console.log(i)
    }
}