import React, { Component, ReactNode } from 'react'

import Error500Index from '../../Controller/Error/500/Index'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <Error500Index />
    }

    return this.props.children
  }
}

export default ErrorBoundary
