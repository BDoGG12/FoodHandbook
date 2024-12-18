
export const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        return data.results

    } catch (e) {
        console.log(e)
        throw e
    }
}