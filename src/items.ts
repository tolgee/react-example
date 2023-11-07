export const getInitialItems = () => {
  let items: string[] | undefined = undefined;
  try {
    items = JSON.parse(localStorage.getItem("tolgee-example-app-items") || "");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Something went wrong while parsing stored items. Items are reset."
    );
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("tolgee-example-app-items");
    }
  }
  return items?.length
    ? items
    : ["Passport", "Maps and directions", "Travel guide"];
};

export const updateLocalstorage = (items: string[]) => {
  localStorage.setItem("tolgee-example-app-items", JSON.stringify(items));
};
