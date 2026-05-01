import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Check, Shield, Car } from 'lucide-react';

interface QuoteResultsProps {
  onNavigate: (page: string) => void;
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuotePrice() {
  return random(1500, 4500);
}

export function QuoteResults({ onNavigate }: QuoteResultsProps) {
  const [annualPrice, setAnnualPrice] = useState(() => generateQuotePrice());

  useEffect(() => {
    setAnnualPrice(generateQuotePrice());
  }, []);

  const monthlyPrice = Math.round(annualPrice / 12);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl mb-4 text-gray-800">Your Personalized Quote</h1>
          <p className="text-xl text-gray-600">
            Based on your information, here's your customized auto insurance quote
          </p>
        </div>

        {/* Price Card */}
        <Card className="p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl mb-8">
          <div className="text-center">
            <p className="text-xl mb-2 opacity-90">Your Annual Premium</p>
            <div className="text-6xl mb-4">
              ${annualPrice.toLocaleString()}
            </div>
            <p className="text-2xl opacity-90">
              or ${monthlyPrice}/month
            </p>
          </div>
        </Card>

        {/* Coverage Details */}
        <Card className="p-8 bg-white shadow-lg mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Coverage Details</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-6 border-b">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2 text-gray-800">Liability Coverage</h3>
                <p className="text-gray-600 mb-2">
                  Protects you financially if you're responsible for an accident
                </p>
                <p className="text-2xl text-blue-600">
                  $300,000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2 text-gray-800">Vehicle 1 - Deductible</h3>
                <p className="text-gray-600 mb-2">
                  The amount you pay out-of-pocket before insurance coverage begins
                </p>
                <p className="text-2xl text-blue-600">
                  $500
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2 text-gray-800">Vehicle 2 - Deductible</h3>
                <p className="text-gray-600 mb-2">
                  The amount you pay out-of-pocket before insurance coverage begins
                </p>
                <p className="text-2xl text-blue-600">
                  $500
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* What's Included */}
        <Card className="p-8 bg-white shadow-lg mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">Comprehensive Coverage</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">Collision Coverage</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">24/7 Roadside Assistance</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">Rental Car Reimbursement</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">Uninsured Motorist Protection</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">Medical Payments Coverage</p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={() => onNavigate('quote')}
            variant="outline"
            className="flex-1"
          >
            Back to Quote Form
          </Button>
          <Button 
            onClick={() => onNavigate('application-questionnaire')}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
