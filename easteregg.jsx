import React, { useState, useEffect } from 'react';

function Egg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'h') {
        document.addEventListener('keydown', handleKeyDownH);
      }
    };

    const handleKeyDownH = (event) => {
      if (event.key.toLowerCase() === 'e') {
        document.addEventListener('keydown', handleKeyDownE);
      } else {
        document.removeEventListener('keydown', handleKeyDownH);
      }
    };

    const handleKeyDownE = (event) => {
      if (event.key.toLowerCase() === 'l') {
        document.addEventListener('keydown', handleKeyDownL);
      } else {
        document.removeEventListener('keydown', handleKeyDownH);
        document.removeEventListener('keydown', handleKeyDownE);
      }
    };

    const handleKeyDownL = (event) => {
      if (event.key.toLowerCase() === 'l') {
        document.addEventListener('keydown', handleKeyDownO);
      } else {
        document.removeEventListener('keydown', handleKeyDownH);
        document.removeEventListener('keydown', handleKeyDownE);
        document.removeEventListener('keydown', handleKeyDownL);
      }
    };

    const handleKeyDownO = (event) => {
      if (event.key.toLowerCase() === 'o') {
        setShowEasterEgg(true);
        document.removeEventListener('keydown', handleKeyDownH);
        document.removeEventListener('keydown', handleKeyDownE);
        document.removeEventListener('keydown', handleKeyDownL);
        document.removeEventListener('keydown', handleKeyDownO);
      } else {
        document.removeEventListener('keydown', handleKeyDownH);
        document.removeEventListener('keydown', handleKeyDownE);
        document.removeEventListener('keydown', handleKeyDownL);
        document.removeEventListener('keydown', handleKeyDownO);
      }
    };

    const handlePaste = (event) => {
      const clipboardText = event.clipboardData.getData('Text');
      if (clipboardText.toLowerCase() === 'hello') {
        setShowEasterEgg(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleKeyDownH);
      document.removeEventListener('keydown', handleKeyDownE);
      document.removeEventListener('keydown', handleKeyDownL);
      document.removeEventListener('keydown', handleKeyDownO);
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <>
      {showEasterEgg && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'yellow', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: '99999' }}>
          <h2>🥚 Easter Egg 🥚</h2>
          <p>Congratulations! You found the secret function!</p>
          <button onClick={() => setShowEasterEgg(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Egg;
