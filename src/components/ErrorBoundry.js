import React, {Component} from 'react';

class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      }
   }

   componentDidCatch(error, errorInfo) {
      this.setState({hasError: true});
   }

   render() {
      if (this.state.hasError) {
         return <h1>We are experiencing technical difficulty's</h1>
      }
      return this.props.children;
   }
}

export default ErrorBoundary;