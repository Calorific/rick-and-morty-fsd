import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Alert, Typography } from 'antd'
import { Episode } from '@/shared/api/methods/types'
import { CardList } from '@/shared/ui/CardList/cardList'
import { CardListItem } from '@/shared/ui/CardList/types'
import { ToggleSort } from '@/features/toggleSort/toggleSort'
import { sortItemsByDate } from '@/features/toggleSort/methods'
import { Order } from '@/features/toggleSort/types'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll'
import { Loader } from '@/shared/ui/Loader/loader'

export const EpisodesPage: FC = () => {
  const [searchParams] = useSearchParams()
  const { data, loading, error, hasMore, loadTriggerNode }
      = useInfiniteScroll<Episode>('https://rickandmortyapi.com/api/episode')
  const [episodes, setEpisodes] = useState<Episode[] | null>(null)
  
  useEffect(() => {
    if (!data) return
    const sorted = sortItemsByDate(data, searchParams.get('order') as Order || 'desc') as Episode[]
    setEpisodes(sorted)
  }, [data, searchParams])

  useEffect(() => {
    const order = searchParams.get('order') as Order || 'desc'
    setEpisodes(e => e ? sortItemsByDate(e, order) as Episode[] : e)
  }, [searchParams])
  
  const items: CardListItem[] | null = episodes
      ? episodes.map(c => ({ name: c.name, description: c.episode, id: c.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>
      Episodes <ToggleSort />
    </Typography.Title>
    <CardList triggerNodeRef={loadTriggerNode} triggerNodePosition={4} items={items} />
    {loading ? <div style={{ padding: 25, display: 'flex', justifyContent: 'center' }}><Loader /></div> : null}
    {!hasMore ? <Typography.Title level={4} style={{ textAlign: 'center'}}>All episodes were loaded</Typography.Title> : null}
    {error ? <Alert
        style={{ marginTop: 20, marginRight: 40, marginLeft: 40 }}
        message="Error"
        description={error.message}
        type="error"
        showIcon
    /> : null}
  </div>
}