const items = [
{item: 'item1', preco: 50},
{item: 'item2', preco: 35},
{item: 'item3', preco: 22},
{item: 'item4', preco: 17},
{item: 'item5', preco: 79},
{item: 'item6', preco: 49},
]

//
//const nomes = ['Caio', 'Felipe', 'Lucas']
//
//for (indice in nomes){
//    nomes[indice] = "Sr. " + nomes[indice]
//}
//
//console.log(nomes)
//
//
//let total = 0
//
//items.forEach(function(item){
//    total += item.preco
//})
//
////for (indice in items) {
////    total += items[indice].preco
////}
//
//console.log(total)
//
//const total_price = items.reduce((value, current_value) => {
//    value += current_value.preco
//    return value
//}, 30)
//
//
//console.log(total_price)
//
//
//const roupas = [
//{cabeca: 'bone', camisa: 'regata', calca: 'jeans', calcado: 'tenis'},
//{cabeca: 'chapeu', camisa: 'de manga curta', calca: 'jeans', calcado: 'jordan'},
//{cabeca: 'boina', camisa: 'de manga comprida', calca: 'moletom', calcado: 'crocs'},
//{cabeca: 'laco', camisa: 'tipo casaco', calca: 'social', calcado: 'sapa-tenis'},
//{cabeca: 'enfeite', camisa: 'rasgada', calca: 'jeans', calcado: 'chinelo'},
//]
//
//vestimentas = []
//
//const vestimenta = roupas.reduce((initial_value, element) => {
//    initial_value += "A pessoa estava usando "
//    initial_value += element.cabeca
//    initial_value += ", uma camisa "
//    initial_value += element.camisa
//    initial_value += ", uma calca "
//    initial_value += element.calca
//    initial_value += " e calçando um "
//    initial_value += element.calcado
//    "\n"
//    vestimentas.push(initial_value)
//    vestimentas.push(element.cabeca)
//    vestimentas.push(element.camisa)
//    vestimentas.push(element.calca)
//    vestimentas.push(element.calcado)
//}, '')
//console.log(vestimentas)
//
//
//const getMax = function(acumulator, element, index, array) {
//    if (acumulator > element){
//        return acumulator
//    }
//    else{
//        return element
//    }
//}
//
//number_list = [1,2,3,4,5,6,7,8,150]
//
//console.log(number_list.reduce(getMax, 180))


nomes = ["caio", "Ricardo", "Vito", "Joyce", "Saimo", "Helen", "Juliana", "Maria", "Roberto"]


console.log(nomes.filter(name => {console.log(name); return name.slice(-1) == "o"}))

