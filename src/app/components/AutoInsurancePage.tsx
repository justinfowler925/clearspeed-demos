import { Shield, Car, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface AutoInsurancePageProps {
  onNavigate: (page: string) => void;
}

export function AutoInsurancePage({ onNavigate }: AutoInsurancePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1763181037211-aae76c2282b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Car"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-12 h-12" />
            <h1 className="text-4xl">Auto Insurance</h1>
          </div>
          <p className="text-4xl mb-6 max-w-2xl">
            Comprehensive coverage for every journey
          </p>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            Whether you're commuting to work or taking a road trip, our auto insurance 
            keeps you protected on every mile.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">Get a Quote</h3>
            <p className="text-gray-600 mb-6">
              Find out how much you can save with our competitive rates. Get a personalized 
              quote in minutes.
            </p>
            <Button 
              onClick={() => onNavigate('quote')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Get Your Free Quote
            </Button>
          </Card>
          
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">File a Claim</h3>
            <p className="text-gray-600 mb-6">
              Need to file a claim? We're here to help. Start your claim process quickly 
              and easily online.
            </p>
            <Button 
              onClick={() => onNavigate('claims-type')}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              File a Claim Now
            </Button>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Why Choose Affinity Auto Insurance?</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY4NDM3ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy family"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Comprehensive Coverage</h3>
                <p className="text-gray-600">
                  Protection for collision, theft, vandalism, and more. We've got you covered 
                  in any situation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">24/7 Claims Support</h3>
                <p className="text-gray-600">
                  Accidents don't happen on schedule. That's why our claims team is available 
                  around the clock.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Competitive Rates</h3>
                <p className="text-gray-600">
                  Quality coverage doesn't have to break the bank. We offer some of the most 
                  competitive rates in the industry.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Flexible Payment Options</h3>
                <p className="text-gray-600">
                  Choose from monthly, quarterly, or annual payment plans that fit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 text-gray-800">Coverage Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Liability Coverage</h3>
              <p className="text-gray-600">
                Protects you financially if you're responsible for an accident that causes 
                injury or property damage to others.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Collision Coverage</h3>
              <p className="text-gray-600">
                Covers damage to your vehicle from accidents with other vehicles or objects, 
                regardless of who's at fault.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">
                Protection against theft, vandalism, natural disasters, and other non-collision 
                related damages.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
