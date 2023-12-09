import { FC } from 'react'
import { Menu, MenuProps } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: <NavLink to=''>Home</NavLink>,
    key: '/',
  },
  {
    label: <NavLink to='characters'>Characters</NavLink>,
    key: '/characters',
  },
  {
    label: <NavLink to='locations'>Locations</NavLink>,
    key: '/locations',
  },
  {
    label: <NavLink to='episodes'>Episodes</NavLink>,
    key: '/episodes',
  }
]

export const NavigationMenu: FC = () => {
  const location = useLocation()
  const activeItem = items.find(item => location.pathname === item?.key?.toString())

  return <Menu selectedKeys={activeItem?.key ? [activeItem.key.toString()] : []}
               style={{ fontSize: '1.2rem', maxWidth: '100%', border: 0 }}
               mode='horizontal'
               items={items} />
}