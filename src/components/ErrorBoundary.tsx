import React from 'react';

type State = {
  hasError: boolean;
  error?: Error | null;
  info?: React.ErrorInfo | null;
};

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
    try {
      const prev = JSON.parse(localStorage.getItem('app_logs') || '[]');
      prev.unshift({ time: new Date().toISOString(), message: error.message, stack: error.stack, info });
      localStorage.setItem('app_logs', JSON.stringify(prev.slice(0, 100)));
      // also print to console
      // eslint-disable-next-line no-console
      console.error('Captured error:', error, info);
    } catch (e) {
      // ignore storage errors
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: '#fff', background: '#1b1f24', minHeight: '100vh' }}>
          <h1>Something went wrong.</h1>
          <p>We've captured the error and stored it in local logs. Open <a href="/logs">/logs</a> to view details.</p>
          <details style={{ whiteSpace: 'pre-wrap', color: '#ddd' }}>
            {this.state.error?.message}
            {this.state.error?.stack}
          </details>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
