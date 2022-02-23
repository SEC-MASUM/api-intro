function loadProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => displayProducts(data));
}

loadProducts();

function displayProducts(products) {
  console.log(products);
  const cardGroup = document.getElementById("card-group");
  for (const product of products) {
    const cardColDiv = document.createElement("div");
    const cardDiv = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBodyDiv = document.createElement("div");
    const cardh5 = document.createElement("h5");
    const cardP = document.createElement("p");
    const cardFooterDiv = document.createElement("div");
    const cardFooterh5 = document.createElement("h5");

    cardColDiv.classList.add("col", "col-lg-4");
    cardDiv.classList.add("card");
    // cardImg.setAttribute("src");
    cardImg.classList.add("card-img-top", "mx-auto", "d-block");
    cardBodyDiv.classList.add("card-body");
    cardh5.classList.add("card-title");
    cardP.classList.add("card-text");
    cardFooterDiv.classList.add("card-footer");

    cardImg.src = product.image;
    cardImg.style.height = "200px";
    cardImg.style.width = "200px";
    cardh5.innerText = product.title;
    let cardPara = product.description;
    cardP.innerText = cardPara.split(" ", 15);
    cardFooterh5.innerText = product.price;

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooterDiv);
    cardBodyDiv.appendChild(cardh5);
    cardBodyDiv.appendChild(cardP);
    cardFooterDiv.appendChild(cardFooterh5);
    cardColDiv.appendChild(cardDiv);
    cardGroup.appendChild(cardColDiv);

    // console.log(product, product.category, product.price);
  }
}
