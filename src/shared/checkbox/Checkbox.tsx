import css from "./Checkbox.module.scss";

export const CheckBox = ({ checked, id, description, onChange }: Props) => {
  const isDifinedValue = typeof checked === "undefined" ? false : checked;
  return (
    <div className={css.checkbox}>
      <input
        className={css.checkbox__input}
        type="checkbox"
        checked={isDifinedValue}
        id={id}
        onChange={onChange}
      />
      <label className={css.checkbox__label} htmlFor={id}>
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 6.5L7 12.5L18 1.5" stroke="white" strokeWidth="2" />
        </svg>
      </label>
      {description && (
        <span className={css.checkbox__description}>{description}</span>
      )}
    </div>
  );
};

type Props = {
  checked: boolean;
  id: string;
  onChange: () => void;
  description?: string;
};
