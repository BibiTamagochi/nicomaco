import { useState } from 'react';
import { CompanyType } from '../types/game';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';

const companyTypeNames = {
  'startup-tech': 'Start-up de Tecnologia',
  'restaurant': 'Restaurante',
  'school-network': 'Rede de Escolas',
  'delivery': 'Empresa de Delivery',
  'clothing-industry': 'Indústria de Roupas'
};

const companyTypeIcons = {
  'startup-tech': '💻',
  'restaurant': '🍽️',
  'school-network': '🎓',
  'delivery': '🚚',
  'clothing-industry': '👕'
};

interface CompanyNamingProps {
  companyType: CompanyType;
  onSubmitName: (name: string) => void;
}

export const CompanyNaming = ({ companyType, onSubmitName }: CompanyNamingProps) => {
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName.trim()) {
      onSubmitName(companyName.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <div className="text-6xl mb-4">
          {companyTypeIcons[companyType]}
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Nomeie Sua {companyTypeNames[companyType]}
        </h2>
        <p className="text-lg text-muted-foreground">
          Dê um nome criativo para sua empresa sustentável
        </p>
      </div>

      <Card className="quiz-card">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            Nome da Empresa
          </CardTitle>
          <CardDescription className="text-center">
            Este nome aparecerá em todas as perguntas do quiz
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-base font-medium">
                Digite o nome da sua empresa:
              </Label>
              <Input
                id="company-name"
                type="text"
                placeholder="Ex: EcoTech Solutions, Green Delivery, Escola Verde..."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="text-lg py-3 h-12"
                maxLength={50}
                autoFocus
              />
              <p className="text-sm text-muted-foreground">
                {companyName.length}/50 caracteres
              </p>
            </div>

            <Button
              type="submit"
              disabled={!companyName.trim()}
              className="w-full btn-hero text-lg py-6 h-14"
              size="lg"
            >
              Começar Quiz 🚀
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          🌿 Prepare-se para desafios sobre sustentabilidade empresarial! 🌿
        </p>
      </div>
    </div>
  );
};