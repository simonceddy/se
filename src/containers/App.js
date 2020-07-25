import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AppRoutes from '../routes';
import Footer from '../components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <div className="w-full flex-1">
        <AppRoutes />
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
