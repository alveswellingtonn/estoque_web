import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './EditProduct.css';

import Input from "../../components/form/Input";
import SubmitButton from "../../components/form/SubmitButton";

function EditProduct() {

    const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://parseapi.back4app.com/parse/functions/get-product-id", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO",
        "X-Parse-REST-API-Key": "U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  }, [productId]);

    const submit = (e) => {
        e.preventDefault();
        // console.log('nome categoria: ' + category)
        //updateCategory()
      };
    
      function handleChange(e) {
        //setCategory(e.target.value);
        // console.log('Valor Input: ' + category)
      }

  return (
    <main className="new_category">
      <div className="title">
        <h1>Editar Categoria</h1>
      </div>

      <form onSubmit={submit}>
        <Input
          type="text"
          text="Nome da Categoria"
          name="name"
          placeholder={product.name}
          value={product.name}
          handleOnChange={handleChange}
        />

        <SubmitButton text="Salvar"></SubmitButton>
      </form>
    </main>
  )
}

export default EditProduct