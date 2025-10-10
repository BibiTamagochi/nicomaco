import { CompanyType, CompanyOption } from '../types/game';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const companyOptions: CompanyOption[] = [
  {
    type: 'startup-tech',
    name: 'Start-up de Tecnologia',
    description: 'Inovação digital com responsabilidade ambiental',
    icon: '💻',
    color: 'from-blue-500 to-purple-600'
  },
  {
    type: 'restaurant',
    name: 'Restaurante',
    description: 'Gastronomia sustentável e consciente',
    icon: '🍽️',
    color: 'from-orange-500 to-red-600'
  },
  {
    type: 'school-network',
    name: 'Rede de Escolas',
    description: 'Educação ambiental para o futuro',
    icon: '🎓',
    color: 'from-green-500 to-teal-600'
  },
  {
    type: 'delivery',
    name: 'Empresa de Delivery',
    description: 'Logística verde e eficiente',
    icon: '🏍️',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    type: 'clothing-industry',
    name: 'Indústria de Roupas',
    description: 'Moda sustentável e ética',
    icon: '👕',
    color: 'from-pink-500 to-purple-600'
  }
];

interface CompanySelectionProps {
  onSelectCompany: (companyType: CompanyType) => void;
}

export const CompanySelection = ({ onSelectCompany }: CompanySelectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
          Teste seu modo de tomar decisões
        </h2>
        <p className="text-lg text-white/90 drop-shadow-md">
          Escolha um tipo de negócio para jogar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companyOptions.map((option) => (
          <Card 
            key={option.type}
            className="game-card hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={() => onSelectCompany(option.type)}
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <CardTitle className="text-xl font-bold">
                {option.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full btn-hero"
                size="lg"
              >
                Selecionar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-white/90">
        <p>🌱 Cada setor possui perguntas específicas sobre sustentabilidade empresarial 🌱</p>
      </div>
    </div>
  );
};