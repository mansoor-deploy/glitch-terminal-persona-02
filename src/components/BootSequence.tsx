
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showAscii, setShowAscii] = useState(false);
  const [completed, setCompleted] = useState(false);

  const bootLines = [
    'Initializing cyberpunk.portfolio.exe...',
    'Loading neural networks... [OK]',
    'Connecting to mainframe... [OK]',
    'Scanning for vulnerabilities... [NONE FOUND]',
    'Decrypting personal data... [OK]',
    'Establishing secure connection... [OK]',
    'Loading developer profile...',
    'System ready. Welcome to the matrix.',
  ];

  const asciiArt = `
███╗   ███╗ █████╗ ███╗   ██╗███████╗ ██████╗  ██████╗ ██████╗ 
████╗ ████║██╔══██╗████╗  ██║██╔════╝██╔═══██╗██╔═══██╗██╔══██╗
██╔████╔██║███████║██╔██╗ ██║███████╗██║   ██║██║   ██║██████╔╝
██║╚██╔╝██║██╔══██║██║╚██╗██║╚════██║██║   ██║██║   ██║██╔══██╗
██║ ╚═╝ ██║██║  ██║██║ ╚████║███████║╚██████╔╝╚██████╔╝██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝

 █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗ 
██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
███████║███████║██╔████╔██║█████╗  ██║  ██║
██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝ 
`;

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (!showAscii) {
      const timer = setTimeout(() => {
        setShowAscii(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!completed) {
      const timer = setTimeout(() => {
        setCompleted(true);
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, showAscii, completed, onComplete, bootLines.length]);

  if (completed) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col justify-center items-start p-8 scan-lines">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          {bootLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="text-primary font-mono text-sm md:text-base">
              <span className="text-secondary">[{String(index + 1).padStart(2, '0')}]</span> {line}
            </div>
          ))}
          {currentLine < bootLines.length && (
            <div className="text-primary font-mono text-sm md:text-base typewriter">
              <span className="text-secondary">[{String(currentLine + 1).padStart(2, '0')}]</span> {bootLines[currentLine]}
            </div>
          )}
        </div>

        {showAscii && (
          <div className="text-primary neon-text overflow-x-auto">
            <pre className="text-xs md:text-sm lg:text-base whitespace-pre font-mono">
              {asciiArt}
            </pre>
            <div className="text-center mt-4">
              <div className="text-secondary text-sm md:text-base">
                Associate Research Engineer | Full Stack Developer 
              </div>
              <div className="text-accent text-xs md:text-sm mt-2">
                Type 'help' to see available commands...
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
