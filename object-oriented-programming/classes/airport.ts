/*

El objetico es crear una clase Airport que modele lsa caracteristicas y operaciones de un aeropuerto
de forma mas avanzada.

Cada aeropuerto tiene:
Un nombre.
Una ubicacion.
Una pista de aterrizaje (runway).
Un nivel de trafico aereo (bajo, medio, alto).
La clase debe incluir:

Un metodo changeTrafficLevel que permita cambiar el nivel del trafico aereo.
Un metodo emerencyLanding que cierre la pista aterrizaje y marque el nivel de trafico como alto.
Un metodo displauInfo que muestre el nombre del aeropuerto, la ubicacion y el estado actual de la
pista y el nivel de trafico.
Crea una instancia de la clase Airport y demuestra el uso de estos metodos con distintas operaciones.

*/

type TrafficLevel = 'Low' | 'Middle' | 'High'

class Airport{
    private _name: string
    private _location: string
    private _runwayStatus: boolean
    private _trafficLevel: TrafficLevel

    constructor( name: string, location: string){
        this._name = name
        this._location = location
        this._runwayStatus = true
        this._trafficLevel = 'Low'
    }

    get runwayStatus(): boolean{
        return this._runwayStatus
    }

    set runwayStatus(status: boolean){
        this._runwayStatus = status
    }

    get trafficLevel(){
        return this._trafficLevel
    }

    set trafficLevel(level: TrafficLevel){
        this._trafficLevel = level
    }

    changeTrafficLevel(level: TrafficLevel): void {
        this._trafficLevel = level
        console.log(`El nivel de trafico se ha cambiado a ${level} en el aeropuerto ${this._name}`)
    }

    emergencyLanding(): void {
        this.runwayStatus = false
        this._trafficLevel = 'High'
        console.log(`Aterrizaje de emergencia en el areopuerto ${this._name}. La pista esta cerrada y el nivel de trafico es alto`)

    }

    displayInfo(): void {
        console.log(`Nombre: ${this._name}`)
        console.log(`Ubicacion: ${this._location}`)
        console.log(`Estado de la pista: ${this._runwayStatus}`)
        console.log(this.trafficLevel)
        
    }
    
}

const myAirport = new Airport('Aeropuerto Internacional', 'Saint Paul City')

myAirport.displayInfo()
myAirport.changeTrafficLevel('Middle')
myAirport.displayInfo()
myAirport.emergencyLanding()
myAirport.displayInfo()
