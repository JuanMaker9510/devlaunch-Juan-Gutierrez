
type DogColor = 'Black' | 'White'

interface Address{
  city: string
  state: string


}
class Person {
  constructor(public name: string, public address: Address){
    this.name = name
    this.address = address
  }
}

class BabyDog {
  private age: number
 
constructor(private name: string, public color: DogColor, public owner: Person ){

  this.name = name
  this.age = 0
  this.color = color
  this.owner = owner
 }

 public birthday = (): void => {
  this.age ++
 }

 public GetAge = (): number => {
  return this.age
 }


private cry = (): void => {
  console.log('</3')
}

 public bark =(): void =>{
  console.log('GUAU GUAU!!!')
  console.log(this.name)
  this.cry
 }

}

const p1 = new Person ('Juanpa', { city: 'San Pablo', state: 'Heredia' })
const bd1 = new BabyDog('Merlina', 'Black', p1)
bd1.bark