/*
1. Array operations
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.
 Utiliza destructuring.
*/
const lista = ["camisa","zapatos","guantes","pantalon"];

const head = ([first]) => first;
   
console.log(head(lista));

/*
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.
 Utiliza rest operator.*/

 const tail = ([, ...arguments]) => arguments;

 console.log(tail(lista))

/*
Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
*/

const init = arry => arry.splice(0, arry.length - 1);
console.log(init(lista))

/*
Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento
*/

const last =([arguments, ])=> arguments;
console.log(last(lista));

/*2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.
 Utiliza rest / spread operators*/
const lista1 =["coche", "moto" , "bici", "avión"];
const lista2=["caravana", "autocaravana", "camper"," tienda-campaña"];

const concat =(a, b) =>[...a, ...b];

console.log(concat(lista1, lista2));

/*Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/

const concatMulti = (...arguments) =>{
    const concatArray = [];
    arguments.forEach(argument => {
       concatArray.push(argument); 
    })
   return concatArray.flat();
}
console.log(concatMulti(lista1, ["hola","adios"],[1,2,3,4,5,6]))
/*3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto
 con las propiedades de source*/

 const person = {
     name: "Miriam",
     age: 38,
     city: "Ollauri",
 }; 

 function clone(source){
     const person2 = {...source};
     return person2;
 };
 console.log(clone(person));

 /*Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades
 de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.*/

 const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
 const b = { name: "Luisa", age: 31, married: true };

 function merge(source,target){
     const otroObject = { ...target,...source};
     return otroObject;
 };
 console.log(merge(a,b));

 /*4. Read Books
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
 Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP:
  Existe un método de Array.prototype que te ayudará a buscar según un patrón.*/

  const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  function isBookRead (books, titleToSearch){
      for(book of books){
         if(book.title === titleToSearch && book.isRead ===  true){
             return true;
         }
        };
        return false;
  };
  console.log(isBookRead(books, "Devastación"));

  /*
  5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
 insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente 
 se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres
 booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los
  tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
  */
 class SlothMachine {
     constructor(){
         this.contadorMonedas = 0;
     }
     play = () =>{
        this.contadorMonedas ++;
        if (
      (Math.round(Math.random()) &&
      Math.round(Math.random()) &&
      Math.round(Math.random())) === 1
        ){
            console.log(`Congratulations!!!. You won ${this.contadorMonedas} coins`);
            this.contadorMonedas = 0;
            return true;
        }else{
            console.log(`Good luck next time`);
        };
    };
};

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

