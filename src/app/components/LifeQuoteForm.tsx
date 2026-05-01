import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

interface LifeQuoteFormProps {
  onNavigate: (page: string) => void;
}

// Sample data for random generation
const firstNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'Robert', 'Jennifer', 'William', 'Amanda'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const streets = ['Oak Street', 'Maple Avenue', 'Cedar Lane', 'Pine Drive', 'Elm Road', 'Birch Boulevard', 'Willow Way', 'Ash Court'];
const cities = ['Springfield', 'Madison', 'Franklin', 'Georgetown', 'Arlington', 'Clayton', 'Hudson', 'Manchester'];
const states = ['CA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];

const coverageAmounts = ['250000', '500000', '750000', '1000000'];
const terms = ['10', '20', '30'];
const policyTypes = ['Term Life', 'Whole Life', 'Universal Life'];

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem<T>(arr: T[]): T {
  return arr[random(0, arr.length - 1)];
}

function generateRandomData() {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  
  return {
    name: `${firstName} ${lastName}`,
    dateOfBirth: `${random(1960, 1995)}-${String(random(1, 12)).padStart(2, '0')}-${String(random(1, 28)).padStart(2, '0')}`,
    address: `${random(100, 9999)} ${randomItem(streets)}`,
    city: randomItem(cities),
    state: randomItem(states),
    zipCode: `${random(10000, 99999)}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
    phone: `(${random(200, 999)}) ${random(200, 999)}-${random(1000, 9999)}`,
    coverageAmount: randomItem(coverageAmounts),
    policyType: randomItem(policyTypes),
    term: randomItem(terms),
    isSmoker: 'no',
    hasHealthConditions: 'no'
  };
}

export function LifeQuoteForm({ onNavigate }: LifeQuoteFormProps) {
  const [formData, setFormData] = useState(() => generateRandomData());

  useEffect(() => {
    setFormData(generateRandomData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Get Your Life Insurance Quote</h1>
          <p className="text-xl text-gray-600">
            Review your information below to receive your personalized quote
          </p>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Personal Information</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  readOnly
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input 
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  readOnly
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input 
                  id="address" 
                  value={formData.address}
                  readOnly
                  className="mt-2"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    value={formData.city}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input 
                    id="state" 
                    value={formData.state}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input 
                    id="zipCode" 
                    value={formData.zipCode}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Coverage Details</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="policyType">Policy Type</Label>
                <Input 
                  id="policyType" 
                  value={formData.policyType}
                  readOnly
                  className="mt-2"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="coverageAmount">Coverage Amount</Label>
                  <Input 
                    id="coverageAmount" 
                    value={`$${parseInt(formData.coverageAmount).toLocaleString()}`}
                    readOnly
                    className="mt-2"
                  />
                </div>
                {formData.policyType === 'Term Life' && (
                  <div>
                    <Label htmlFor="term">Term Length</Label>
                    <Input 
                      id="term" 
                      value={`${formData.term} Years`}
                      readOnly
                      className="mt-2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Health Questions */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Health Information</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-4 block">
                  Do you currently use tobacco products or have you used them in the past 12 months?
                </Label>
                <RadioGroup value={formData.isSmoker}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="smoker-yes" disabled />
                    <Label htmlFor="smoker-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="smoker-no" disabled />
                    <Label htmlFor="smoker-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Have you been diagnosed with or treated for any serious health conditions in the past 5 years?
                </Label>
                <RadioGroup value={formData.hasHealthConditions}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="health-yes" disabled />
                    <Label htmlFor="health-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="health-no" disabled />
                    <Label htmlFor="health-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <Button 
              onClick={() => onNavigate('life-insurance')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              onClick={() => onNavigate('life-quote-results')}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              Get My Quote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
