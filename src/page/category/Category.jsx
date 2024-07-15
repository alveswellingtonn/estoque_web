import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function Category() {
  const [categories, setCategories] = useState([]);

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

  // deletar categoria
  function deletarCategory(categoryId) {
    fetch(`https://parseapi.back4app.com/parse/functions/delete-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": "G5UQZkgY9ppEKKiXdjzAmNZQMsMJZeZyHX9qSaqO",
        "X-Parse-REST-API-Key": "U3KlIUQrP7bHZEFOzaV65Jxcgd0nesPdC4K6pjhb",
      },
      body: JSON.stringify({
        categoryId: categoryId,
      }),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.ok) {
          console.log("categoria excluida");
        } else {
          console.log("NAO REMOVIDO");
        }
      })
      .catch((error) => console.log(error));
  }

  const remove = (e) => {
    e.preventDefault();
    deletarCategory(e.target.value);
  };

  return (
    <div className="category">
      <div className="container_category">
        <h1>Categorias</h1>
      </div>

      <div className="table_category">
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category.objectId}>
                <td>{category.name}</td>
                <td>
                  <button onClick={remove} value={category.objectId}>
                    Deletar
                  </button>

                  <Link
                    to={`/edit-category/${category.objectId}`}
                    className="link"
                  >
                    <button>Editar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
