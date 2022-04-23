interface ErrorBoundaryProps {
    children: React.ReactNode | React.ReactChild
  }
  
interface ErrorBoundaryState {      
    hasError: boolean, 
    errorInfo?: string
}

export type { ErrorBoundaryState, ErrorBoundaryProps }

