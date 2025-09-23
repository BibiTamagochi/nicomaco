import { Trophy } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
}

export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <div className="flex items-center gap-2">
      <Trophy className="h-5 w-5 text-accent" />
      <span className="text-lg font-bold text-foreground">
        {score.toLocaleString()} pts
      </span>
    </div>
  );
};