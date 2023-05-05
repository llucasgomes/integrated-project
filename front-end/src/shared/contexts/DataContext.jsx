// 1 - criar contexto
import { createContext, useEffect, useState } from "react";
import { API } from "../services/api";

export const DataContext = createContext();

// 2 - criar provider

export const DataContextProvider = ({ children }) => {
  //armazenar dados de retorno da API
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [profile, setProfile] = useState([]);
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  //LISTAR  - GETS ==============================================
  //GET SKILLS
  useEffect(() => {
    //conexao com a API
    API.get("/skills")
      .then((response) => setSkills(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [skills]);

  //GET EDUCATION
  useEffect(() => {
    //conexao com a API
    API.get("/education")
      .then((response) => setEducation(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [education]);

  //GET PROJECTS
  useEffect(() => {
    //conexao com a API
    API.get("/projects")
      .then((response) => setProjects(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [projects]);

  //GET EXPERIENCE
  useEffect(() => {
    //conexao com a API
    API.get("/experience")
      .then((response) => setExperience(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [experience]);

  //GET PROFILE
  useEffect(() => {
    //conexao com a API
    API.get("/profile")
      .then((response) => setProfile(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [profile]);

  //GET COMMENTS
  useEffect(() => {
    //conexao com a API
    API.get("/comments")
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [comments]);

  return (
    <DataContext.Provider
      value={{ skills, education, projects, profile, experience, isFetching }}
    >
      {children}
    </DataContext.Provider>
  );
};
