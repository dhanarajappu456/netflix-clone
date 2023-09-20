const movies = [
  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },
  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",

    
  },
  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",

    
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",

    
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",

    
  },

  {
    title: "Dune",
    imgLand: "https://media.vanityfair.com/photos/612e7962cb26604af2bccc97/16:9/w_1999,h_1124,c_limit/dune-film-still-01.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. Directed by Denis Villeneuve and based on the novel by Frank Herbert.",
  },
  {
    title: "The Suicide Squad",
    imgLand: "https://media.npr.org/assets/img/2016/08/02/ss-26944r_wide-7c2209bdb9e1a60b071d8c176598a46915a53fb5-s1100-c50.jpg",
    imgPort: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    desc: "Supervillains Harley Quinn, Bloodsport",

    
  },




  



  
]

export default movies