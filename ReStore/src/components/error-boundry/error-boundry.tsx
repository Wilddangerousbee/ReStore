
import React from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../types/error-boundary";

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false 
    };
  }

  componentDidCatch(error: Error, errorInfo:React.ErrorInfo): void {
    this.setState({
      hasError: true,
      errorInfo: errorInfo.componentStack
    })
    console.log(error);
  }

  render(): React.ReactNode {
    const {children} = this.props;
    const {hasError, errorInfo} = this.state;

    if (hasError) {
      return(
        <h1 data-testid="error-message">{errorInfo}</h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;