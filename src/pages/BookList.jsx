import React from "react";
import axios from "axios";

export default function BookList() {
  const getBook = () => {
    axios.get("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
      //Pormisse que trata o sucesso da requisição
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  getBook();
  return <div>BookList</div>;
}
