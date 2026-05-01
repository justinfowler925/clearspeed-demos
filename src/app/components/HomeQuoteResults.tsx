import { useState, useEffect } from 'react';
import { Shield, Home, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface HomeQuoteResultsProps {
  onNavigate: (page: string) => void;
}

export function HomeQuoteResults({ onNavigate }: HomeQuoteResultsProps) {
  const [annualPremium, setAnnualPremium] = useState(0);

  useEffect(() => {
    // Generate random price between $800 and $2500
    const randomPrice = Math.floor(Math.random() * (2500 - 800 + 1)) + 800;
    setAnnualPremium(randomPrice);
  }, []);

  const monthlyPremium = Math.round(annualPremium / 12);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-12 h-12 text-red-600" />
            <h1 className="text-4xl text-gray-800">Your Home Insurance Quote</h1>
          </div>
          <p className="text-xl text-gray-600">
            Here's your personalized coverage plan
          </p>
        </div>

        {/* Price Card */}
        <Card className="p-8 bg-gradient-to-br from-red-600 to-red-800 text-white mb-6 shadow-xl">
          <div className="text-center">
            <p className="text-xl mb-2 opacity-90">Your Estimated Annual Premium</p>
            <p className="text-5xl mb-4">${annualPremium.toLocaleString()}</p>
            <p className="text-lg opacity-90">or ${monthlyPremium}/month</p>
          </div>
        </Card>

        {/* Coverage Details */}
        <Card className="p-8 bg-white shadow-lg mb-6">
          <h2 className="text-2xl mb-6 text-gray-800">Coverage Details</h2>
          
          <div className="space-y-6">
            {/* Dwelling Coverage */}
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="text-lg text-gray-800 mb-1">Dwelling Coverage</h3>
                <p className="text-sm text-gray-600">Protection for your home structure</p>
              </div>
              <p className="text-xl text-gray-800">$400,000</p>
            </div>

            {/* Personal Property */}
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="text-lg text-gray-800 mb-1">Personal Property</h3>
                <p className="text-sm text-gray-600">Coverage for your belongings</p>
              </div>
              <p className="text-xl text-gray-800">$200,000</p>
            </div>

            {/* Liability Coverage */}
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="text-lg text-gray-800 mb-1">Personal Liability</h3>
                <p className="text-sm text-gray-600">Protection against lawsuits</p>
              </div>
              <p className="text-xl text-gray-800">$300,000</p>
            </div>

            {/* Medical Payments */}
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="text-lg text-gray-800 mb-1">Medical Payments</h3>
                <p className="text-sm text-gray-600">For injuries on your property</p>
              </div>
              <p className="text-xl text-gray-800">$5,000</p>
            </div>

            {/* Deductible */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-gray-800 mb-1">Deductible</h3>
                <p className="text-sm text-gray-600">Your out-of-pocket cost per claim</p>
              </div>
              <p className="text-xl text-gray-800">$1,000</p>
            </div>
          </div>
        </Card>

        {/* Additional Benefits */}
        <Card className="p-8 bg-white shadow-lg mb-6">
          <h2 className="text-2xl mb-6 text-gray-800">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">24/7 Claims Support</h3>
                <p className="text-sm text-gray-600">Always here when you need us</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">Replacement Cost Coverage</h3>
                <p className="text-sm text-gray-600">No depreciation on claims</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">Water Backup Coverage</h3>
                <p className="text-sm text-gray-600">Protection from sewer/drain issues</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">Identity Theft Protection</h3>
                <p className="text-sm text-gray-600">Peace of mind included</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">Lock Replacement</h3>
                <p className="text-sm text-gray-600">If keys are stolen</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base text-gray-800">Emergency Service Line</h3>
                <p className="text-sm text-gray-600">Quick response when disaster strikes</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={() => onNavigate('home-quote')}
            variant="outline"
            className="flex-1"
          >
            Back to Quote Form
          </Button>
          <Button 
            onClick={() => onNavigate('home-application-questionnaire')}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
