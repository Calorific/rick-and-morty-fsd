import { Ref } from 'react'

export interface CardListItem {
  id: string
  name: string
  description: string
}

export interface CardListProps {
  items: CardListItem[] | null
  triggerNodeRef?: Ref<HTMLElement>
  triggerNodePosition?: number
}