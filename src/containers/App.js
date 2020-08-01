import React from 'react';
import Layout from '../components/Layout';
import SelectTheme from '../components/SelectTheme';
import { modes } from '../themes';

function App({
  themeMode,
  setTheme
}) {
  const onChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <Layout>
      <SelectTheme
        themes={modes}
        value={themeMode}
        onChange={onChange}
      />
    </Layout>
  );
}

export default App;
