import { Shield, Briefcase, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface WorkersCompPageProps {
  onNavigate: (page: string) => void;
}

export function WorkersCompPage({ onNavigate }: WorkersCompPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXJzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzM4NTIxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Business office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-12 h-12" />
            <h1 className="text-4xl">Workers Compensation Insurance</h1>
          </div>
          <p className="text-4xl mb-6 max-w-2xl">
            Protect your business and your employees
          </p>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            Workers compensation insurance provides coverage for medical expenses and lost wages
            when employees are injured on the job. Keep your business compliant and your workers protected.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white shadow-xl">
            <h3 className="text-2xl mb-4 text-gray-800">Premium Audit</h3>
            <p className="text-gray-600 mb-6">
              Complete your annual premium audit to ensure accurate coverage and pricing
              based on your actual payroll.
            </p>
            <Button
              onClick={() => onNavigate('premium-audit')}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Start Premium Audit
            </Button>
          </Card>

          <Card className="p-8 bg-white shadow-xl opacity-50">
            <h3 className="text-2xl mb-4 text-gray-800">Get a Quote</h3>
            <p className="text-gray-600 mb-6">
              Find the right workers compensation coverage for your business at competitive rates.
            </p>
            <Button
              disabled
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Why Choose Affinity Workers Comp?</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Comprehensive Coverage</h3>
                <p className="text-gray-600">
                  Medical expenses, lost wages, and rehabilitation costs covered for workplace injuries and illnesses.
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
                <h3 className="text-xl mb-2 text-gray-800">Legal Compliance</h3>
                <p className="text-gray-600">
                  Stay compliant with state regulations and protect your business from costly penalties and lawsuits.
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
                <h3 className="text-xl mb-2 text-gray-800">Fast Claims Processing</h3>
                <p className="text-gray-600">
                  Quick response and efficient handling of workplace injury claims to support your employees when they need it most.
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
                <h3 className="text-xl mb-2 text-gray-800">Risk Management Support</h3>
                <p className="text-gray-600">
                  Access to safety resources and loss prevention programs to help reduce workplace injuries.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTczODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business team"
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
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Medical Expenses</h3>
              <p className="text-gray-600">
                Full coverage for medical treatment, hospital stays, and ongoing care related to workplace injuries.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Lost Wages</h3>
              <p className="text-gray-600">
                Compensation for time away from work due to workplace injuries or occupational illnesses.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-3 text-gray-800">Rehabilitation</h3>
              <p className="text-gray-600">
                Support for physical therapy, job retraining, and other rehabilitation services to help employees return to work.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
