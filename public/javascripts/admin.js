console.log("Admin Client Side");

let loadProducts = ()=>{
  console.log("loadProducts(), fetch products from api");
  fetch('/admin/api/products')
    .then(response => response.json())
    .then((products) => {
      console.log("Got api response, here's the products:");
      console.log(products.length)

      console.log("clear the table of old row before we add new");

      //fetch the product list table
      const list = document.getElementById("productList");
      
      //set innerhtml to nothing to clear the table from old data (if present)
      list.innerHTML = '';

      //create a new headerRow and add to the list
      let headerRow = document.createElement('tr');
      headerRow.innerHTML = '<th>Namn</th><th>SKU</th><th>Pris</th>';
      list.appendChild(headerRow);

      console.log("loop through the array, create TR and TDs and add to the document");

      for(let product of products) {
          
          let tr = document.createElement("tr");

          let name = document.createElement("td");
          name.textContent = product.productName;
          tr.appendChild(name);

          let sku = document.createElement("td");
          sku.textContent = product.sku;
          tr.appendChild(sku);

          let price = document.createElement("td");
          price.textContent = product.price;
          tr.appendChild(price);
          
          list.appendChild(tr);
      }
    })
    .catch(error => console.error('Error:', error));
}

let saveNewProduct = (event) => {
  console.log("Innan prev");
  event.preventDefault(); // Prevent form submission
  console.log("Efter prev");

  const form = document.getElementById("productForm");
  const formData = new FormData(form);
  const product = Object.fromEntries(formData.entries());

  fetch("/api/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Product saved successfully!");
        form.reset();
      } else {
        console.error("Failed to save the product.");
      }
    })
    .catch((error) => console.error("Error:", error));
};

/*let saveNewProduct = ()=>{
    const response = fetch("/admin/api/new", {
    method: "POST",
    body: JSON.stringify({ 
        productName: "",
        description: "",
        image: "",
        brand: "",
        sku: "",
        price: "",

    }),
    });
}*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site is ready now");
    document.getElementById("loadProductsButton1").addEventListener("click", loadProducts);
});