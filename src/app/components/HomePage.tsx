import { Shield, Home, Car, Heart, Briefcase } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1767600466928-652797e00824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwcm90ZWN0aW9uJTIwaW5zdXJhbmNlfGVufDF8fHx8MTc2ODUwODU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Family"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-32">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl">Affinity Insurance Company</h1>
          </div>
          <p className="text-5xl mb-6 max-w-2xl">
            Protecting what matters most to you and your family
          </p>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            With over 50 years of experience, we provide comprehensive auto, home, life, and workers compensation insurance solutions
            tailored to your needs. Trust us to be there when you need us most.
          </p>
        </div>
      </div>

      {/* Insurance Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12 text-gray-800">Our Insurance Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Auto Insurance Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1764267703510-de1aab0a9d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY291cGxlJTIwY2FyfGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy couple with car"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-800">Auto Insurance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Drive with confidence knowing you're protected. Our comprehensive auto insurance 
                covers accidents, theft, and more with competitive rates and excellent customer service.
              </p>
              <Button 
                onClick={() => onNavigate('auto')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Auto Insurance
              </Button>
            </div>
          </Card>

          {/* Home Insurance Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588031540641-146082d97620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHN1YnVyYmFufGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern suburban home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-800">Home Insurance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Protect your most valuable investment. Our home insurance policies provide 
                comprehensive coverage for your property, belongings, and liability protection.
              </p>
              <Button 
                onClick={() => onNavigate('home-insurance')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Home Insurance
              </Button>
            </div>
          </Card>

          {/* Life Insurance Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBhcmslMjBvdXRkb29yc3xlbnwxfHx8fDE3Mzg1MjEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy family outdoors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-800">Life Insurance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Secure your family's future. Our life insurance policies provide financial
                protection for your loved ones with affordable premiums and flexible coverage options.
              </p>
              <Button
                onClick={() => onNavigate('life-insurance')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Life Insurance
              </Button>
            </div>
          </Card>

          {/* Workers Comp Insurance Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXJzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzM4NTIxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business professionals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-800">Workers Comp</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Protect your business and employees. Our workers compensation insurance provides
                comprehensive coverage for workplace injuries with competitive rates and compliance support.
              </p>
              <Button
                onClick={() => onNavigate('workers-comp')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Workers Comp
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
