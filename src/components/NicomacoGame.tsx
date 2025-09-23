import { useState } from 'react';
import { GameState, CompanyType } from '../types/game';
import { CompanySelection } from './CompanySelection';
import { CompanyNaming } from './CompanyNaming';
import { QuizSession } from './QuizSession';
import { GameResults } from './GameResults';

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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Nicômaco
          </h1>
          <p className="text-xl text-muted-foreground">
            Trivia Sustentável para Empresas Conscientes
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