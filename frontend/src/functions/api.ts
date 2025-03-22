const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
    
    const response = await fetch(normalizeURL(`${baseURL}/${url}`))
    
    return response.json()

}

function normalizeURL(url: string
): string {
    const urlSplit = url.split('://')
    const protocol = urlSplit[0]
    const base     = urlSplit[1]

    return `${protocol}://${base.replaceAll(/\/{2,}/g, '/')}`
}