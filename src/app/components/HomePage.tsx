import { Shield, Home, Car, Heart, Briefcase, ArrowRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

interface Product {
  id: string;
  index: string;
  page: string;
  Icon: typeof Car;
  label: string;
  headline: string;
  body: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 'auto',
    index: '01',
    page: 'auto',
    Icon: Car,
    label: 'Auto',
    headline: 'Auto Insurance',
    body: 'Comprehensive coverage for accidents, theft, and the road ahead — at competitive rates.',
    image:
      'https://images.unsplash.com/photo-1764267703510-de1aab0a9d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY291cGxlJTIwY2FyfGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Couple with new car',
  },
  {
    id: 'home',
    index: '02',
    page: 'home-insurance',
    Icon: Home,
    label: 'Home',
    headline: 'Home Insurance',
    body: 'Protect your property, belongings, and liability with policies built around your home.',
    image:
      'https://images.unsplash.com/photo-1588031540641-146082d97620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHN1YnVyYmFufGVufDF8fHx8MTc2ODUyMTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Modern suburban home',
  },
  {
    id: 'life',
    index: '03',
    page: 'life-insurance',
    Icon: Heart,
    label: 'Life',
    headline: 'Life Insurance',
    body: 'Affordable premiums and flexible options that secure your family’s future.',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBhcmslMjBvdXRkb29yc3xlbnwxfHx8fDE3Mzg1MjEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Family in a park',
  },
  {
    id: 'workers',
    index: '04',
    page: 'workers-comp',
    Icon: Briefcase,
    label: 'Workers Comp',
    headline: 'Workers Compensation',
    body: 'Coverage for workplace injuries plus the compliance support your business needs.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXJzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzM4NTIxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Business professionals at work',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[600px] bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1767600466928-652797e00824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwcm90ZWN0aW9uJTIwaW5zdXJhbmNlfGVufDF8fHx8MTc2ODUwODU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pt-32">
          <div className="flex items-center gap-3 mb-8 text-sm uppercase tracking-[0.2em] opacity-90">
            <Shield className="w-4 h-4" />
            <span>Affinity Insurance Company</span>
          </div>
          <h1 className="text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl font-medium">
            Protecting what matters most to you and your family.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl opacity-85 leading-relaxed">
            Fifty years of comprehensive auto, home, life, and workers compensation coverage —
            built around the people we serve.
          </p>
          <button
            onClick={() => onNavigate('auto')}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full hover:gap-3 transition-all"
          >
            Get a quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-700 mb-4">
            Coverage
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
            Four ways we protect what you’ve built.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map(({ id, index, page, Icon, label, headline, body, image, alt }) => (
            <Card
              key={id}
              role="button"
              tabIndex={0}
              onClick={() => onNavigate(page)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(page);
                }
              }}
              className="group overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200/80 p-0"
            >
              <div className="sm:w-2/5 h-56 sm:h-auto overflow-hidden bg-gray-100">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="sm:w-3/5 p-7 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Icon className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
                  </div>
                  <span className="text-xs text-gray-400 tabular-nums">{index}</span>
                </div>
                <h3 className="text-2xl text-gray-900 mb-3 leading-tight">
                  {headline}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-blue-700 group-hover:gap-2.5 transition-all self-start text-sm">
                  Get a quote
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-3 gap-12 sm:gap-8">
            {[
              { figure: '50+', label: 'Years protecting families' },
              { figure: '1M+', label: 'Policyholders nationwide' },
              { figure: '24/7', label: 'Live claims support' },
            ].map(({ figure, label }) => (
              <div key={figure} className="flex flex-col">
                <div className="text-5xl text-blue-700 mb-2 tabular-nums">{figure}</div>
                <div className="text-gray-600 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
