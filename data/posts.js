import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://img.search.brave.com/OxtiNyud0I7LP2KUTfl7-GwiWCsSLSD8vW8ZqVndiIw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQ2UwbEFuOEZy/TTAvWHVPRjhQeEtY/aEkvQUFBQUFBQUFR/UzAvdlhiTEJqY1A5/MVVMOGxoSVBkRXl2/ZGcwc2VkTXY2OFF3/Q0xjQkdBc1lIUS9z/MTYwMC9FYVNiM2g1/VXdBSTdEcGcuanBl/Zw",
    user: USERS[0].user,
    likes: 263,
    caption: "These bitches could NEVER! And if they ever thought they could, they better think again. Nicki for president 2024. I will stop Russia! #iamthequeen",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: USERS[1].user,
        comment: "How lovely! I wish I were as beautiful as you.",
      },
      {
        user: USERS[3].user,
        comment: "Wow, you have outdone yourself. 10/10 #incredible",
      },
    ],
  },
  {
    imageUrl:
      "https://img.search.brave.com/FdjAepgaURouRBT8-yZkO1RYKisQFJQpZkuQx46IcZc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/c2VsZW5hZ29tZXov/aW1hZ2VzL2MvYzQv/U3RhcnNfRGFuY2Vf/U3RhbmRhcmQuanBn/L3JldmlzaW9uL2xh/dGVzdD9jYj0yMDE2/MDUxMDE5NDcxNQ",
    user: USERS[3].user,
    likes: 7803,
    caption: "Justin is gonna hate this one...",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "I can't wait for the new music, it's been too long queen!",
      },
      {
        user: USERS[6].user,
        comment: "When is this dropping sis?!",
      },
    ],
  },
  {
    imageUrl:
      "https://img.search.brave.com/H_8xONAOSgs3FbAtsWZMGxu0SCDi2sMNjEtejwloIps/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NlL2Vm/LzE5L2NlZWYxOWJm/YzgxMzk3MTlmMWU3/MmM3ZDAzNTVlZTJk/LmpwZw",
    user: USERS[2].user,
    likes: 745,
    caption: "Felt cute might delete later :P",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: USERS[4].user,
        comment: "The beat is ON POINT girl who's your artist?",
      },
    ],
  },
];
