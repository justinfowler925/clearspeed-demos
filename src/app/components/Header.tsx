import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Auto Insurance', page: 'auto' },
    { label: 'Home Insurance', page: 'home-insurance' },
    { label: 'Life Insurance', page: 'life-insurance' },
    { label: 'Workers Comp', page: 'workers-comp' },
    { label: 'File a Claim', page: 'claims-type' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Shield className="w-10 h-10 text-blue-600 fill-blue-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl text-gray-800 leading-tight tracking-tight">
                AFFINITY
              </span>
              <span className="text-xs text-blue-600 leading-tight tracking-wide">
                INSURANCE COMPANY
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm transition-colors hover:text-blue-600 ${
                  currentPage === item.page || 
                  (item.page === 'claims-type' && (currentPage === 'theft-claim' || currentPage === 'questionnaire'))
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => onNavigate('auto')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 transition-colors hover:bg-gray-50 ${
                    currentPage === item.page
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    onNavigate('auto');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
