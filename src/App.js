import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";

export default function App() {
  const [term, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const bookTitle = encodeURIComponent(term.toLowerCase());
    const url = `https://openlibrary.org/search.json?q=${bookTitle}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [term]);

  return (
    <body>
      <Title label="Book Search" />
      <Entry action={setName} />
      <section>
        <Info name={term} data={data} />
      </section>
      <img
        src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
        alt="a stack of books"
      />
    </body>
  );
}
