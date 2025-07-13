
import React, { useState, useEffect, useRef } from 'react';
import MatrixBackground from '../components/MatrixBackground';
import BootSequence from '../components/BootSequence';
import Terminal from '../components/Terminal';
import CommandOutput from '../components/CommandOutput';

const Index = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [commandHistory, setCommandHistory] = useState<Array<{
    command: string;
    output: string;
    timestamp: string;
  }>>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleCommandExecute = (command: string) => {
    const timestamp = new Date().toLocaleTimeString();
    
    if (command.toLowerCase() === 'clear') {
      setCommandHistory([]);
      return;
    }

    const newEntry = {
      command,
      output: '', // This will be handled by CommandOutput component
      timestamp
    };

    setCommandHistory(prev => [...prev, newEntry]);
  };

  // Auto-scroll to bottom when new command is added
  useEffect(() => {
    if (scrollAreaRef.current && commandHistory.length > 0) {
      setTimeout(() => {
        scrollAreaRef.current?.scrollTo({
          top: scrollAreaRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [commandHistory]);

  const handleBootComplete = () => {
    setBootComplete(true);
    // Add welcome message
    setTimeout(() => {
      const welcomeEntry = {
        command: 'system_init',
        output: 'Welcome to Mansoor Ahmed\'s Digital Portfolio',
        timestamp: new Date().toLocaleTimeString()
      };
      setCommandHistory([welcomeEntry]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MatrixBackground />
      
      {!bootComplete && (
        <BootSequence onComplete={handleBootComplete} />
      )}

      {bootComplete && (
        <>
          <div className="container mx-auto px-4 py-8 pb-32">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8 text-center">
                <div className="text-primary neon-text text-2xl md:text-4xl font-bold mb-2 glitch" data-text="MANSOOR AHMED">
                  MANSOOR AHMED
                </div>
                <div className="text-secondary text-sm md:text-base">
                  Associate Research Engineer | Full Stack Developer
                </div>
                <div className="text-muted-foreground text-xs md:text-sm mt-2">
                  System Status: <span className="text-primary">ONLINE</span> | 
                  Security Level: <span className="text-accent">MAXIMUM</span>
                </div>
              </header>

              <div className="terminal-glow rounded-lg bg-card/30 backdrop-blur-sm p-6 scan-lines">
                <div className="mb-4 text-xs text-muted-foreground flex justify-between items-center">
                  <span>Terminal Session Active</span>
                  <span className="text-primary">Connected</span>
                </div>

                {commandHistory.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="text-lg mb-2">Welcome to the Digital Matrix</div>
                    <div className="text-sm">Type 'help' to see available commands</div>
                  </div>
                )}

                <div 
                  ref={scrollAreaRef}
                  className="space-y-4 max-h-96 overflow-y-auto scroll-smooth"
                >
                  {commandHistory.map((entry, index) => (
                    <CommandOutput
                      key={index}
                      command={entry.command}
                      output={entry.output}
                      timestamp={entry.timestamp}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Terminal 
            onCommandExecute={handleCommandExecute}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />
        </>
      )}
    </div>
  );
};

export default Index;
