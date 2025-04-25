/*

Estas disenando un sistema basico para gestionar cuentas bancarias de clientes.
Cada cuenta bancarioa tendra un identificador unico, un nombre titular, y un saldo.

Tu tarea es crear una funcion createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y 
metodos deben estar definidos dentro de la funcion usando this.

Propiedades de la cuenta bancaria (dentro de la funcion usando this.):

id: identificador unico de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.
Medodos de la cuenta bancaria (dentro de la funcion usando this.):

deposit(amount): incrementa el saldo de la cuenta.
withdraw(amount): disminuye el saldo de la cuenta.
transder(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta
si hay sufuicientes fondos disponibles.
*/


interface AccountShape {
    id: number
    name: string
    balance: number
    deposit: (account:number) => void,
    withdraw: (amount: number) => number | null,
    transfer: (toAccount: AccountShape, amount: number) => AccountShape | null
}

const Account = function( id: number, name: string, balance: number = 0)
{
    this.id = id
    this.name = name
    this.balance = balance

    this.deposit = (amount: number) => {
        this.balance += amount

    }

    this.withdraw = (amount: number) => {
        if(this.balance >= amount) {
        this.balance -= amount
        return amount
    }
    return null
}

this.transfer = (toAccount: AccountShape, amount: number) => {
    const cash = this.withdraw(amount)

    if(cash) {
        toAccount.deposit(cash)
        return toAccount
    }
    return null
}

    return this
}

const acc1: AccountShape = new ( Account as any )(1, 'Juan', 10000)
acc1.deposit(1000)
acc1.withdraw(5000)

const acc2: AccountShape = new (Account as any )(2, 'Pablo', )

console.log(acc1.transfer(acc2, 5000))
console.log(acc1)
