const mainPrompt = `
  return the best movie recommendation out of the movies list based on the user Description.

  **movies List:**
    1. The Silence of the Lambs
    2. Pulp Fiction
    3. The Shawshank Redemption
    4. Inception
    5. Jurassic Park
    6. The Lord of the Rings: The Fellowship of the Ring 
    7. Fight Club
    8. Titanic
    9. The Matrix
    10. Forrest Gump
  `

const defaultPrompt =
  'You are a friendly assistant! Keep your responses informative and helpful.'

export const userMoviesPrompt = (moviesData: string) =>
  `In addition to the movies list, you can also provide recommendations based on the following movies data:\n\n${moviesData}`

export const getPrompt = (userMoviesPrompt: string) =>
  `${defaultPrompt}\n\n${mainPrompt}.\n\n${userMoviesPrompt}`
