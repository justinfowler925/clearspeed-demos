import { Heart, Shield, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface LifeInsurancePageProps {
  onNavigate: (page: string) => void;
}

export function LifeInsurancePage({ onNavigate }: LifeInsurancePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBhcmslMjBvdXRkb29yc3xlbnwxfHx8fDE3Mzg1MjEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Happy family"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-12 h-12" />
            <h1 className="text-4xl">Life Insurance</h1>
          </div>
          <p className="text-4xl mb-6 max-w-2xl">
            Protect the ones you love most
          </p>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            Life insurance provides financial security for your loved ones when they need it most. 
            Get the coverage you need at a price you can afford.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">Get a Quote</h3>
            <p className="text-gray-600 mb-6">
              Get a personalized life insurance quote in minutes. Find out how affordable 
              protecting your family can be.
            </p>
            <Button 
              onClick={() => onNavigate('life-quote')}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Get Your Free Quote
            </Button>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Why Choose Affinity Life Insurance?</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Affordable Premiums</h3>
                <p className="text-gray-600">
                  Get quality coverage at competitive rates. We offer flexible payment options 
                  to fit any budget.
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
                <h3 className="text-xl mb-2 text-gray-800">Quick & Easy Application</h3>
                <p className="text-gray-600">
                  Apply online in minutes. No medical exam required for many applicants. 
                  Get approved quickly.
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
                <h3 className="text-xl mb-2 text-gray-800">Flexible Coverage Options</h3>
                <p className="text-gray-600">
                  Choose from term life, whole life, or universal life insurance. 
                  Customize your coverage to meet your family's needs.
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
                <h3 className="text-xl mb-2 text-gray-800">Compassionate Claims Support</h3>
                <p className="text-gray-600">
                  Our dedicated team provides caring support during difficult times, 
                  ensuring claims are processed quickly and efficiently.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0b2dldGhlciUyMGhvbWV8ZW58MXx8fHwxNzM4NTIxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Family together"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Coverage Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 text-gray-800">Life Insurance Coverage Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Term Life Insurance</h3>
              <p className="text-gray-600">
                Affordable coverage for a specific period (10, 20, or 30 years). 
                Perfect for covering mortgages, education costs, and income replacement.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Whole Life Insurance</h3>
              <p className="text-gray-600">
                Lifetime coverage with cash value accumulation. Provides both protection 
                and a savings component that grows over time.
              </p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Universal Life Insurance</h3>
              <p className="text-gray-600">
                Flexible permanent coverage with adjustable premiums and death benefits. 
                Build cash value with tax-deferred growth potential.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Common Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl mb-2 text-gray-800">How much life insurance do I need?</h3>
            <p className="text-gray-600">
              A common rule of thumb is 10-12 times your annual income. Consider your debts, 
              future expenses like college tuition, and your family's ongoing living expenses.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl mb-2 text-gray-800">Do I need a medical exam?</h3>
            <p className="text-gray-600">
              Many applicants qualify for coverage without a medical exam. We offer simplified 
              issue policies for qualifying individuals.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl mb-2 text-gray-800">Can I change my coverage later?</h3>
            <p className="text-gray-600">
              Yes! Many of our policies offer flexibility to adjust coverage as your needs change. 
              Contact us to discuss options for increasing or converting your policy.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
