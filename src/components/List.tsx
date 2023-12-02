import { libraries } from "../store";
import { Library } from "../types/library";

export default function LibraryList() {
  const toggleFavorite = (selectedLibrary: Library) => {
    libraries.value = libraries.value.map((library) => {
      if (library.id === selectedLibrary.id) {
        library.isFavorite = !library.isFavorite;
      }

      return library;
    });
  };

  const deleteLibrary = (selectedLibrary: Library) => {
    libraries.value = libraries.value.filter(
      (library) => library.id !== selectedLibrary.id
    );
  };
  return (
    <ul>
      {libraries.value.map((library) => (
        <li key={library.id}>
          {library.icon && <img src={library.icon} />}
          <h5>{library.title}</h5>
          <p>{library.description}</p>
          <button
            onClick={() => {
              toggleFavorite(library);
            }}
          >
            {library.isFavorite ? <span>&#x2605;</span> : <span>&#x2606;</span>}
          </button>
          <button onClick={() => deleteLibrary(library)}>Effacer</button>
        </li>
      ))}
    </ul>
  );
}
