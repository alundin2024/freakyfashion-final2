console.log("Admin Client Side");

let loadProducts = ()=>{


fetch('/admin/api/products')
  .then(response => response.json())
  .then((products) => {
    console.log(products)
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
        
        console.log(tr);
        document.getElementById("productList").appendChild(tr);
    }
  })
  .catch(error => console.error('Error:', error));

}


let saveNewProduct = (event) => {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById("productForm");
  const formData = new FormData(form);
  const product = Object.fromEntries(formData.entries());

  fetch("/admin/new", {
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
    console.log(document.getElementById("loadProductsButton"));
    document.getElementById("loadProductsButton1").addEventListener("click", loadProducts);
    document.getElementById("loadProductsButton2").addEventListener("click", saveNewProduct);
    const productForm = document.getElementById("productForm");
    productForm.addEventListener("submit", saveNewProduct);
});

