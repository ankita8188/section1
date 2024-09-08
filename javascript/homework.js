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
console.log(products[1].category)
const categorys = products.filter((n)=>{ return n.category==="Fashion" });
console.log(categorys)
const typ=products.filter((t)=>{ return t.type==="Laptop"});
console.log(typ)
const brands=products.filter((b)=>{ return b.brand==='Adidas'});
console.log(brands)

const prices=products.filter((p)=>{ return p.price>280});
console.log(prices)
console.log("-------------------------------------------")
const ps=products.filter((p1)=>{ return p1.price<280});
console.log(ps)
console.log("--------------------------------------------")
const sorted = products.filter((prod1,prod2)=>{return prod1.price - prod2.price});
console.log(sorted)
