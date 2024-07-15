import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './EditCategory.css';

import Input from "../../components/form/Input";
import SubmitButton from "../../components/form/SubmitButton";

function EditCategory() {

    const {categoryId} = useParams();
    const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://parseapi.back4app.com/parse/functions/get-category-id", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO",
        "X-Parse-REST-API-Key": "U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb",
      },
      body: JSON.stringify({
        categoryId: categoryId
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategory(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  const submit = (e) => {
    e.preventDefault();
    // console.log('nome categoria: ' + category)
    // createCategory()
  }

  function handleChange (e) {
    setCategory(e.target.value)
    // console.log('Valor Input: ' + category)
  }


  return (
    <main className='new_category'>
      
      <div className='title'>
        <h1>Editar Categoria</h1>
      </div>

      <form onSubmit={submit}>

        <Input
          type='text' text='Nome da Categoria' name='name' placeholder={category.name} value={category.name}
          handleOnChange={handleChange}
        />

        <SubmitButton text='Salvar'></SubmitButton>

      </form>

    </main>
  )
}

export default EditCategory