function sendSpaceship(spaceship:{pilot:string , copilot? : string}){ // ? Opcional a propriedade pode esta presente ou não
    //
}

sendSpaceship({pilot:'Magno' , copilot: 'Juliana'})

sendSpaceship({pilot:'Magno'})

let input : unknown // O input vai ter um tipo porem ele e desconhecido , ele não reclama de erro

input = 'teste'

input = 20

let text : string 

text = input // O erro fala que o unknown não e um tipo conhecido como o text e uma string ele da erro

let teste: any

teste = input // Não da erro porque o tipo any desabilita o TypeScript

function verificacao(teste)  {
if(teste){

} else{
    let check: never // Variavel errado , não deveria existir
    check = '' // Type 'string' is not assignable to type 'never'
     return check
}
}