import { Component } from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types.ts'
import { Typography } from 'antd'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public prevPath: string | null

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
    this.prevPath = null
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidUpdate() {
    if (window.location.pathname !== this.prevPath)
      this.setState({ hasError: false });
    this.prevPath = window.location.pathname;
  }

  componentDidMount() {
    this.prevPath = window.location.pathname
  }

  render() {
    if (this.state.hasError) {
      return <Typography.Title>Что-то пошло не так...</Typography.Title>
    }
    return this.props.children
  }
}