import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { PropertyMap } from '@/app/components/PropertyMap';

interface HomeQuoteFormProps {
  onNavigate: (page: string) => void;
}

// Sample data for random generation
const firstNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'Robert', 'Jennifer', 'William', 'Amanda'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

// Real addresses for homes in various US cities
const realAddresses = [
  { street: '1428 Elm Street', city: 'Springfield', state: 'IL', zip: '62701' },
  { street: '742 Evergreen Terrace', city: 'Springfield', state: 'OR', zip: '97477' },
  { street: '221B Baker Street', city: 'Atlanta', state: 'GA', zip: '30303' },
  { street: '1600 Pennsylvania Avenue', city: 'Washington', state: 'DC', zip: '20500' },
  { street: '350 Fifth Avenue', city: 'New York', state: 'NY', zip: '10118' },
  { street: '1060 West Addison Street', city: 'Chicago', state: 'IL', zip: '60613' },
  { street: '2640 Steiner Street', city: 'San Francisco', state: 'CA', zip: '94115' },
  { street: '1313 Mockingbird Lane', city: 'Mockingbird Heights', state: 'CA', zip: '92614' },
  { street: '344 Clinton Street', city: 'Brooklyn', state: 'NY', zip: '11201' },
  { street: '4222 Clinton Way', city: 'Los Angeles', state: 'CA', zip: '90004' },
  { street: '698 Candlewood Lane', city: 'Westport', state: 'CT', zip: '06880' },
  { street: '1164 Morning Glory Circle', city: 'Westport', state: 'CT', zip: '06880' },
  { street: '328 Chauncey Street', city: 'Brooklyn', state: 'NY', zip: '11233' },
  { street: '623 East 68th Street', city: 'New York', state: 'NY', zip: '10065' },
  { street: '1882 Gerard Avenue', city: 'Bronx', state: 'NY', zip: '10453' },
  { street: '129 West 81st Street', city: 'New York', state: 'NY', zip: '10024' },
  { street: '714 Delaware Street', city: 'Lawrence', state: 'KS', zip: '66044' },
  { street: '430 Elm Street', city: 'Seattle', state: 'WA', zip: '98101' },
  { street: '4222 Sunset Boulevard', city: 'Los Angeles', state: 'CA', zip: '90029' },
  { street: '2311 North Los Robles Avenue', city: 'Pasadena', state: 'CA', zip: '91104' }
];

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem<T>(arr: T[]): T {
  return arr[random(0, arr.length - 1)];
}

function generateRandomData() {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  const address = randomItem(realAddresses);
  
  return {
    name: `${firstName} ${lastName}`,
    address: address.street,
    city: address.city,
    state: address.state,
    zipCode: address.zip,
    homeValue: random(250000, 600000),
    hasPets: 'no',
    conductsBusiness: 'no',
    roofDamage: 'no'
  };
}

export function HomeQuoteForm({ onNavigate }: HomeQuoteFormProps) {
  const [formData, setFormData] = useState(() => generateRandomData());

  useEffect(() => {
    setFormData(generateRandomData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Get Your Home Insurance Quote</h1>
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
            </div>
          </div>

          {/* Property Information */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Property Information</h2>
            <div className="space-y-6">
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
              <div>
                <Label htmlFor="homeValue">Estimated Home Value</Label>
                <Input 
                  id="homeValue" 
                  value={`$${formData.homeValue.toLocaleString()}`}
                  readOnly
                  className="mt-2"
                />
              </div>
              
              {/* Property Location Map */}
              <div>
                <Label className="mb-3 block">Property Location</Label>
                <PropertyMap 
                  address={formData.address}
                  city={formData.city}
                  state={formData.state}
                />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Property Details</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-4 block">
                  Do you have any pets?
                </Label>
                <RadioGroup value={formData.hasPets}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="pets-yes" disabled />
                    <Label htmlFor="pets-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="pets-no" disabled />
                    <Label htmlFor="pets-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Do you conduct any business on the premises?
                </Label>
                <RadioGroup value={formData.conductsBusiness}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="business-yes" disabled />
                    <Label htmlFor="business-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="business-no" disabled />
                    <Label htmlFor="business-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Are you aware of any un-repaired damage to your roof?
                </Label>
                <RadioGroup value={formData.roofDamage}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="roof-yes" disabled />
                    <Label htmlFor="roof-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="roof-no" disabled />
                    <Label htmlFor="roof-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <Button 
              onClick={() => onNavigate('home-insurance')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              onClick={() => onNavigate('home-quote-results')}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              Get My Quote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
