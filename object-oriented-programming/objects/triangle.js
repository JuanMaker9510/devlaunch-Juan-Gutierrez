/*

Un triangulo, una forma geometrica fundamental, es un poligono caracterizado por tener tres lados
y tres vertices. De acuerdo con el teorema de la desigualdad del triangulo, en cualquier triangulo
valido, la suma de las longitudes de dos de los lados cualesquisiera debe ser mayor que la longitud del
tercer lado.

Tu tarea es crear un objeto que represente un triangulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.

Ademas, se requiere una funcion para validar si los lados dados cumplen con el teorema de la 
desigualdad del triangulo.

Por ejemplo, considera un triangulo con longitudes de lados: a=7, b=10 y c=5.

Para determinar si estos lados forman un tiangulo valido, evaluemos si la suma de cada par de 
lados es mayor que la longitud del lado restante.

En este caso, verificaremos si (b + c) > a, (a+c) > b, y (a+b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente formaran un triangulo

*/


const t1 = {
    a: 7,
    b: 10,
    c: 5
 }
 
 const t2 = {
    a: 2,
    b: 3,
    c: 6
 }
 
 const isValidTriangle = (triangle) => {
   const {a, b, c} = triangle
   
   return (b + c) > a && (a + c) > b && (a + b) > c
    
     
 }
 
 console.log(isValidTriangle(t1))
 console.log(isValidTriangle(t2))