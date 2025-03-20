interface MovieInfo {
  movieTitle: string;
  rating: number;
  category: string;
}


export const movies_information: { [key: string]: MovieInfo } = {
  // ! Drama
  '0': {
    movieTitle: 'The Shawshank Redemption',
    rating: 9.3,
    category: 'Drama'
  },

  '1': {
    movieTitle: 'Forrest Gump',
    rating: 8.8,
    category: 'Drama'
  },

  '2': {
    movieTitle: 'The Green Mile',
    rating: 8.6,
    category: 'Drama'
  },

  // ! Sci-Fi
  '3': {
    movieTitle: 'Interstellar',
    rating: 8.7,
    category: 'Sci-Fi'
  },

  '4': {
    movieTitle: 'Inception',
    rating: 8.8,
    category: 'Sci-Fi'
  },

  '5': {
    movieTitle: 'Blade Runner 2049',
    rating: 8.0,
    category: 'Sci-Fi'
  },

  // ! Fantasy
  '6': {
    movieTitle: "Pan's Labyrinth",
    rating: 8.2,
    category: 'Fantastic'
  },

  '7': {
    movieTitle: 'Stardust',
    rating: 7.6,
    category: 'Fantastic'
  },

  '8': {
    movieTitle: 'Willow',
    rating: 7.2,
    category: 'Fantastic'
  },

  // ! Thriller
  '9': {
    movieTitle: 'Se7en',
    rating: 8.6,
    category: 'Thriller'
  },

  '10': {
    movieTitle: 'Shutter Island',
    rating: 8.2,
    category: 'Thriller'
  },
  
  '11': {
    movieTitle: 'Gone Girl',
    rating: 8.1,
    category: 'Thriller'
  }
};
