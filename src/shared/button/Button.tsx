import css from "./Button.module.scss";
import cn from "classnames";
export const Button = ({ title, imageSrc, onClick }: Props) => {
  return (
    <button
      className={cn(css.btn, imageSrc && css.withImage)}
      onClick={onClick}
    >
      {!imageSrc && title}
      {imageSrc && <img src={imageSrc}></img>}
    </button>
  );
};

type Props = {
  title?: string;
  imageSrc?: string;
  onClick?: () => void;
};
