"use client";
import { Component } from "react";

type SafeComponentProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type SafeComponentState = {
  hasError: boolean;
};

// Error Boundary: si algo dentro de este componente falla,
// muestra un mensaje en vez de romper toda la página.
export default class SafeComponent extends Component<
  SafeComponentProps,
  SafeComponentState
> {
  constructor(props: SafeComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SafeComponentState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("SafeComponent capturó un error:", error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
