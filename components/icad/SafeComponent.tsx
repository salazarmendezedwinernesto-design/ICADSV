"use client";
import { Component } from "react";

// Error Boundary: si algo dentro de este componente falla,
// muestra un mensaje en vez de romper toda la página.
export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("SafeComponent capturó un error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
