import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'CloudSync Pro', price: '$299/month', description: 'Advanced cloud synchronization solution' },
    { id: 2, name: 'DataSecure Enterprise', price: '$499/month', description: 'Enterprise-grade data security platform' },
    { id: 3, name: 'AI Analytics Suite', price: '$799/month', description: 'Artificial intelligence powered analytics' },
    { id: 4, name: 'Mobile Connect', price: '$199/month', description: 'Seamless mobile integration platform' }
  ]);

  // Button that throws a TypeError
  const handleTypeError = () => {
    try {
      // Intentionally calling a method on undefined
      const undefinedVariable = undefined;
      undefinedVariable.someMethod();
    } catch (error) {
      setErrorMessage(`TypeError caught: ${error.message}`);
      console.error('TypeError:', error);
    }
  };

  // Button that throws a ReferenceError
  const handleReferenceError = () => {
    try {
      // Intentionally referencing a non-existent variable
      // eslint-disable-next-line no-undef
      console.log(nonExistentVariable);
    } catch (error) {
      setErrorMessage(`ReferenceError caught: ${error.message}`);
      console.error('ReferenceError:', error);
    }
  };

  // Button that throws a SyntaxError (simulated)
  const handleSyntaxError = () => {
    try {
      // Simulating a JSON parse error
      JSON.parse('{"invalid": json}');
    } catch (error) {
      setErrorMessage(`SyntaxError caught: ${error.message}`);
      console.error('SyntaxError:', error);
    }
  };

  // Button that throws a RangeError
  const handleRangeError = () => {
    try {
      // Creating an array with negative length
      new Array(-1);
    } catch (error) {
      setErrorMessage(`RangeError caught: ${error.message}`);
      console.error('RangeError:', error);
    }
  };

  // Button that throws a custom error
  const handleCustomError = () => {
    try {
      throw new Error('This is a custom error for demonstration purposes!');
    } catch (error) {
      setErrorMessage(`Custom Error caught: ${error.message}`);
      console.error('Custom Error:', error);
    }
  };

  // Button that causes a network error simulation
  const handleNetworkError = async () => {
    try {
      const response = await fetch('https://nonexistent-api-endpoint-12345.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrorMessage(`Network Error caught: ${error.message}`);
      console.error('Network Error:', error);
    }
  };

  // Button that causes a Promise rejection
  const handlePromiseRejection = () => {
    const fakePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise was rejected intentionally!'));
      }, 1000);
    });

    fakePromise.catch(error => {
      setErrorMessage(`Promise Rejection caught: ${error.message}`);
      console.error('Promise Rejection:', error);
    });
  };

  // Button that causes a stack overflow (careful with this one!)
  const handleStackOverflow = () => {
    try {
      const recursiveFunction = (count = 0) => {
        if (count > 1000) { // Limit to prevent browser crash
          throw new Error('Simulated stack overflow (limited for safety)');
        }
        return recursiveFunction(count + 1);
      };
      recursiveFunction();
    } catch (error) {
      setErrorMessage(`Stack Overflow (simulated): ${error.message}`);
      console.error('Stack Overflow:', error);
    }
  };

  const clearError = () => {
    setErrorMessage('');
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="products-container">
      <section className="products-hero">
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">
          Explore our comprehensive suite of technology solutions designed to 
          transform your business operations.
        </p>
      </section>

      <section className="error-demo-section">
        <h2>Error Handling Demonstration</h2>
        <p>Click these buttons to trigger different types of errors (safely handled):</p>
        
        <div className="error-buttons-grid">
          <button className="error-btn btn-red" onClick={handleTypeError}>
            Trigger TypeError
          </button>
          
          <button className="error-btn btn-orange" onClick={handleReferenceError}>
            Trigger ReferenceError
          </button>
          
          <button className="error-btn btn-purple" onClick={handleSyntaxError}>
            Trigger SyntaxError
          </button>
          
          <button className="error-btn btn-pink" onClick={handleRangeError}>
            Trigger RangeError
          </button>
          
          <button className="error-btn btn-yellow" onClick={handleCustomError}>
            Trigger Custom Error
          </button>
          
          <button className="error-btn btn-blue" onClick={handleNetworkError}>
            Trigger Network Error
          </button>
          
          <button className="error-btn btn-green" onClick={handlePromiseRejection}>
            Trigger Promise Rejection
          </button>
          
          <button className="error-btn btn-gray" onClick={handleStackOverflow}>
            Simulate Stack Overflow
          </button>
          
          <button className="error-btn btn-clear" onClick={clearError}>
            Clear Error Messages
          </button>
        </div>

        {errorMessage && (
          <div className="error-display">
            <h3>Error Caught:</h3>
            <p className="error-text">{errorMessage}</p>
            <small>Check the browser console for more details.</small>
          </div>
        )}
      </section>

      <section className="products-grid-section">
        <h2>Our Product Portfolio</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-actions">
                <button className="btn-primary">Learn More</button>
                <button 
                  className="btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="no-products">
            <p>All products have been removed! Refresh the page to restore them.</p>
          </div>
        )}
      </section>

      <section className="product-features">
        <h2>Why Choose Our Products?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h4>🚀 High Performance</h4>
            <p>Optimized for speed and efficiency</p>
          </div>
          <div className="feature-item">
            <h4>🔒 Secure</h4>
            <p>Enterprise-grade security measures</p>
          </div>
          <div className="feature-item">
            <h4>📱 Mobile Ready</h4>
            <p>Works seamlessly across all devices</p>
          </div>
          <div className="feature-item">
            <h4>🔧 Customizable</h4>
            <p>Tailored to your specific needs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
