import { MessageKey } from "../../constants";
import type { Messages } from "../types";

export const playersMessages: Partial<Messages> = {
  [MessageKey.Players]: {
    text: "Selecione uma opção:",
    options: [
      { text: "yuurih", next: MessageKey.FirstPlayer },
      { text: "KSCERATO", next: MessageKey.SecondPlayer },
      { text: "molodoy", next: MessageKey.ThirdPlayer },
      { text: "YEKINDAR", next: MessageKey.FourthPlayer },
      { text: "FalleN", next: MessageKey.FifthPlayer },
      { text: "sidde", next: MessageKey.Coach },
    ],
  },
  [MessageKey.FirstPlayer]: {
    text: "\n🧑 Nome: Yuri Santos\n🎮 Nickname: yuurih\n🌍 Nacionalidade: Brasileiro\n🎂 Nascimento: 22/12/99\n📆 Idade: 25 anos\n🎯 Função: Rifler",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
  [MessageKey.SecondPlayer]: {
    text: "\n🧑 Nome: Kaike Cerato\n🎮 Nickname: KSCERATO\n🌍 Nacionalidade: Brasileiro\n🎂 Nascimento:12/09/99\n📆 Idade: 25 anos\n🎯 Função: Rifler (lurker)",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
  [MessageKey.ThirdPlayer]: {
    text: "\n🧑 Nome: Danil Golubenko\n🎮 Nickname: molodoy\n🌍 Nacionalidade: Cazaquistanês\n🎂 Nascimento: 10/01/05\n📆 Idade: 20 anos\n🎯 Função: AWPer",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
  [MessageKey.FourthPlayer]: {
    text: "\n🧑 Nome: Mareks Gaļinskis\n🎮 Nickname: YEKINDAR\n🌍 Nacionalidade: Letão\n🎂 Nascimento: 04/10/99\n📆 Idade: 25 anos\n🎯 Função: Rifler (entry fragger)",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
  [MessageKey.FifthPlayer]: {
    text: "\n🧑 Nome: Gabriel Toledo\n🎮 Nickname: FalleN\n🌍 Nacionalidade: Brasileiro\n🎂 Nascimento: 30/05/91\n📆 Idade: 33 anos\n🎯 Função: AWPer e IGL",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
  [MessageKey.Coach]: {
    text: "\n🧑 Nome: Sid Macedo\n🎮 Nickname: sidde\n🌍 Nacionalidade: Brasileiro\n🎂 Nascimento: 06/02/97\n📆 Idade: 28 anos\n🎯 Função: Coach",
    image:
      "https://img-cdn.hltv.org/playerbodyshot/q2PQMwyNdB4qAuRN9mEWl0.png?ixlib=java-2.1.0&w=400&s=456ffc5a425a22d8711a9b32c7789af0",
    options: [
      { text: "Outro player", next: MessageKey.Players },
      { text: "Voltar", next: MessageKey.Team },
    ],
  },
};
