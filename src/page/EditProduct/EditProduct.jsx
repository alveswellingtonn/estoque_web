import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./EditProduct.css";

import Input from "../../components/form/Input";
import SubmitButton from "../../components/form/SubmitButton";
import Select from "../../components/form/Select";

function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [priceProduct, setPriceProduct] = useState([]);
  const [stockProduct, setStockProduct] = useState([]);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategory] = useState('');

  useEffect(() => {
    fetch("https://parseapi.back4app.com/parse/functions/get-category", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO",
        "X-Parse-REST-API-Key": "U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  }, []);

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
        setProduct(data.result.name);
        setDescriptionProduct(data.result.description);
        setPriceProduct(data.result.price);
        setStockProduct(data.result.stock);
        setCategory(data.result.category);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  const submit = (e) => {
    e.preventDefault();
    // console.log('nome categoria: ' + category)
    //updateCategory()
  };

  function handleName(e) {
    setProduct(e.target.value);
    // console.log('Valor Input: ' + category)
  }

  function handleDescription(e) {
    setDescriptionProduct(e.target.value);
    // console.log('Valor Input descricao: ' + descriptionProduct)
  }

  function handlePrice(e) {
    setPriceProduct(e.target.value);
    // console.log('Valor Input preco: ' + priceProduct)
  }

  function handleStock(e) {
    setStockProduct(e.target.value);
    // console.log('Valor Input stock: ' + stockProduct)
  }

  function handleCategory(e) {
    setCategory(e.target.value);
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
          placeholder={product}
          value={product}
          handleOnChange={handleName}
        />

        <Input
          type="text"
          text="Descrição do Produto"
          name="name"
          placeholder="Insira a descrição do produto"
          value={descriptionProduct}
          handleOnChange={handleDescription}
        />

        <Input
          type="number"
          text="Valor do Produto"
          name="name"
          placeholder="Insira o valor do produto, ex: 99.99"
          value={priceProduct}
          handleOnChange={handlePrice}
        />

        <Input
          type="number"
          text="Quantidade do Produto"
          name="name"
          placeholder="Insira a quantidade de produto, ex: 99"
          value={stockProduct}
          handleOnChange={handleStock}
        />

        <Select
          name="product_id"
          text="Selecione uma categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={categoryId}
        />
        
        <SubmitButton text="Salvar"></SubmitButton>
      </form>
    </main>
  );
}

export default EditProduct;
