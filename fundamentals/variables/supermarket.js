/*
Voy al supermercado GreenCenter para hacer mis compras habituales y
planeo comprar manzanas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarketName = 'GreenCenter'

const fruit1 = 'Apples'
const fruit2 = 'Oranges'

const fruitsOnMyList = `${fruit1} and ${fruit2}`

const areBananasAvailable = false
const areGrapesAvailable = false

const cashiersAvailable = 3

const totalCost = 100
const amountPurchased = 150
const change = amountPurchased - totalCost

console.log (`
   Supermarket = ${supermarketName}\n
   Fruits to Buy = ${fruitsOnMyList}\n
   Cashers Available = ${cashiersAvailable}\n
   Total Amount = ${change}
  
   `)
