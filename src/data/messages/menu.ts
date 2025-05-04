import { MessageKey } from "../../constants";
import type { Messages } from "../types";

export const menuMessages: Partial<Messages> = {
  [MessageKey.Start]: {
    text: "Olá! Eu sou o Furioso e sei tudo sobre o time de CS da FURIA!🔥",
    next: MessageKey.FirstOptions,
  },
  [MessageKey.FirstOptions]: {
    text: "Escolha o que você quer saber sobre a FURIA: 🎮🐺",
    options: [
      { text: "📅 Partidas", next: MessageKey.Games },
      { text: "🎮 Time", next: MessageKey.Team },
      { text: "🤔 Extras", next: MessageKey.Extras },
    ],
  },
  [MessageKey.Games]: {
    text: "Selecione uma opção:",
    options: [
      { text: "📅 Próximo jogo", next: MessageKey.NextGame },
      { text: "📈 Último jogo", next: MessageKey.LastGame },
      { text: "Voltar", next: MessageKey.FirstOptions },
    ],
  },
  [MessageKey.Team]: {
    text: "Selecione uma opção:",
    options: [
      { text: "👥 Jogadores", next: MessageKey.Players },
      { text: "🏆 Títulos", next: MessageKey.Titles },
      { text: "📜 História", next: MessageKey.History },
      { text: "Voltar", next: MessageKey.FirstOptions },
    ],
  },
  [MessageKey.Extras]: {
    text: "Selecione uma opção:",
    options: [
      { text: "💡 Curiosidades", next: MessageKey.FirstCuriosity },
      { text: "🧠 Quiz", next: MessageKey.FirstQuestion },
      { text: "Voltar", next: MessageKey.FirstOptions },
    ],
  },
};
