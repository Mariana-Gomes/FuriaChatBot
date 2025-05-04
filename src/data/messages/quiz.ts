import { MessageKey } from "../../constants";
import type { Messages } from "../types";

export const quizMessages: Partial<Messages> = {
  [MessageKey.FirstQuestion]: {
    text: "Em que ano a FURIA foi fundada?",
    options: [
      { text: "2015", next: MessageKey.SecondQuestion },
      { text: "2017", next: MessageKey.SecondQuestion },
      { text: "2019", next: MessageKey.SecondQuestion },
    ],
    correctAnswer: "2017",
  },
  [MessageKey.SecondQuestion]: {
    text: "Qual é o animal que representa o símbolo da FURIA?",
    options: [
      { text: "Lobo", next: MessageKey.ThirdQuestion },
      { text: "Leão", next: MessageKey.ThirdQuestion },
      { text: "Pantera", next: MessageKey.ThirdQuestion },
    ],
    correctAnswer: "Pantera",
  },
  [MessageKey.ThirdQuestion]: {
    text: "Em qual campeonato a FURIA foi campeã vencendo o time Apeks por 3 a 1?",
    options: [
      { text: "Elisa Masters Espoo 2023", next: MessageKey.FourthQuestion },
      { text: "ESL Pro League Season 12", next: MessageKey.FourthQuestion },
      { text: "DreamHack Masters 2020", next: MessageKey.FourthQuestion },
    ],
    correctAnswer: "Elisa Masters Espoo 2023",
  },
  [MessageKey.FourthQuestion]: {
    text: "A FURIA chegou às semifinais de qual Major em 2022?",
    options: [
      { text: "PGL Stockholm", next: MessageKey.LastQuestion },
      { text: "PGL Antwerp", next: MessageKey.LastQuestion },
      { text: "IEM Rio", next: MessageKey.LastQuestion },
    ],
    correctAnswer: "IEM Rio",
  },
  [MessageKey.LastQuestion]: {
    text: "Quantos títulos internacionais de CS a FURIA conquistou até 2023?",
    options: [
      { text: "5", next: MessageKey.QuizEnd },
      { text: "7", next: MessageKey.QuizEnd },
      { text: "10", next: MessageKey.QuizEnd },
    ],
    correctAnswer: "7",
  },
  [MessageKey.QuizEnd]: {
    text: "Você chegou ao final do quiz! \nO que gostaria de fazer agora?",
    options: [
      { text: "Refazer Quiz", next: MessageKey.FirstQuestion },
      { text: "Voltar", next: MessageKey.Extras },
    ],
  },
};
