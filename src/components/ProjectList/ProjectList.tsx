import { useEffect, useState } from "react";
import { useGetRepositoriesQuery } from "../../feature/api/services/content";
import css from "./ProjectList.module.scss";
import cn from "classnames";
import Loader from "../../shared/Loader/Loader";
import { Button } from "../../shared/button/Button";
import { ButtonLink } from "../../shared/buttonLink/ButtonLink";
import { CheckBox } from "../../shared/checkbox/Checkbox";

const ProjectList = () => {
  const [language, setLanguage] = useState<string>("JavaScript");
  const [sortType, setSortType] = useState(false);

  const [params, setParams] = useState<ParamsProps>({
    language: language,
    sort: "stars",
    order: "desc",
  });
  const {
    currentData: projects,
    isLoading,
    isError,
  } = useGetRepositoriesQuery(JSON.stringify(params));

  const changeLanguageAction = () => {
    setLanguage((prev) =>
      prev === "JavaScript" ? "TypeScript" : "JavaScript"
    );
  };

  const [items, setItems] = useState<ProjectProps[] | null>(null);

  const changeOrderAction = () => {
    setSortType((prev) => !prev);
  };

  useEffect(() => {
    if (projects) {
      const data = projects.items as ProjectProps[];
      setItems(data);
    }
  }, [isLoading, projects]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, language: language }));
  }, [language]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        <div>Ошибка получения данных. Проверьте соединение с интернетом.</div>
      </>
    );
  }

  return (
    <div className={css.listWrapper}>
      <h1>Популярные {language} проекты</h1>
      <div className={css.controlMenu}>
        <Button onClick={changeLanguageAction} title="Сменить язык" />
        <CheckBox
          onChange={changeOrderAction}
          checked={sortType}
          id="sort"
          description={`Изменить порядок сортировки`}
        />
      </div>
      <ul className={cn(css.list, sortType && css.reverse)}>
        {items?.map((project: ProjectProps) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className={css.card}>
      <div className={css.cardInside}>
        <span>Имя: {project.name}</span>
        <div>Количество звезд: {project.stargazers_count}</div>
        <p>{project.description}</p>
      </div>
      <ButtonLink to={project.html_url} title="Перейти в репозиторий" target />
    </li>
  );
};

type ProjectCardProps = {
  project: ProjectProps;
};

type ParamsProps = {
  language: string;
  sort: string;
  order: string;
};
interface ProjectProps {
  [key: string]: string | number;
  id: keyof ProjectProps;
  html_url: string;
}

export default ProjectList;
