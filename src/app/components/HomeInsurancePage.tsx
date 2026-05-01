import { Shield, Home, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface HomeInsurancePageProps {
  onNavigate: (page: string) => void;
}

export function HomeInsurancePage({ onNavigate }: HomeInsurancePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1588031540641-146082d97620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHN1YnVyYmFufGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern home"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-12 h-12" />
            <h1 className="text-4xl">Home Insurance</h1>
          </div>
          <p className="text-4xl mb-6 max-w-2xl">
            Protect your home and everything in it
          </p>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            Your home is more than just a building—it's where memories are made. 
            Our comprehensive home insurance ensures it's always protected.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">Get a Quote</h3>
            <p className="text-gray-600 mb-6">
              Find the perfect coverage for your home at a price that fits your budget. 
              Get started today.
            </p>
            <Button 
              onClick={() => onNavigate('home-quote')}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Get Your Free Quote
            </Button>
          </Card>
          
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">File a Claim</h3>
            <p className="text-gray-600 mb-6">
              Experienced damage to your home? File a claim quickly and easily. 
              We're here to help you recover.
            </p>
            <Button 
              onClick={() => onNavigate('home-claim')}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              File a Claim Now
            </Button>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Why Choose Affinity Home Insurance?</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Complete Property Protection</h3>
                <p className="text-gray-600">
                  Coverage for your home structure, personal belongings, and additional living 
                  expenses if you need to relocate temporarily.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Liability Protection</h3>
                <p className="text-gray-600">
                  If someone is injured on your property or you accidentally damage someone 
                  else's property, we've got you covered.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Fast Claims Processing</h3>
                <p className="text-gray-600">
                  When disaster strikes, you need help fast. Our streamlined claims process 
                  gets you the support you need quickly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Customizable Coverage</h3>
                <p className="text-gray-600">
                  Every home is unique. Tailor your policy with add-ons like flood insurance, 
                  earthquake coverage, and more.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY4NDM3ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy family"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Coverage Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 text-gray-800">What's Covered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Dwelling Coverage</h3>
              <p className="text-gray-600">
                Protects the physical structure of your home from covered perils like fire, 
                wind, hail, and more.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Personal Property</h3>
              <p className="text-gray-600">
                Covers your belongings including furniture, electronics, clothing, and other 
                personal items.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Additional Living Expenses</h3>
              <p className="text-gray-600">
                If your home becomes uninhabitable, we'll cover hotel stays, meals, and other 
                necessary expenses.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}