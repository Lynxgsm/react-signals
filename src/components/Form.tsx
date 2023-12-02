import { FormEvent } from "react";
import { fetchData } from "../services/fetchData";
import { libraries } from "../store";
import { effect } from "@preact/signals-react";

export default function AddLibraryForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get("url") as string;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.text();
      const html = fetchData(data);

      const library = {
        ...html,
        id: libraries.value.length,
        isFavorite: false,
      };

      libraries.value = [...libraries.value, library];
    }

    e.currentTarget.reset();
  };

  effect(() => {
    localStorage.setItem("LIBRARIES", JSON.stringify(libraries.value));
  });

  return (
    <form onSubmit={handleSubmit}>
      <input name="url" />
      <button>Ajouter</button>
    </form>
  );
}
