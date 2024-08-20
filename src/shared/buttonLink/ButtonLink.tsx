import css from "./ButtonLink.module.scss";
export const ButtonLink = ({ title, to, target }: Props) => {
  return (
    <a
      href={to}
      className={css.linkButton}
      target={target ? "_blank" : "_self"}
    >
      {title}
    </a>
  );
};

type Props = {
  title?: string;
  imageSrc?: string;
  to: string;
  target?: boolean;
};
