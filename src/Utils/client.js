import { API_READ_ACCESS_TOKEN } from "../components/constance/api-constants";

export async function client(url, options = {}) {
    const fetchOptions = {
        method: 'GET',
        ...options,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
            ...(options.headers ?? {})
        }
    }

    const response = await fetch(url, fetchOptions)
    const data = await response.json()
    if (!response.ok) {
        throw data
    }
    return data
}