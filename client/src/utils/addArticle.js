const addArticle = (str) => {
  if (!str) {
    return ""
  }

  const firstLetter = str.charAt(0).toLowerCase()
  const vowels = ["a", "e", "i", "o", "u"]
  const article = vowels.includes(firstLetter) ? "an" : "a"

  return `${article} ${str}`
}

export default addArticle
