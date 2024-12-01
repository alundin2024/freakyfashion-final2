console.log("Admin Client Side");

let saveNewProduct = (event) => {
  console.log("Innan prev");
  event.preventDefault(); // Prevent form submission
  console.log("Efter prev");

  const form = document.getElementById("productForm");
  const formData = new FormData(form);
  const product = Object.fromEntries(formData.entries());

  fetch("/admin/api/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Product saved successfully!");
        window.location.href = "/admin/products";
      } else {
        console.error("Failed to save the product.");
      }
    })
    .catch((error) => console.error("Error:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  console.log(productForm);
  productForm.addEventListener("submit", saveNewProduct);
});