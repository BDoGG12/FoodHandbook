
export const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        return data.categories

    } catch (e) {
        console.log(e)
        throw e
    }
}

export const fetchRecipeByCategory = async (category: string) => {

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const fetchMealsByFirstLetter = async (letter: string) => {
    try {
        const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
        throw error
    }
}