import { Order, Sortable } from './types'

export const sortItemsByDate = (items: Sortable[], order: Order): Sortable[] => {
  const orderConstant = order === 'asc' ? 1 : -1
  return items.toSorted((a, b) => a.created.localeCompare(b.created) * orderConstant)
}