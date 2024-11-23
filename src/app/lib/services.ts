import { userMoviesPrompt } from '@/app/lib/prompts'

const omdbBaseUrl = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=`

type Movie = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export async function getMovieDetails(imdbId: string) {
  const response = await fetch(`${omdbBaseUrl}${imdbId}`)
  return response.json()
}

export async function getUserMoviesPrompt(userUrls: string[]) {
  if (!userUrls.length) return ''
  try {
    const promises = userUrls.map((url) => getMovieDetails(url))
    const movies: Movie[] = await Promise.all(promises)
    // policy: flter out R and X rated movies
    const safeMovies = movies.filter(
      (movie) => !['R', 'X'].includes(movie.Rated)
    )
    const stringifiedMovies = JSON.stringify(safeMovies, null, 2)
    return userMoviesPrompt(stringifiedMovies)
  } catch (error) {
    console.error(error)
    return ''
  }
}
