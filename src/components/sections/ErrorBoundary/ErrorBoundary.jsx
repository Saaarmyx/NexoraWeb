import { Component, useState } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Error en la página de producto</h2>
          <pre>{this.state.error?.message}</pre>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary