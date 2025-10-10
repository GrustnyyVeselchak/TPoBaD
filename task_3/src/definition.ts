export interface Props {
    query: string
    setQuery: (value: string) => void
    onSearch: (query: string, signal?: AbortSignal) => Promise<string[]>
}

export interface State {
    query: string
    results: string[]
    loading: boolean
    error: string | null
}