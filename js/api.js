function loadUsers() {
  fetch("https://fakestoreapi.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}
function loadProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadCarts() {
  fetch("https://fakestoreapi.com/carts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function displayUsers(users) {
  const ul = document.getElementById("users");
  for (const user of users) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = `Id: ${
      user.id
    }, Name:  ${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()}, Email: ${
      user.email
    }`;
    ul.appendChild(li);
  }
}
