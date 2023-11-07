import React, {useState,} from 'react';
import './NewCategory.css';

import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';

function NewCategory() {

  const [category, setCategory] = useState([]);

  function createCategory() {
  
      fetch('https://parseapi.back4app.com/parse/functions/create-category', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-Parse-Application-Id': 'G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO',
          'X-Parse-REST-API-Key': 'U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb',
        },
        body: JSON.stringify(
          {name: category}
        ),
      })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        // console.log('categoria: ' + category)
      })
      .catch((err) => console.log(err))
  }

  const submit = (e) => {
    e.preventDefault();
    // console.log('nome categoria: ' + category)
    createCategory()
  }

  function handleChange (e) {
    setCategory(e.target.value)
    // console.log('Valor Input: ' + category)
  }

  return (
    <main className='new_category'>
      
      <div className='title'>
        <h1>Cadastrar Categoria</h1>
      </div>

      <form onSubmit={submit}>

        <Input
          type='text' text='Nome da Categoria' name='name' placeholder='Insira o nome da categoria'
          handleOnChange={handleChange}
        />

        <SubmitButton text='Cadastrar'></SubmitButton>

      </form>

    </main>
  )
}

export default NewCategory