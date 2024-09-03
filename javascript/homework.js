const products = [
    {
        title: "Samsung Galaxy S21",
        category: "Electronics",
        type: "Smartphone",
        price: 799.99,
        brand: "Samsung",
        model: "Galaxy S21"
    },
    {
        title: "Apple iPhone 13",
        category: "Electronics",
        type: "Smartphone",
        price: 999.99,
        brand: "Apple",
        model: "iPhone 13"
    },
    {
        title: "Sony WH-1000XM4",
        category: "Electronics",
        type: "Headphones",
        price: 349.99,
        brand: "Sony",
        model: "WH-1000XM4"
    },
    {
        title: "Dell XPS 13",
        category: "Computers",
        type: "Laptop",
        price: 1199.99,
        brand: "Dell",
        model: "XPS 13"
    },
    {
        title: "Nike Air Max 270",
        category: "Fashion",
        type: "Shoes",
        price: 150.00,
        brand: "Nike",
        model: "Air Max 270"
    },
    {
        title: "Samsung QLED TV",
        category: "Electronics",
        type: "Television",
        price: 1299.99,
        brand: "Samsung",
        model: "QLED TV"
    },
    {
        title: "Apple MacBook Pro",
        category: "Computers",
        type: "Laptop",
        price: 2399.99,
        brand: "Apple",
        model: "MacBook Pro"
    },
    {
        title: "Adidas Ultraboost",
        category: "Fashion",
        type: "Shoes",
        price: 180.00,
        brand: "Adidas",
        model: "Ultraboost"
    }
];
//console.log(products.category)
const categorys = products.filter((n)=>{return n.category ==="Fashion"});
console.log(categorys)