import React, { useState, useEffect } from 'react';
import './NewProduct.css'
import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';
import Select from '../../components/form/Select';

function NewProduct() {


  const [categories, setCategories] = useState([]);

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

      <form>
        <Input
          type='text' text='Nome do Produto' name='name' placeholder='Insira o nome do produto'
        />

        <Input
          type='text' text='Descrição do Produto' name='name' placeholder='Insira a descrição do produto'
        />

        <Input
          type='number' text='Valor do Produto' name='name' placeholder='Insira o valor do produto, ex: 99.99'
        />

        <Input
          type='number' text='Quantidade do Produto' name='name' placeholder='Insira a quantidade de produto, ex: 99'
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