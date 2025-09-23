import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Trophy, Star, Leaf } from 'lucide-react';

interface GameResultsProps {
  score: number;
  companyName: string;
  onRestart: () => void;
}

export const GameResults = ({ score, companyName, onRestart }: GameResultsProps) => {
  const getPerformanceLevel = (score: number) => {
    if (score >= 2000) return { level: 'Expert Sustentável', icon: '🏆', color: 'text-yellow-500' };
    if (score >= 1500) return { level: 'Empresário Verde', icon: '🥇', color: 'text-green-500' };
    if (score >= 1000) return { level: 'Consciente Ambiental', icon: '🥈', color: 'text-blue-500' };
    if (score >= 500) return { level: 'Iniciante Sustentável', icon: '🥉', color: 'text-orange-500' };
    return { level: 'Aprendiz Verde', icon: '🌱', color: 'text-green-400' };
  };

  const performance = getPerformanceLevel(score);

  const getSustainabilityTips = () => {
    const tips = [
      "🌿 Implemente práticas de economia de energia",
      "♻️ Adote programas de reciclagem e reutilização",
      "🚶‍♂️ Promova transporte sustentável para funcionários",
      "📊 Monitore e reduza a pegada de carbono",
      "🤝 Engaje stakeholders em iniciativas verdes",
      "💡 Invista em tecnologias limpas e eficientes",
      "🌍 Desenvolva parcerias com empresas sustentáveis"
    ];
    
    return tips.slice(0, 3);
  };

  return (
    <div className="space-y-8 text-center">
      {/* Results Header */}
      <div>
        <div className="text-8xl mb-4">{performance.icon}</div>
        <h2 className="text-4xl font-bold text-foreground mb-2">
          Parabéns!
        </h2>
        <p className="text-xl text-muted-foreground">
          {companyName} completou o Nicômaco Quiz!
        </p>
      </div>

      {/* Score Card */}
      <Card className="quiz-card max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className={`h-8 w-8 ${performance.color}`} />
            <CardTitle className="text-3xl">
              {score.toLocaleString()} pontos
            </CardTitle>
          </div>
          <CardDescription className="text-lg">
            Nível: <span className={`font-bold ${performance.color}`}>
              {performance.level}
            </span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Performance Stars */}
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 ${
                  score >= star * 400 
                    ? 'text-yellow-500 fill-yellow-500' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Sustainability Tips */}
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Dicas para {companyName}:
            </h3>
            <ul className="space-y-2">
              {getSustainabilityTips().map((tip, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={onRestart}
              className="btn-hero flex-1"
              size="lg"
            >
              Jogar Novamente 🎮
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              size="lg"
              onClick={() => {
                const text = `🌿 Acabei de completar o Nicômaco Quiz com ${score} pontos como ${performance.level}! 
                
${companyName} está comprometida com a sustentabilidade empresarial! 💚`;
                
                if (navigator.share) {
                  navigator.share({
                    title: 'Nicômaco Quiz - Resultado',
                    text: text
                  });
                } else if (navigator.clipboard) {
                  navigator.clipboard.writeText(text);
                }
              }}
            >
              Compartilhar Resultado 📱
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Gandhi Quote */}
      <div className="text-center text-muted-foreground max-w-2xl mx-auto">
        <blockquote className="text-lg italic border-l-4 border-primary pl-4 py-2 mb-4">
          "A Terra provê o suficiente para satisfazer as necessidades de todos, mas não a ganância de todos."
        </blockquote>
        <cite className="text-sm font-medium">— Mahatma Gandhi</cite>
      </div>

      {/* Footer Message */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm">
          🌍 Obrigado por jogar Nicômaco! Juntos construímos um futuro mais sustentável! 🌍
        </p>
      </div>
    </div>
  );
};