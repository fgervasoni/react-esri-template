import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'

interface Props {
    children?: ReactNode
}

interface State {
    error: Error | null
    info: ErrorInfo | null
}
class ErrorBoundary extends Component<Props, State> {
    state = {
        error: null,
        info: null,
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        this.setState({ error, info })
    }

    render(): ReactNode {
        const { error } = this.state
        if (error) {
            // Sentry.captureException(error)
            return <ErrorBoundaryFallbackComponent />
        }
        return this.props.children
    }
}

export default ErrorBoundary

export const ErrorBoundaryFallbackComponent: React.FC<
    React.PropsWithChildren<unknown>
> = () => (
    <main className="flex items-center justify-center min-w-full min-h-screen">
        <section className="p-10 text-2xl text-gray-400 border-2 border-gray-400 rounded-md">
            Something Error Occurring
            <span className="pl-1" role="img" aria-label="face-emoji">
                😞
            </span>
        </section>
    </main>
)