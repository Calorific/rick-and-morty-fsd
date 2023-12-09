import { FC } from 'react'
import { RollbackOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export const GoBackButton: FC = () => {
  const navigate = useNavigate()

  return <>
    <RollbackOutlined onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
  </>
}