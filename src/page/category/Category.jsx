import React, { useState, useEffect } from 'react';
import './Category.css';

function Category() {

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
    <div className='category'>

      <div className='container_category'>
        <h1>Categorias</h1>
      </div>

      <div className="table_category">

        <table>
          <tr>
            <th>Categoria</th>
          </tr>
          {
            categories.map((category) => (
              <tr key={category.objectId}>
                <td>
                  {category.name}
                </td>
              </tr>
            ))
          }
        </table>

      </div>

    </div>
  )
}

export default Category