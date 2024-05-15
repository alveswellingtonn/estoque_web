import React, { useState, useEffect } from 'react';
import './Product.css';

function Product() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://parseapi.back4app.com/parse/functions/get-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
        'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
      }
    })
      .then((resp) => resp.json())
      .then(data => {
        setProducts(data.result)
        console.log(data.result)
      })
      .catch(err => console.log(err))
  }, []);

  // deletar produto
  function deletarProduct(productId) {

    fetch(`https://parseapi.back4app.com/parse/functions/delete-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
        'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
      },
      body: JSON.stringify({
        productId: productId
      })
    })
    .then( resp => {
      console.log(resp)
      if(resp.ok) {
        console.log('produto excluido')
      }
      else {
        console.log('NAO REMOVIDO')
      }
    })
    .catch(error => console.log(error)) 
  }

  const remove = (e) => {
    e.preventDefault();
    deletarProduct(e.target.value)
  }

  return (
    <div className='product'>

      <div className='container_product'>
        <h1>Produtos</h1>
      </div>

      <div className='table_product'>

        <table>

          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>

          <tbody>
            {
              products.map((product) => (
                <tr key={product.objectId}>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    {product.description}
                  </td>
                  <td>
                    R$ {product.price}
                  </td>
                  <td>
                    {product.stock}
                  </td>
                  <td>
                  <button onClick={remove} value={product.objectId}> Deletar</button>
                  </td>
                </tr>
              ))}
          </tbody>
          
        </table>


      </div>

      {/* products.length > 0 && */}
      {/* {
      products.map((product) => (
        <div key={product.objectId}>

          <span>
            Nome : {product.name}
          </span>


        </div>
      ))} */}

      {/* {
        products.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )
      } */}

    </div>
  )
}

export default Product