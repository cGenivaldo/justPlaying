const URL = "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY";
const botao = document.getElementById("botao");

console.log(botao);
botao.addEventListener("click", () => {
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach((product) => {
        const sessao = document.createElement("section");
        sessao.classList.add("sessao")
        const productId = document.createElement("p");
        const productTitle = document.createElement("h1");
        const productThumbnail = document.createElement("img");
        productThumbnail.classList.add("thumbnail")
        const section = document.querySelector(".container");
        sessao.appendChild(productId);
        sessao.appendChild(productTitle);
        sessao.appendChild(productThumbnail);
        section.appendChild(sessao);

        productTitle.innerText = product.title;
        productId.innerHTML = product.id;
        productThumbnail.src = product.thumbnail;
      });
    });
});

window.onload = () => {
  // createProduct()
};
