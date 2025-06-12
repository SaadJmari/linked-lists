import "./styles.css"
import linkedList from "./linkedList"

const list = linkedList();


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.removeAt(2);

console.log(list.toString());

list.removeAt(0);

console.log(list.toString());

list.removeAt(10);

console.log(list.toString());  