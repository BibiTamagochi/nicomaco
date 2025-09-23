import { useEffect, useState } from 'react';
import { GameState } from '../types/game';
import { questionsByCompany } from '../data/questions';
import { QuestionCard } from './QuestionCard';
import { GameTimer } from './GameTimer';
import { ScoreDisplay } from './ScoreDisplay';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';

interface QuizSessionProps {
  gameState: GameState;
  updateGameState: (updates: Partial<GameState>) => void;
  onComplete: (finalScore: number) => void;
}

export const QuizSession = ({ gameState, updateGameState, onComplete }: QuizSessionProps) => {
  const questions = questionsByCompany[gameState.companyType!];
  const currentQuestion = questions[gameState.currentQuestionIndex];
  const totalQuestions = questions.length;
  const questionsRemaining = totalQuestions - gameState.currentQuestionIndex;

  useEffect(() => {
    if (gameState.currentQuestionIndex >= totalQuestions) {
      onComplete(gameState.score);
      return;
    }

    // Reset timer when moving to next question
    if (!gameState.answered && !gameState.showExplanation) {
      updateGameState({ timeLeft: 30 });
    }
  }, [gameState.currentQuestionIndex, gameState.answered, gameState.showExplanation]);

  const handleAnswer = (selectedAnswer: number) => {
    if (gameState.answered) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const points = isCorrect ? 100 + gameState.timeLeft * 5 : 0; // Bonus for quick answers

    updateGameState({
      answered: true,
      showExplanation: true,
      lastAnswerCorrect: isCorrect,
      score: gameState.score + points,
    });
  };

  const handleNext = () => {
    updateGameState({
      currentQuestionIndex: gameState.currentQuestionIndex + 1,
      answered: false,
      showExplanation: false,
      lastAnswerCorrect: null,
      timeLeft: 30,
    });
  };

  const handleTimeUp = () => {
    if (!gameState.answered) {
      updateGameState({
        answered: true,
        showExplanation: true,
        lastAnswerCorrect: false,
      });
    }
  };

  // Format question with company name
  const formattedQuestion = currentQuestion.question.replace('{company}', gameState.companyName);

  return (
    <div className="space-y-6">
      {/* Header with progress and stats */}
      <Card className="quiz-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <ScoreDisplay score={gameState.score} />
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Pergunta:</span> {gameState.currentQuestionIndex + 1}/{totalQuestions}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Restam:</span> {questionsRemaining - 1}
              </div>
            </div>
            <GameTimer 
              timeLeft={gameState.timeLeft}
              onTimeUp={handleTimeUp}
              isActive={!gameState.answered && !gameState.showExplanation}
              updateTimeLeft={(time) => updateGameState({ timeLeft: time })}
            />
          </div>
          
          <Progress 
            value={(gameState.currentQuestionIndex / totalQuestions) * 100} 
            className="h-2 progress-bar"
          />
        </CardContent>
      </Card>

      {/* Question Card */}
      <QuestionCard
        question={{
          ...currentQuestion,
          question: formattedQuestion
        }}
        onAnswer={handleAnswer}
        onNext={handleNext}
        answered={gameState.answered}
        showExplanation={gameState.showExplanation}
        lastAnswerCorrect={gameState.lastAnswerCorrect}
        companyName={gameState.companyName}
      />

      {/* Company info */}
      <div className="text-center text-sm text-muted-foreground">
        <p>🏢 Empresa: <span className="font-medium text-foreground">{gameState.companyName}</span></p>
      </div>
    </div>
  );
};