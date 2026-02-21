
export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ashrafakib02')
    return response.json()
    }