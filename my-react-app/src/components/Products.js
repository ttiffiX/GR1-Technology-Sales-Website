import Lap1 from '../assets/images/ASUS-TUF-F15.png'
import Lap2 from '../assets/images/Lap-LOQ-15ARP9.png'
import Lap3 from '../assets/images/DELL-inspiron-15-3520.png'
import Mouse4 from '../assets/images/mouse.png'
import Keyboard5 from '../assets/images/E-DRA-EK375-Alpha-Đen-Đỏ.png'
import Keyboard6 from '../assets/images/AULA-F75-đen.png'

const PRODUCTS = [
    {
        id: 1,
        category: "Laptop",
        price: 20490000 ,
        stocked: true,
        name: "Laptop ASUS TUF Gaming F15 FX507ZC4-HN095W",
        image: Lap1
    },
    {
        id: 2,
        category: "Laptop",
        price: 20990000 ,
        stocked: true,
        name: "Laptop Lenovo LOQ 15ARP9 83JC007HVN",
        image: Lap2
    },
    {
        id: 3,
        category: "Laptop",
        price: 16390000,
        stocked: false,
        name: "Laptop Dell Inspiron 15 3520",
        image: Lap3
    },
    {
        id: 4,
        category: "Mouse",
        price: 745000,
        stocked: true,
        name: "Logitech G304 Lightspeed",
        image: Mouse4
    },
    {
        id: 5,
        category: "Keyboard",
        price: 1199000,
        stocked: false,
        name: "E-DRA-EK375-Alpha",
        image: Keyboard5
    },
    {
        id: 6,
        category: "Keyboard",
        price: 490000,
        stocked: true,
        name: "AULA-F75",
        image: Keyboard6
    }
];

export default PRODUCTS;
