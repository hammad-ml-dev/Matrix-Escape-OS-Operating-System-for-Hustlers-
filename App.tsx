import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import { EscapePlan } from './Pages/EscapePlan';
import { ViralPrompts } from './Pages/ViralPrompts';
import { SeoWriter } from './Pages/SeoWriter';
import { DesignToolkit } from './Pages/DesignToolkit';
import { LearnEscape } from './Pages/LearnEscape';
import { ToolStack } from './Pages/ToolStack';
import { SideHustle } from './Pages/SideHustle';
import { Layout } from './Compoenet/Layout';
import { WelcomeModal } from './Compoenet/WelcomeModel';

function App() {
  const [showWelcome, setShowWelcome] = React.useState(() => {
    return !localStorage.getItem('welcomeShown');
  });

  const handleCloseWelcome = () => {
    localStorage.setItem('welcomeShown', 'true');
    setShowWelcome(false);
  }; 

  return (
    <>
      {showWelcome && <WelcomeModal onClose={handleCloseWelcome} />}
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/escape-plan" element={<EscapePlan />} />
          <Route path="/viral-prompts" element={<ViralPrompts />} />
          <Route path="/seo-writer" element={<SeoWriter />} />
          <Route path="/design-toolkit" element={<DesignToolkit />} />
          <Route path="/learn-escape" element={<LearnEscape />} />
          <Route path="/tool-stack" element={<ToolStack />} />
          <Route path="/side-hustle" element={<SideHustle />} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;