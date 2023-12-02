export const fetchData = (data: string) => {
  const html = document.createElement("html");
  html.innerHTML = data;
  const title = html.querySelector("title")?.text ?? "";
  const description =
    html.querySelector("meta[name='description']")?.getAttribute("content") ??
    "";
  const tags =
    html.querySelector("meta[name='keywords']")?.getAttribute("content") ?? "";
  const icon =
    html.querySelector("link[rel='icon']")?.getAttribute("href") ?? "";

  return { title, description, tags, icon };
};
