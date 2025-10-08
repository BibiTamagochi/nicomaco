import { useState } from 'react';
import { GameState, CompanyType } from '../types/game';
import { CompanySelection } from './CompanySelection';
import { CompanyNaming } from './CompanyNaming';
import { QuizSession } from './QuizSession';
import { GameResults } from './GameResults';
import { Button } from './ui/button';
import { Home } from 'lucide-react';

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

      {/* Reset Button - Fixed at bottom */}
      {gameState.phase !== 'company-selection' && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleRestart}
            variant="outline"
            size="lg"
            className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
          >
            <Home className="mr-2 h-5 w-5" />
            Retornar ao menu inicial
          </Button>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-4">
            Nicômaco
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md font-medium">
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