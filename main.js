let products = [];

let makeProduct = (name, price, description, category, image) => {
  let obj = {
    name: name,
    price: price,
    description: description,
    category: category,
    image: image,
  };
  products.push(obj);
};

makeProduct(
  "The Courage to Be Free",
  15.99,
  "No American leader has accomplished more for his state than Governor Ron DeSantis. Now he reveals how he did it.",
  "politics",
  "https://m.media-amazon.com/images/I/41Pw77onK7L._SX329_BO1,204,203,200_.jpg"
);

makeProduct(
  "Atomic Habits",
  20,
  "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  "self development",
  "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"
);

makeProduct(
  "the wisdom of insecurity",
  21,
  "A Message for an Age of Anxiety",
  "philosophy",
  "https://m.media-amazon.com/images/I/41z-7eowiNL._SX322_BO1,204,203,200_.jpg"
);

let appendList = () => {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(product.image);
    $("#container").append(
      `<div>
        <h3>${product.name}</h3>
        <img src = "${product.image}"/>
        <h4>${product.category}</h4>
        <p>${product.description}</p>
        <p>${product.price}</p>
    </div>`
    );
  }
};

appendList();

// the possibility to show products based on its category

let appendListCategory = (category) => {
  let filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];
    $("#container").append(
      `<div>
        <h3>${product.name}</h3>
        <img src = "${product.image}"/>
        <h4>${product.category}</h4>
        <p>${product.description}</p>
        <p>${product.price}</p>
      </div>`
    );
  }
};

// the possibiliry to sort products by price

appendListCategory("politics");

let appendListSort = (sortOrder) => {
  if (sortOrder === "asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    products.sort((a, b) => b.price - a.price);
  }

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    $("#container").append(
      `<div>
        <h3>${product.name}</h3>
        <img src = "${product.image}"/>
        <h4>${product.category}</h4>
        <p>${product.description}</p>
        <p>${product.price}</p>
      </div>`
    );
  }
};
appendListSort("desc"); // for descending order we must use "desc" as parameter and for ascending order we must use "asc"

// add new products

$("#add-product-form").submit(function (event) {
  event.preventDefault(); // prevent form submission

  // get values entered by user
  let name = $("#product-name").val();
  let price = $("#product-price").val();
  let description = $("#product-description").val();
  let category = $("#product-category").val();
  let image = $("#product-image").val();

  // create new product
  makeProduct(name, price, description, category, image);

  // clear form
  $("#add-product-form").trigger("reset");

  // display updated list of products
  appendList();
});
