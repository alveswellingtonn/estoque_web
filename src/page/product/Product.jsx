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

  // const getAllCountries = async () => {
  //   try {
  //     const res = await fetch('https://parseapi.back4app.com/classes/Product',
  //     {
  //       method: 'GET',
  //       headers: {
  //               'Content-Type': 'application/json',
  //               'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
  //               'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
  //             }
  //     }
  //     );

  //     if (!res.ok) throw new Error("Something went wrong!");

  //     const data = await res.json();

  //     console.log(data);

  //     setProducts(data);

  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // useEffect(() => {
  //   getAllCountries();
  // }, []);

  return (
    <div className='product'>

      <div className='container_product'>
        <h1>Produtos</h1>
      </div>

      <div className='table_product'>

        <table>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
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


        </tr>
      ))}
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