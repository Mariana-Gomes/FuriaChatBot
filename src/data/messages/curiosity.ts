import { MessageKey } from "../../constants";
import type { Messages } from "../types";

export const curiosityMessages: Partial<Messages> = {
  [MessageKey.FirstCuriosity]: {
    text: "A FURIA conquistou seu primeiro título internacional em 2019, no Arctic Invitational, na Finlândia 🏆",
    options: [
      { text: "Próxima", next: MessageKey.SecondCuriosity },
      { text: "Voltar", next: MessageKey.Extras },
    ],
  },
  [MessageKey.SecondCuriosity]: {
    text: "A FURIA tem sede em Miami, nos EUA — uma estrutura moderna com gaming house e centro de treinamento 🎮",
    options: [
      { text: "Próxima", next: MessageKey.ThirdCuriosity },
      { text: "Voltar", next: MessageKey.Extras },
    ],
  },
  [MessageKey.ThirdCuriosity]: {
    text: "A FURIA é uma das poucas organizações brasileiras que investe fortemente em desenvolvimento de base, com times Academy e projetos de formação de novos talentos 🫶",
    options: [
      { text: "Próxima", next: MessageKey.FourthCuriosity },
      { text: "Voltar", next: MessageKey.Extras },
    ],
  },
  [MessageKey.FourthCuriosity]: {
    text: "A FURIA ficou marcada no IEM Rio Major 2022 como o primeiro time brasileiro a alcançar as semifinais de um Major jogado no Brasil 🎖️",
    options: [
      { text: "Próxima", next: MessageKey.FifthCuriosity },
      { text: "Voltar", next: MessageKey.Extras },
    ],
  },
  [MessageKey.FifthCuriosity]: {
    text: "A FURIA Esports foi fundada em 2017 por Jaime Pádua e André Akkari 🐺",
    options: [{ text: "Voltar", next: MessageKey.Extras }],
  },
};
