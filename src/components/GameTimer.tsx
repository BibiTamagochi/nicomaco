import { useEffect } from 'react';
import { Progress } from './ui/progress';
import { Clock } from 'lucide-react';

interface GameTimerProps {
  timeLeft: number;
  onTimeUp: () => void;
  isActive: boolean;
  updateTimeLeft: (time: number) => void;
}

export const GameTimer = ({ timeLeft, onTimeUp, isActive, updateTimeLeft }: GameTimerProps) => {
  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      if (timeLeft <= 0) {
        onTimeUp();
      }
      return;
    }

    const timer = setInterval(() => {
      updateTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp, updateTimeLeft]);

  const progressValue = (timeLeft / 30) * 100;
  const isUrgent = timeLeft <= 10;

  return (
    <div className="flex items-center gap-3">
      <Clock className={`h-5 w-5 ${isUrgent ? 'text-destructive animate-pulse' : 'text-muted-foreground'}`} />
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${isUrgent ? 'text-destructive' : 'text-foreground'}`}>
          {timeLeft}s
        </span>
        <Progress 
          value={progressValue}
          className={`w-20 h-2 ${isUrgent ? 'timer-pulse' : ''}`}
        />
      </div>
    </div>
  );
};