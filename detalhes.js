const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        const productDetails = document.getElementById("productDetails");

        const productHtml = `
            <div style="background-color: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h2 style="font-size: 28px; margin-bottom: 10px; color: #333;">${product.title}</h2>
                <img src="${product.image}" alt="Imagem do Produto" style="width: 50%; height: auto; margin-bottom: 20%;">
                <p style="margin-bottom: 10px; color: #666;"><strong>Descrição:</strong> ${product.description}</p>
                <p style="margin-bottom: 10px; color: #666;"><strong>Preço:</strong> R$ ${product.price}</p>   
                <a href="index.html" style="display: inline-block; padding: 10px 20px; background-color: #0000FF; color: white; text-decoration: none; border-radius: 4px;">Voltar</a>
            </div>
        `;

        productDetails.innerHTML = productHtml;
    })
    .catch(error => {
        console.error('Erro ao obter os detalhes do produto:', error);
    });
