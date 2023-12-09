export interface UseInfiniteScrollResult<T> {
  data: T[] | null
  loading: boolean
  error: Error | null
  hasMore: boolean
  loadTriggerNode: (node: HTMLElement) => void
}