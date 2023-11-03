import React from 'react';
import './NewProduct.css'
import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';
import Select from '../../components/form/Select';

function NewProduct() {
  return (
    <main className='new_product'>

      <div className='title_page'>
        <h1>Cadastrar Produto</h1>
      </div>

      <form className='form'>
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

        <Select name='category_id' text='Selecione a categoria' options='cateogories {categories}'
          handleOnChange='{handleCategory}' value='{project.category}'
        ></Select>

        <SubmitButton text='Cadastrar'></SubmitButton>
      </form>

    </main>
  )
}

export default NewProduct