import { MessageKey } from "../../constants";
import type { Messages } from "../types";

export const gameMessages: Partial<Messages> = {
  [MessageKey.Titles]: {
    text: "🏆 FURIA - Principais Títulos Recentes:\n\n- Campeã do Elisa Masters Espoo 2023 🥇\n- 3º lugar no IEM Rio Major 2022 🇧🇷🔥\n- Campeã do Elisa Invitational Summer 2021 🏅\n- Campeã da ESL Pro League S12 NA em 2020 💥\n- Campeã da DreamHack Masters Spring 2020 🚀\n\n🐺 FURIA sempre representando no cenário mundial!",
    options: [{ text: "Voltar", next: MessageKey.Team }],
  },
  [MessageKey.History]: {
    text: "A FURIA Esports nasceu em 2017, com o sonho de levar o Counter-Strike brasileiro ao topo do mundo. \n\n🐺 O time ganhou destaque rapidamente com seu estilo de jogo agressivo e criativo, conquistando fãs no mundo inteiro. \n\n🌎 Entre 2019 e 2023, a FURIA consolidou seu nome, vencendo torneios importantes, como a ESL Pro League e o Elisa Masters Espoo, além de fazer história com a incrível campanha no IEM Rio Major 2022, terminando entre os quatro melhores do mundo em casa! 🇧🇷🔥 \n\nHoje, a FURIA é reconhecida como uma das maiores potências do CS mundial, levando a garra brasileira para cada campeonato. 🎯",
    options: [{ text: "Voltar", next: MessageKey.Team }],
  },
  nextGame: {
    text: "Próximo jogo\n\n📅 Dia: 07/05/2025\n🕗 Horário: 20:30\n⚔️ Adversário: FURIA x Liquid\n🏆 Campeonato: FiReLEAGUE\n📺 Transmissão: twitch.tv/furiatv\n",
    options: [{ text: "Voltar", next: MessageKey.Games }],
  },
  lastGame: {
    text: "⚠️ Tópico sensível 😔\n\n❌ Placar: FURIA 0 x 2 The Mongolz\n🗺️ Mapas jogados: Mirage e Nuke\n⭐ MVP da partida: Ayush 'mzinho' Batbold\n📺 Transmissão: twitch.tv/furiatv\n",
    options: [{ text: "Voltar", next: MessageKey.Games }],
  },
};
