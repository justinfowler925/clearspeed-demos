import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Check } from 'lucide-react';

interface LifeQuoteResultsProps {
  onNavigate: (page: string) => void;
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPricing() {
  return {
    monthlyPremium: random(45, 250),
    annualPremium: random(500, 2800),
    coverageAmount: random(250, 1000) * 1000,
    termLength: random(1, 3) * 10,
    policyType: ['Term Life', 'Whole Life', 'Universal Life'][random(0, 2)]
  };
}

export function LifeQuoteResults({ onNavigate }: LifeQuoteResultsProps) {
  const [pricing, setPricing] = useState(() => generateRandomPricing());

  useEffect(() => {
    setPricing(generateRandomPricing());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Your Life Insurance Quote</h1>
          <p className="text-xl text-gray-600">
            Here's your personalized coverage recommendation
          </p>
        </div>

        {/* Quote Summary */}
        <Card className="p-8 bg-white shadow-lg mb-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-purple-50 rounded-lg px-6 py-4 mb-4">
              <p className="text-sm text-purple-600 mb-1">Estimated Monthly Premium</p>
              <p className="text-5xl text-purple-700">${pricing.monthlyPremium}</p>
              <p className="text-sm text-gray-600 mt-2">or ${pricing.annualPremium}/year</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Coverage Amount</p>
                <p className="text-2xl text-gray-800">${pricing.coverageAmount.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Policy Type</p>
                <p className="text-2xl text-gray-800">{pricing.policyType}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Term Length</p>
                <p className="text-2xl text-gray-800">{pricing.termLength} Years</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg mb-3 text-gray-800">What's Included in Your Coverage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Death benefit protection</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Level premium guarantee</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Convertibility option</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Accelerated death benefit rider</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Waiver of premium rider</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">24/7 customer support</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <Button 
              onClick={() => onNavigate('life-application-questionnaire')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
            >
              Apply Now
            </Button>
          </div>
        </Card>

        {/* Additional Information */}
        <Card className="p-8 bg-white shadow-lg">
          <h2 className="text-2xl mb-6 text-gray-800">Why Choose This Coverage?</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Financial Security for Your Family</h3>
                <p className="text-gray-600">
                  This coverage ensures your loved ones are protected financially, helping them 
                  maintain their standard of living and meet financial obligations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Affordable Protection</h3>
                <p className="text-gray-600">
                  Your premium is locked in for the entire term, providing predictable costs 
                  and budget-friendly protection.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Simple Application Process</h3>
                <p className="text-gray-600">
                  Get covered quickly with our streamlined application. Many applicants qualify 
                  without a medical exam.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t flex gap-4">
            <Button 
              onClick={() => onNavigate('life-quote')}
              variant="outline"
              className="flex-1"
            >
              Back to Quote Form
            </Button>
            <Button 
              onClick={() => onNavigate('life-insurance')}
              variant="outline"
              className="flex-1"
            >
              Start Over
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
