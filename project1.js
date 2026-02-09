let cartCount = 0;


const foodAPI = [
    {
        name: "Burger",
        price: 120,
        img: "f1.webp"
    },
    {
        name: "Pizza",
        price: 250,
        img: "f2.webp"
    },
    {
        name: "Noodles",
        price: 180,
        img: "f3.webp"
    },
    {
        name: "Fried Rice",
        price: 150,
        img: "f4.webp"
    }
];


function loadFood(items) {
    const container = document.getElementById("foodContainer");
    container.innerHTML = "";

    items.forEach(food => {
        const card = document.createElement("div");
        card.className = "food-card";

        card.innerHTML = `
            <img src="${food.img}">
            <h3>${food.name}</h3>
            <p>₹ ${food.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}


function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}


document.getElementById("searchBtn").addEventListener("click", () => {
    const value = document.getElementById("search").value.toLowerCase();
    const filtered = foodAPI.filter(item =>
        item.name.toLowerCase().includes(value)
    );
    loadFood(filtered);
});

document.getElementById("addressBtn").addEventListener("click", () => {
    alert("📍 Delivery Address: Manipur, India");
});

loadFood(foodAPI);
