import { Car, Home, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface ClaimsTypePageProps {
  onNavigate: (page: string) => void;
}

export function ClaimsTypePage({ onNavigate }: ClaimsTypePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl text-gray-800">File a Claim</h1>
          </div>
          <p className="text-xl text-gray-600">
            Select the type of claim you would like to file
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Auto Insurance Claim */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl text-gray-800">Auto Insurance Claim</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Report a vehicle theft incident and begin the claims process.
              We'll guide you through every step to help you get back on the road.
            </p>
            <div className="mb-6">
              <h3 className="text-sm text-gray-800 mb-2">What You'll Need:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Vehicle information and description</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Location and time of theft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Police report information</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => onNavigate('theft-claim')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              File Auto Claim
            </Button>
          </Card>

          {/* Home Insurance Claim */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-10 h-10 text-red-600" />
              <h2 className="text-2xl text-gray-800">Home Insurance Claim</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Report storm or water damage to your property. Our team will help you
              assess the damage and start the recovery process quickly.
            </p>
            <div className="mb-6">
              <h3 className="text-sm text-gray-800 mb-2">What You'll Need:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Property information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Storm damage details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Water damage description</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => onNavigate('home-claim')}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              File Home Claim
            </Button>
          </Card>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-5xl mx-auto">
          <h3 className="text-lg mb-2 text-gray-800">Need Help?</h3>
          <p className="text-gray-600">
            If you're unsure which type of claim to file or need assistance, please call our
            24/7 claims hotline at <span className="font-semibold">1-800-AFFINITY</span>.
            Our claims specialists are ready to help you.
          </p>
        </div>
      </div>
    </div>
  );
}