import React from 'react';
import './ErrorBoundary.css';

const withErrorBoundary = (wrapped) => {
  return (
      <ErrorBoundary>
        {wrapped}
      </ErrorBoundary>
  );
};

export default withErrorBoundary;

export class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
          <div className="ErrorBoundary bg-dark text-danger">
            <h2>Что-то пошло не так!</h2>
          </div>
      );
    }

    return this.props.children;
  }
}
