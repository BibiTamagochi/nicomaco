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
    if (score === 5) return { level: 'Expert Sustentável', icon: '🏆', color: 'text-yellow-500', stars: 5 };
    if (score === 4) return { level: 'Empresário Verde', icon: '🥇', color: 'text-green-500', stars: 4 };
    if (score === 3) return { level: 'Consciente Ambiental', icon: '🥈', color: 'text-blue-500', stars: 3 };
    if (score === 2) return { level: 'Iniciante Sustentável', icon: '🥉', color: 'text-orange-500', stars: 2 };
    if (score === 1) return { level: 'Aprendiz Verde', icon: '🌱', color: 'text-green-400', stars: 1 };
    return { level: 'Precisa Melhorar', icon: '📚', color: 'text-gray-500', stars: 0 };
  };

  const performance = getPerformanceLevel(score);
  const stars = Math.max(0, Math.min(5, score)); // Garantir que estrelas fiquem entre 0 e 5

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
        <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
          Parabéns!
        </h2>
        <p className="text-xl text-white/90 drop-shadow-md font-medium">
          {companyName} completou o Nicômaco Quiz!
        </p>
      </div>

      {/* Score Card */}
      <Card className="quiz-card max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className={`h-8 w-8 ${performance.color}`} />
            <CardTitle className="text-3xl">
              {Math.max(0, score)} de 5 acertos
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
                  stars >= star 
                    ? 'text-yellow-500 fill-yellow-500' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Performance Summary */}
          <div className="bg-muted/30 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              📊 Resumo do Desempenho
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Acertos:</span>
                <p className="font-bold text-lg">{Math.max(0, score)} de 5</p>
              </div>
              <div>
                <span className="text-muted-foreground">Estrelas:</span>
                <p className="font-bold text-lg">{stars} ⭐</p>
              </div>
              <div>
                <span className="text-muted-foreground">Empresa:</span>
                <p className="font-medium">{companyName}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Nível:</span>
                <p className="font-medium">{performance.level}</p>
              </div>
            </div>
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
                const text = `🌿 Acabei de completar o Nicômaco Quiz com ${stars} estrelas ⭐ (${Math.max(0, score)} acertos) como ${performance.level}! 
                
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
        <blockquote className="text-lg italic border-l-4 border-white pl-4 py-2 mb-4 text-white">
          "A Terra provê o suficiente para satisfazer as necessidades de todos, mas não a ganância de todos."
        </blockquote>
        <cite className="text-sm font-medium text-white/90">— Mahatma Gandhi</cite>
      </div>

      {/* Footer Message */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm text-white/90 drop-shadow-md">
          🌍 Obrigado por jogar Nicômaco! Juntos construímos um futuro mais sustentável! 🌍
        </p>
      </div>
    </div>
  );
};