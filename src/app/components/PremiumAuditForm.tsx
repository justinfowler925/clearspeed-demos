import { useState, useEffect } from 'react';
import { Building, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';

interface PremiumAuditFormProps {
  onNavigate: (page: string) => void;
}

export function PremiumAuditForm({ onNavigate }: PremiumAuditFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    auditYear: '',
    salesPayroll: '',
    officePayroll: ''
  });

  useEffect(() => {
    // Generate random payroll amounts between 100,000 and 1,000,000
    const generateRandomPayroll = () => {
      return Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000).toLocaleString();
    };

    // Pre-populate form with fictitious data
    setFormData({
      companyName: 'Acme Corporation',
      address: '1234 Business Park Drive',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      auditYear: '2026',
      salesPayroll: generateRandomPayroll(),
      officePayroll: generateRandomPayroll()
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('premium-audit-questionnaire');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl text-gray-800">Annual Premium Audit</h1>
          </div>
          <p className="text-xl text-gray-600">
            Please review and verify your company information and annual payroll data for the audit period.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8 mb-6">
            <h2 className="text-2xl mb-6 text-gray-800">Company Information</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    maxLength={2}
                    required
                  />
                </div>
              </div>

              <div className="w-1/2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  required
                />
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl text-gray-800">Audit Period & Payroll Information</h2>
            </div>

            <div className="space-y-6">
              <div className="w-1/2">
                <Label htmlFor="auditYear">Audit Year</Label>
                <Input
                  id="auditYear"
                  value={formData.auditYear}
                  onChange={(e) => setFormData({ ...formData, auditYear: e.target.value })}
                  required
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <h3 className="text-lg text-gray-800 mb-4">Annual Payroll by Classification Code</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salesPayroll">
                      Sales - Class Code 8742
                    </Label>
                    <div className="mt-1 flex items-center">
                      <span className="text-gray-600 mr-2">$</span>
                      <Input
                        id="salesPayroll"
                        value={formData.salesPayroll}
                        onChange={(e) => setFormData({ ...formData, salesPayroll: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="officePayroll">
                      Office Staff - Class Code 8810
                    </Label>
                    <div className="mt-1 flex items-center">
                      <span className="text-gray-600 mr-2">$</span>
                      <Input
                        id="officePayroll"
                        value={formData.officePayroll}
                        onChange={(e) => setFormData({ ...formData, officePayroll: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Total Annual Payroll:</span>
                    <span className="text-2xl text-purple-600">
                      ${(
                        parseInt(formData.salesPayroll.replace(/,/g, '') || '0') +
                        parseInt(formData.officePayroll.replace(/,/g, '') || '0')
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg mb-2 text-gray-800">Important Information</h3>
            <p className="text-gray-600">
              After submitting this form, you'll be asked to complete a voice verification questionnaire
              to confirm the accuracy of your audit information. This helps ensure the integrity of your
              workers compensation premium calculation.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => onNavigate('workers-comp')}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              Submit Audit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
