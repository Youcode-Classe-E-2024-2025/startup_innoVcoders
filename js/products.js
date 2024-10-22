const shoes = [
    {
        name: "baskets",
        sizes: [43, 42, 41, 40],
        price: 99,
        stock: 30,
        materials: ["leather", "plastic"],
        color: ["black", "white", "blue"],
        description: "Stylish and comfortable baskets suitable for everyday wear.",
        image: "../images/shoe1.png"
    },
    {
        name: "sneakers",
        sizes: [44, 43, 42, 41],
        price: 79,
        stock: 50,
        materials: ["mesh", "rubber"],
        color: ["red", "gray", "green"],
        description: "Lightweight sneakers perfect for running and casual outings.",
        image: "../images/shoe2.png"
    },
    {
        name: "sandals",
        sizes: [40, 41, 42],
        price: 49,
        stock: 20,
        materials: ["canvas", "rubber"],
        color: ["brown", "tan", "black"],
        description: "Comfortable sandals ideal for warm weather.",
        image: "../images/shoe3.png"
    },
    {
        name: "boots",
        sizes: [43, 42, 41],
        price: 129,
        stock: 15,
        materials: ["leather", "synthetic"],
        color: ["black", "brown"],
        description: "Durable boots designed for outdoor activities.",
        image: "../images/shoe4.png"
    },
    {
        name: "loafers",
        sizes: [40, 41, 42, 43],
        price: 89,
        stock: 25,
        materials: ["suede", "leather"],
        color: ["navy", "gray"],
        description: "Classic loafers that combine style and comfort.",
        image: "../images/shoe1.png"
    }
];


const list = document.querySelector(".shoes");
const overlay = document.querySelector(".overlay");
const blurr = document.querySelector(".blur");


shoes.forEach((shoe,i)=>{
    list.insertAdjacentHTML("beforeend",
        `<li class="shoe">
                <img src="${shoe.image}" class="shoe-image" alt="shoe">
                <div class="shoe-text">
                    <h3 class="shoe-name">${shoe.name}</h3>
                    <p class="shoe-description">${shoe.description}</p>
                </div>
                <button class="shoe-btn" data-num="${i}">Add</button>
            </li>`
    );
});





list.addEventListener('click',function(e){
    e.stopPropagation();
    if(e.target.classList.contains('shoe-btn')) {
        const num = e.target.dataset.num;
        const shoe = shoes[num];
        overlay.innerHTML = 
        `<img src="${shoe.image}" alt="">
                        <div class="overlay-text">
                            <h3>${shoe.name}</h3>
                            <p>${shoe.description}</p>
                        </div>
                        <div class="shoe-info">
                            <div class="price">$ ${shoe.price}</div>
                            <p class="materials">${shoe.materials.join(', ')}</p>
                        </div>
                        <button>Add to cart</button>
            `
        blurr.style.display = "block";
        overlay.style.display = "grid"
        
    }
})
document.documentElement.addEventListener('click',(e)=>{
    if(overlay.style.display === "grid")
    if(!e.target.closest(".overlay") ){
        console.log("yes");
        
     blurr.style.display = "none"
     overlay.style.display = "none"
     
    }
})