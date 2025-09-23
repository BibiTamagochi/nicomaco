import { useState } from 'react';
import { GameState, CompanyType } from '../types/game';
import { CompanySelection } from './CompanySelection';
import { CompanyNaming } from './CompanyNaming';
import { QuizSession } from './QuizSession';
import { GameResults } from './GameResults';
import nicomacoLogo from '../assets/nicomaco-logo.png';

const initialGameState: GameState = {
  phase: 'company-selection',
  companyType: null,
  companyName: '',
  currentQuestionIndex: 0,
  score: 0,
  timeLeft: 30,
  answered: false,
  showExplanation: false,
  lastAnswerCorrect: null,
};

export const NicomacoGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const handleCompanySelect = (companyType: CompanyType) => {
    setGameState(prev => ({
      ...prev,
      companyType,
      phase: 'company-naming'
    }));
  };

  const handleCompanyName = (companyName: string) => {
    setGameState(prev => ({
      ...prev,
      companyName,
      phase: 'quiz'
    }));
  };

  const handleQuizComplete = (finalScore: number) => {
    setGameState(prev => ({
      ...prev,
      score: finalScore,
      phase: 'results'
    }));
  };

  const handleRestart = () => {
    setGameState(initialGameState);
  };

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-sustainable relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={nicomacoLogo} 
              alt="Nicômaco Logo" 
              className="w-20 h-20 object-contain"
            />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nicômaco
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Jogo de gestão sustentável
          </p>
        </div>

        {/* Game Content */}
        <div className="max-w-4xl mx-auto">
          {gameState.phase === 'company-selection' && (
            <CompanySelection onSelectCompany={handleCompanySelect} />
          )}
          
          {gameState.phase === 'company-naming' && (
            <CompanyNaming 
              companyType={gameState.companyType!}
              onSubmitName={handleCompanyName}
            />
          )}
          
          {gameState.phase === 'quiz' && (
            <QuizSession 
              gameState={gameState}
              updateGameState={updateGameState}
              onComplete={handleQuizComplete}
            />
          )}
          
          {gameState.phase === 'results' && (
            <GameResults 
              score={gameState.score}
              companyName={gameState.companyName}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NicomacoGame;