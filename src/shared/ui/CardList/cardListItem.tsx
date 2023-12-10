import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Typography } from 'antd'
import { CardListItem as CardListItemProps } from './types'

export const CardListItem: FC<CardListItemProps> = ({ name, description, id }) => {
  return <NavLink to={`${id}`}>
    <Card style={{ width: 300, height: '100%' }} hoverable>
      <Typography.Title level={3}>{name}</Typography.Title>
      <Typography.Title level={4}>{description}</Typography.Title>
    </Card>
  </NavLink>
}