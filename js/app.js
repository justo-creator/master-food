const products = document.getElementById('products')

fetch('/json/datos.json')
  .then(response => response.json())
  .then(data => {
     data.forEach(product => {
        const productElement = document.createElement('article')
        productElement.classList.add('product')
        
        const imgItem = document.createElement('img')
        imgItem.src = product.image

        const titleItem = document.createElement('h4')
        titleItem.textContent = product.name

        //description
        const descriptionItem = document.createElement('p')
        descriptionItem.textContent = product.description

        const priceItem = document.createElement('span')
        priceItem.textContent = `$${product.price}`

        //add to cart button
        const addToCartButton = document.createElement('button')
        addToCartButton.textContent = 'Add to cart'
        addToCartButton.addEventListener('click', () => addToCart(product))



        productElement.appendChild(imgItem)
        productElement.appendChild(titleItem)
        productElement.appendChild(descriptionItem)
        productElement.appendChild(priceItem)
        productElement.appendChild(addToCartButton)
        products.appendChild(productElement)
     })
  })