import { userMoviesPrompt } from '@/app/lib/prompts'

const omdbBaseUrl = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=`

export async function getMovieDetails(imdbId: string) {
  const response = await fetch(`${omdbBaseUrl}${imdbId}`)
  return response.json()
}

export async function getUserMoviesPrompt(userUrls: string[]) {
  if (!userUrls.length) return ''
  try {
    const promises = userUrls.map((url) => getMovieDetails(url))
    const movies = await Promise.all(promises)
    const stringifiedMovies = JSON.stringify(movies, null, 2)
    return userMoviesPrompt(stringifiedMovies)
  } catch (error) {
    console.error(error)
    return ''
  }
}
