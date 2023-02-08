import React, { FC, createContext } from "react";

const Tarefa = createContext({
  nomeTarefa: true,
});

export const TarefaProvider: React.FC = ({ children }: any) => {
  return (
    <Tarefa.Provider value={{ nomeTarefa: true }}>{children}</Tarefa.Provider>
  );
};
