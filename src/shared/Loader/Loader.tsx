import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.loader}></div>
    </div>
  );
}
