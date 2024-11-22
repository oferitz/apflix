export const mainPrompt = `
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

export const defaultPrompt =
  'You are a friendly assistant! Keep your responses informative and helpful.'

export const systemPrompt = `${defaultPrompt}\n\n${mainPrompt}`
