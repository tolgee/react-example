import { FormEvent, useState } from "react";
import { Navbar } from "./components/Navbar";
import { getInitialItems, updateLocalstorage } from "./items";
import { useTranslate } from "@tolgee/react";

export const Todos = () => {
  const [newItemValue, setNewItemValue] = useState("");
  const [items, setItems] = useState<string[]>(getInitialItems());
  const { t } = useTranslate();

  const onAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItems = [...items, newItemValue];
    setItems(newItems);
    updateLocalstorage(newItems);
    setNewItemValue("");
  };

  const onDelete = (index: number) => () => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    updateLocalstorage(newItems);
  };

  const onAction = (action: string) => () => {
    alert("action: " + action);
  };

  return (
    <div className="background-wrapper">
      <div className="example">
        <Navbar />
        <header>
          <img src="/img/appLogo.svg" />
          <h1 className="header__title">{t("app-title")}</h1>
        </header>
        <section className="items">
          <form className="items__new-item" onSubmit={onAdd}>
            <input
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
              placeholder={t("item-placeholder")}
            />
            <button type="submit" disabled={!newItemValue} className="button">
              <img src="/img/iconAdd.svg" />
              {t("item-add")}
            </button>
          </form>
          <div className="items__list">
            {items.map((item, i) => (
              <div key={i} className="item">
                <div className="item__text">{item}</div>
                <button onClick={onDelete(i)}>{t("item-remove")}</button>
              </div>
            ))}
          </div>
          <div className="items__buttons">
            <button className="button" onClick={onAction("share")}>
              <img src="/img/iconShare.svg" />
              {t("share-button")}
            </button>
            <button className="button" onClick={onAction("email")}>
              <img src="/img/iconMail.svg" />
              {t("email-button")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
