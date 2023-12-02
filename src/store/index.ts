import { computed, signal } from "@preact/signals-react";
import { Library } from "../types/library";

const getLibraries = () => {
  const value = localStorage.getItem("LIBRARIES");
  return value ? JSON.parse(value) : [];
};

export const libraries = signal<Library[]>(getLibraries());

export const favoriteLibraryCount = computed(
  () => libraries.value.filter((library) => library.isFavorite).length
);
