import { FC } from 'react'
import { Typography } from 'antd'

export const HomePage: FC = () => {
  return <>
    <Typography.Title>Rick and Morty Universe</Typography.Title>
    <Typography.Title level={3}>Here you can find information about characters, locations and episodes</Typography.Title>
  </>
}