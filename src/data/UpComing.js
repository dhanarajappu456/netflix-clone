const movies = 
[
    {
      title: "Avatar 2",
      imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
      imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
      desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
    },
    {
      title: "The Flash",
      imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
      imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
      desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
    },
    {
      title: "John Wick: Chapter 4",
      imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
      imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
      desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
    },
    {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
  
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
  
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
      {
        title: "Avatar 2",
        imgLand: "https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        desc: "A sequel to James Cameron's 2009 film 'Avatar'. The plot is kept under wraps but is expected to explore the oceans of Pandora and continue the story of Jake Sully and Neytiri."
      },
      {
        title: "The Flash",
        imgLand: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-ezra-miller-michael-keaton-sasha-calle.jpg",
        imgPort: "https://m.media-amazon.com/images/M/MV5BN2MxODY1ZTAtZDc2OS00YjhkLWFlYTgtMjY3ZWYxYzk0OWFiXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
        desc: "The DC Extended Universe version of Flash, Barry Allen, navigates the multiverse, encountering different versions of DC's heroes. Directed by Andy Muschietti."
      },
      {
        title: "John Wick: Chapter 4",
        imgLand: "https://m.media-amazon.com/images/JohnWick4/Landscape.jpg",
        imgPort: "https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg",
        desc: "The continuation of the John Wick saga with Keanu Reeves reprising his role as the titular assassin."
      },
    
  
];


export default movies;