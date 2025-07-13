import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface TerminalProps {
  onCommandExecute: (command: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onCommandExecute, soundEnabled, setSoundEnabled }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    'help', 'clear', 'ls', 'ls skills', 'ls projects', 'ls experience',
    'cat about', 'cat projects', 'cat contact', 'cat resume','cat exeprience', 'cat education' ,"cd education", "cd experience",
    "ls education", "ls experience ", 'cd skills', 'cd projects', 'cd contact', 'cd about',
    'whoami', 'date', 'pwd', 'echo', 'tree' , "cd resume" , "ls resume", "cat resume"
  ];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const playSound = () => {
    if (!soundEnabled) return;
    // Create a subtle beep sound
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    playSound();
    setHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
    onCommandExecute(input.trim());
    setInput('');
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    if (value) {
      const filtered = commands.filter(cmd => 
        cmd.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }

  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setInput(suggestion);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-primary/20 terminal-glow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-muted-foreground">
            mansoor@cyberpunk:~$ ready for input
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>

        {suggestions.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => selectSuggestion(suggestion)}
                className="px-2 py-1 text-xs bg-muted/50 text-accent rounded border border-accent/30 hover:bg-accent/10 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <ChevronRight className="text-primary flex-shrink-0" size={16} />
          <span className="text-primary">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-primary font-mono placeholder-muted-foreground"
            placeholder="Type a command... (try 'help')"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
