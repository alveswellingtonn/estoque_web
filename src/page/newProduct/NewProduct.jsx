import React, { useState, useEffect } from 'react';
import './NewProduct.css'
import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';
import Select from '../../components/form/Select';

function NewProduct() {

  const [nameProduct, setNameProduct] = useState([]);
  const [descriptionProduct, setDescriptionProduct] = useState([]);
  const [priceProduct, setPriceProduct] = useState([]);
  const [stockProduct, setStockProduct] = useState([]);

  const [categories, setCategories] = useState([]);

  function createProduct() {

    fetch('https://parseapi.back4app.com/parse/functions/create-product', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
          'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
        },
        body: JSON.stringify(
          {
            name: nameProduct,
            description: descriptionProduct,
            price: +priceProduct,
            stock: +stockProduct,
          }
        ),
      })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        // console.log('Nome produto é: ' + nameProduct)
        // console.log('Descricao: ' + descriptionProduct)
        // console.log('Preco: ' + priceProduct)
        // console.log('Quantidade: ' + stockProduct)
      })
      .catch((err) => console.log(err))
  }

  const submit = (e) => {
    e.preventDefault();
    // console.log('Produto é:' + nameProduct)
    // console.log('Descricao: ' + descriptionProduct)
    // console.log('Preco: ' + priceProduct)
    // console.log('Quantidade: ' + stockProduct)
    createProduct()
  }

  function handleName (e) {
    setNameProduct(e.target.value);
    // console.log('Valor Input nome: ' + nameProduct)
  }
  function handleDescription (e) {
    setDescriptionProduct(e.target.value);
    // console.log('Valor Input descricao: ' + descriptionProduct)
  }

  function handlePrice (e) {
    setPriceProduct(e.target.value);
    // console.log('Valor Input preco: ' + priceProduct)
  }

  function handleStock (e) {
    setStockProduct(e.target.value);
    // console.log('Valor Input stock: ' + stockProduct)
  }

  useEffect(() => {
    fetch('https://parseapi.back4app.com/parse/functions/get-category', {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
        'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
      }
    })
      .then((resp) => resp.json())
      .then(data => {
        setCategories(data.result)
        console.log(data.result)
      })
      .catch(err => console.log(err))
  }, []);


  return (
    <main className='new_product'>

      <div className='title_page'>
        <h1>Cadastrar Produto</h1>
      </div>

      <form onSubmit={submit}>
        <Input
          type='text' text='Nome do Produto' name='name' placeholder='Insira o nome do produto'
          handleOnChange={handleName}
        />

        <Input
          type='text' text='Descrição do Produto' name='name' placeholder='Insira a descrição do produto'
          handleOnChange={handleDescription}
        />

        <Input
          type='number' text='Valor do Produto' name='name' placeholder='Insira o valor do produto, ex: 99.99'
          handleOnChange={handlePrice}
        />

        <Input
          type='number' text='Quantidade do Produto' name='name' placeholder='Insira a quantidade de produto, ex: 99'
          handleOnChange={handleStock}
        />

        <Select name='category_id' text='Selecione a categoria' options= {categories}
          handleOnChange='{handleCategory}' value='{project.category}'
        ></Select>

        <SubmitButton text='Cadastrar'></SubmitButton>
      </form>

    </main>
  )
}

export default NewProduct