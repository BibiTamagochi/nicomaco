import { Question } from '../types/game';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedAnswer: number) => void;
  onNext: () => void;
  answered: boolean;
  showExplanation: boolean;
  lastAnswerCorrect: boolean | null;
  companyName: string;
}

export const QuestionCard = ({ 
  question, 
  onAnswer, 
  onNext, 
  answered, 
  showExplanation, 
  lastAnswerCorrect,
  companyName 
}: QuestionCardProps) => {

  const getOptionStyle = (index: number) => {
    if (!answered) {
      return "hover:bg-accent hover:text-accent-foreground transition-colors duration-200";
    }

    if (index === question.correctAnswer) {
      return "bg-success text-success-foreground";
    }

    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <Card className="quiz-card">
        <CardHeader>
          <CardTitle className="text-xl leading-loose">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full p-6 h-auto text-left justify-start text-wrap min-h-[60px] ${getOptionStyle(index)}`}
              onClick={() => onAnswer(index)}
              disabled={answered}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)})
              </span>
              <span className="flex-1">{option}</span>
              {answered && index === question.correctAnswer && (
                <CheckCircle className="h-5 w-5 ml-2 text-success" />
              )}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Answer Feedback */}
      {showExplanation && (
        <Card className={`quiz-card border-2 ${lastAnswerCorrect ? 'border-success' : 'border-destructive'}`}>
          <CardHeader>
            <div className="flex items-center gap-3">
              {lastAnswerCorrect ? (
                <CheckCircle className="h-8 w-8 text-success" />
              ) : (
                <XCircle className="h-8 w-8 text-destructive" />
              )}
              <div>
                <CardTitle className={lastAnswerCorrect ? 'text-success' : 'text-destructive'}>
                  {lastAnswerCorrect ? 'Correto! 🎉' : 'Incorreto 😔'}
                </CardTitle>
                <CardDescription>
                  {lastAnswerCorrect 
                    ? `Parabéns! ${companyName} está no caminho certo!`
                    : `${companyName} pode melhorar neste aspecto.`
                  }
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-success mb-2">✅ Resposta Correta:</h4>
              <p className="text-sm">
                <span className="font-semibold">{String.fromCharCode(65 + question.correctAnswer)}) {question.options[question.correctAnswer]}</span>
                <br />
                <span className="text-muted-foreground">{question.explanation}</span>
              </p>
            </div>
            
            {!lastAnswerCorrect && (
              <div>
                <h4 className="font-semibold text-destructive mb-2">❌ Por que as outras estão erradas:</h4>
                <ul className="text-sm space-y-2">
                  {question.options.map((option, index) => {
                    if (index === question.correctAnswer) return null;
                    const wrongExplanationIndex = index < question.correctAnswer ? index : index - 1;
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>
                          <span className="font-semibold">{String.fromCharCode(65 + index)}) {option}</span>
                          <br />
                          <span className="text-muted-foreground">{question.wrongExplanations[wrongExplanationIndex]}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <Button
              onClick={onNext}
              className="w-full btn-hero mt-6"
              size="lg"
            >
              Próxima Pergunta
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};