import fortnite from "./Img/images/fortnite.jpg";
import lol from "./Img/images/lol.jpg";
import pubg from "./Img/images/pubg.jpg";
import tacticforce from "./Img/images/tacticforce.jpg";
import wow from "./Img/images/wow.jpg";

export const slides = [
  {
    imgUrl: fortnite,
    isActive: true,
    name: "Fortnite",
    discount: "15",
    price: "100",
    isBonus: true,
    comingSoon: true
  },
  {
    imgUrl: lol,
    name: "League of Legends",
    discount: "20",
    price: "100",
    isBonus: false,
    comingSoon: false
  },
  {
    imgUrl: pubg,
    name: "PlayerUnknown's BattleGrounds",
    discount: "15",
    price: "100",
    isBonus: false,
    comingSoon: true
  },
  {
    imgUrl: tacticforce,
    name: "Tactic Force",
    discount: "15",
    price: "100",
    isBonus: true,
    comingSoon: false
  },
  {
    imgUrl: wow,
    name: "World of Warcraft",
    discount: "15",
    price: "100",
    isBonus: true,
    comingSoon: true
  }
];
