import React from 'react';
import './NewCategory.css';

import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';

function NewCategory() {
  return (
    <main className='new_category'>
      
      <div className='title'>
        <h1>Cadastrar Categoria</h1>
      </div>

      <form>

        <Input
          type='text' text='Nome da Categoria' name='name' placeholder='Insira o nome da categoria'
        />

        <SubmitButton text='Cadastrar'></SubmitButton>

      </form>

    </main>
  )
}

export default NewCategory