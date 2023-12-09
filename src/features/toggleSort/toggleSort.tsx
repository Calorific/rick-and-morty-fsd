import React, { FC, useEffect, useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Order } from './types'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const ToggleSort: FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [sort, setSort] = useState<Order>(searchParams.get('order') as Order || 'asc')

  useEffect(() => {
    navigate(`?order=${sort}`)
  }, [navigate, sort])

  const toggleSort = () => {
    const newSort = sort === 'asc' ? 'desc' : 'asc'
    setSort(newSort)
    navigate(`?order=${newSort}`)
  }

  return <span onClick={toggleSort} style={{ cursor: 'pointer' }}>
    {sort === 'asc' ? <UpOutlined /> : <DownOutlined />}
  </span>
}