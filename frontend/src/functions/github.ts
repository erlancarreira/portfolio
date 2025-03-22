export async function getReadME(repoUrl: string) {
    
    const repositorio = repoUrl.split("github.com")[1]
    
    const readmeUrl   = `https://raw.githubusercontent.com${repositorio}/main/README.md` 
    
    const response    = await fetch(readmeUrl)
    
    return response.text()
}