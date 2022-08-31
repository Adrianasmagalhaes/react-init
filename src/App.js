import Book from "./components/Book";

function App() {
  const livros = [
    {
      id: "1",
      title: "1889",
    },
    {
      id: "2",
      title: "A arte da guerra",
    },
    {
      id: "3",
      title: "A garota do lago",
    },
    { id: "4",
      title: "Moby Dick" },
  ];

  return (
    <div>
      <h3>Livros</h3>

      <div>
        {livros.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} />
        ))}
        {/* <Book title="1889 " />
        <Book title="A arte da guerra " />
        <Book title="A garota do lago " />
        <Book title="Moby Dick" /> */}
      </div>
    </div>
  );
}

export default App;
