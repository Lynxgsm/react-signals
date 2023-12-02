import AddLibraryForm from "./components/Form";
import LibraryList from "./components/List";
import { favoriteLibraryCount } from "./store";

export default function App() {
  return (
    <main>
      <nav>
        Favorite Libraries Count : <span>{favoriteLibraryCount}</span>
      </nav>
      <AddLibraryForm />
      <LibraryList />
    </main>
  );
}
