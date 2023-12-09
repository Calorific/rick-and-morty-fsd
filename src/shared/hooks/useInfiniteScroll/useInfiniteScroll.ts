import { useCallback, useEffect, useRef, useState } from 'react'
import { UseInfiniteScrollResult } from './types'

export const useInfiniteScroll = <T>(url: string, initialPage: number = 1): UseInfiniteScrollResult<T> => {
  const [pageNumber, setPageNumber] = useState<number>(initialPage)
  const [data, setData] = useState<T[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const isFetching = useRef<boolean>(false)

  useEffect(() => {
    if (isFetching.current || !hasMore) return
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        isFetching.current = true
        const response = await fetch(`${url}?page=${pageNumber}`)
        const newData = await response.json()
        isFetching.current = false
        setHasMore(newData.info.next !== null)
        setData(d => [...(d || []), ...newData.results])
        setLoading(false)
      } catch (e: unknown) {
        setError(e as Error)
        setLoading(false)
      }
    })()
  }, [url, pageNumber, hasMore])

  const observer = useRef<IntersectionObserver>()
  const loadTriggerNode = useCallback((node: HTMLElement) => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasMore)
        setPageNumber(prevState => prevState + 1)
    })

    if (node) {
      observer.current?.observe(node)
    }
  }, [loading, hasMore])

  return { data, loading, error, hasMore, loadTriggerNode }
}