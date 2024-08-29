class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }

    isLeaf(){
        if(this.left == null && this.right == null){
            return true;
        } else{
            return false;
        }
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value, null, null)

        if(!this.root){
            this.root = newNode;
        } else{
            let current = this.root;
            let isFound = false;

            while(!isFound){
                if(current.value === value){
                    isFound = true;
                    return null;
                }
                if(current.value > value){
                    if(!current.left){
                        current.left = newNode
                        isFound = true
                        return this
                    } else {
                        current = current.left
                    }
                } else {
                    if(!current.right){
                        current.right = newNode
                        isFound = true
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }

    }

    preOrder(node = this.root){
        if(!node){
            return;
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);

    }

    getHeight(node = this.root) {
        if (!node) {
            return -1; // Altura de un árbol vacío es -1
        }

        let leftHeight = this.getHeight(node.left);
        let rightHeight = this.getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Arbol de prueba
let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log('------------------------------------------------------------')

console.log("El arbol a trabajar se lee de la siguiente forma en preOrder: ")
tree.preOrder();
console.log('------------------------------------------------------------')

console.log("Altura del árbol:", tree.getHeight()); // Salida esperada: 2

console.log('------------------------------------------------------------')
