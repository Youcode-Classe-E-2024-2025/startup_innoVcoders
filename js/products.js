const shoes = [
    {
        "name": "Air Max 270",
        "sizes": [40, 41, 42, 43, 44],
        "price": 150,
        "stock": 25,
        "materials": ["mesh", "rubber"],
        "color": ["black", "white", "red"],
        "description": "Iconic Air Max cushioning for all-day comfort.",
        "image": "../images/shoe1.png"
    },
    {
        "name": "Nike React Infinity Run",
        "sizes": [41, 42, 43, 44],
        "price": 160,
        "stock": 30,
        "materials": ["mesh", "foam"],
        "color": ["blue", "green", "gray"],
        "description": "Designed to help reduce injury with soft cushioning.",
        "image": "../images/shoe2.png"
    },
    {
        "name": "Air Force 1",
        "sizes": [40, 41, 42, 43, 44],
        "price": 90,
        "stock": 40,
        "materials": ["leather", "rubber"],
        "color": ["white", "black", "red"],
        "description": "Classic design with premium materials for a timeless look.",
        "image": "../images/shoe3.png"
    },
    {
        "name": "ZoomX Vaporfly",
        "sizes": [42, 43, 44],
        "price": 250,
        "stock": 10,
        "materials": ["mesh", "carbon fiber"],
        "color": ["yellow", "black"],
        "description": "Engineered for speed and efficiency in racing.",
        "image": "../images/shoe4.png"
    },
    {
        "name": "Air Jordan 1",
        "sizes": [41, 42, 43],
        "price": 160,
        "stock": 20,
        "materials": ["leather", "synthetic"],
        "color": ["black", "red", "white"],
        "description": "A cultural icon that transcends basketball.",
        "image": "../images/shoe1.png"
    },
    {
        "name": "Nike Free RN",
        "sizes": [40, 41, 42, 43],
        "price": 120,
        "stock": 35,
        "materials": ["mesh", "rubber"],
        "color": ["gray", "blue", "green"],
        "description": "Flexible and lightweight, ideal for natural running.",
        "image": "../images/shoe2.png"
    },
    {
        "name": "Air Huarache",
        "sizes": [40, 41, 42, 43],
        "price": 110,
        "stock": 15,
        "materials": ["neoprene", "rubber"],
        "color": ["black", "white", "purple"],
        "description": "Retro design with a snug fit for everyday wear.",
        "image": "../images/shoe3.png"
    },
    {
        "name": "Nike Air Presto",
        "sizes": [41, 42, 43, 44],
        "price": 130,
        "stock": 18,
        "materials": ["mesh", "rubber"],
        "color": ["red", "black", "gray"],
        "description": "Sock-like fit for ultimate comfort and support.",
        "image": "../images/shoe4.png"
    },
    {
        "name": "Nike SB Dunk Low",
        "sizes": [40, 41, 42, 43],
        "price": 110,
        "stock": 25,
        "materials": ["leather", "canvas"],
        "color": ["blue", "pink", "white"],
        "description": "Skate shoes with a streetwear edge.",
        "image": "../images/shoe1.png"
    },
    {
        "name": "Nike Air Zoom Pegasus",
        "sizes": [40, 41, 42, 43, 44],
        "price": 120,
        "stock": 30,
        "materials": ["mesh", "foam"],
        "color": ["black", "blue", "orange"],
        "description": "Versatile running shoes for all levels.",
        "image": "../images/shoe2.png"
    },
    {
        "name": "Nike Shox",
        "sizes": [42, 43, 44],
        "price": 150,
        "stock": 12,
        "materials": ["synthetic", "rubber"],
        "color": ["black", "silver"],
        "description": "Innovative cushioning technology for responsiveness.",
        "image": "../images/shoe3.png"
    },
    {
        "name": "Nike Blazer Mid",
        "sizes": [40, 41, 42, 43],
        "price": 100,
        "stock": 22,
        "materials": ["leather", "rubber"],
        "color": ["white", "black"],
        "description": "Classic basketball silhouette with a vintage vibe.",
        "image": "../images/shoe4.png"
    },
    {
        "name": "Nike Court Vision",
        "sizes": [40, 41, 42, 43],
        "price": 75,
        "stock": 50,
        "materials": ["leather", "synthetic"],
        "color": ["white", "blue"],
        "description": "Stylish and versatile shoes inspired by basketball.",
        "image": "../images/shoe1.png"
    },
    {
        "name": "Air Max 95",
        "sizes": [41, 42, 43],
        "price": 180,
        "stock": 15,
        "materials": ["mesh", "leather"],
        "color": ["gray", "neon"],
        "description": "Famous for its visible Air cushioning and bold design.",
        "image": "../images/shoe2.png"
    },
    {
        "name": "Nike Air Monarch IV",
        "sizes": [40, 41, 42, 43],
        "price": 90,
        "stock": 28,
        "materials": ["leather", "synthetic"],
        "color": ["white", "black"],
        "description": "Comfortable training shoe with classic style.",
        "image": "../images/shoe3.png"
    },
    {
        "name": "Nike LunarEpic Flyknit",
        "sizes": [41, 42, 43],
        "price": 140,
        "stock": 16,
        "materials": ["flyknit", "foam"],
        "color": ["black", "green"],
        "description": "Lightweight running shoe with adaptive fit.",
        "image": "../images/shoe4.png"
    },
    {
        "name": "Nike Air Zoom Structure",
        "sizes": [40, 41, 42, 43],
        "price": 130,
        "stock": 20,
        "materials": ["mesh", "foam"],
        "color": ["blue", "orange"],
        "description": "Stability and cushioning for long runs.",
        "image": "../images/shoe1.png"
    },
    {
        "name": "Nike Air Tailwind",
        "sizes": [42, 43, 44],
        "price": 110,
        "stock": 18,
        "materials": ["mesh", "rubber"],
        "color": ["black", "purple"],
        "description": "Retro running shoes with modern comfort.",
        "image": "../images/shoe2.png"
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
                            <br/>
                            <br/>
                            <p>${shoe.color.join(', ')}</p>
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