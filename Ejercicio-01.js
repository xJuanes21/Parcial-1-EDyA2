//Juan Esteban Salazar Toro - 2221681


//Para abordar este problema en primer lugar implementaremos la estructura de nuestros nodos y una LinkedList con los métodos append y print.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;  
    }

    // Método Append
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;  
    }

    // Método Print
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
   
}

function concatAndOrder(list1, list2) {

    let concatenada = new LinkedList();

    // Concatenar list1 
    let current = list1.head;
    while (current !== null) {
        concatenada.append(current.value);
        current = current.next;
    }

    // Concatenar list2 
    current = list2.head;
    while (current !== null) {
        concatenada.append(current.value);
        current = current.next;
    }

    // Ordenar Menor-Mayor
   
    if (concatenada.length > 1) {
        let sorted = false;
        while (!sorted) {
            sorted = true;
            current = concatenada.head;
            while (current.next !== null) {
                if (current.value > current.next.value) {
                    // Intercambiar  valores
                    let temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    sorted = false;
                }
                current = current.next;
            }
        }
    }
    return concatenada.print();
}


// Prueba de usabilidad:
let list1 = new LinkedList();
list1.append(9);
list1.append(7);
list1.append(5);
list1.append(3);
list1.append(1);

let list2 = new LinkedList();
list2.append(8);
list2.append(6);
list2.append(4);
list2.append(2);
list2.append(0);

console.log('------------------------------------------------------------')
console.log('La lista 1 es: ')
list1.print()
console.log('------------------------------------------------------------')
console.log('La lista 2 es:  ')
list2.print()
console.log('------------------------------------------------------------')



console.log('Una vez conocidas las dos listas, la unión de ambas con sus elementos ordenados de menor a mayor es:  ')
concatAndOrder(list1, list2);

console.log('------------------------------------------------------------')


