import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

interface QuoteFormProps {
  onNavigate: (page: string) => void;
}

// Sample data for random generation
const firstNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'Robert', 'Jennifer', 'William', 'Amanda'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const streets = ['Oak Street', 'Maple Avenue', 'Cedar Lane', 'Pine Drive', 'Elm Road', 'Birch Boulevard', 'Willow Way', 'Ash Court'];
const cities = ['Springfield', 'Madison', 'Franklin', 'Georgetown', 'Arlington', 'Clayton', 'Hudson', 'Manchester'];
const states = ['CA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];

const carMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Subaru', 'Mazda', 'Volkswagen', 'BMW'];
const toyotaModels = ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma'];
const hondaModels = ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey'];
const fordModels = ['F-150', 'Escape', 'Explorer', 'Mustang', 'Edge'];
const chevroletModels = ['Silverado', 'Equinox', 'Malibu', 'Tahoe', 'Traverse'];
const nissanModels = ['Altima', 'Rogue', 'Sentra', 'Pathfinder', 'Murano'];

const modelsByMake: { [key: string]: string[] } = {
  'Toyota': toyotaModels,
  'Honda': hondaModels,
  'Ford': fordModels,
  'Chevrolet': chevroletModels,
  'Nissan': nissanModels,
  'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona'],
  'Subaru': ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Ascent'],
  'Mazda': ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5'],
  'Volkswagen': ['Jetta', 'Passat', 'Tiguan', 'Atlas', 'Golf'],
  'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'X1']
};

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem<T>(arr: T[]): T {
  return arr[random(0, arr.length - 1)];
}

function generateRandomData() {
  const primaryFirstName = randomItem(firstNames);
  const primaryLastName = randomItem(lastNames);
  
  const vehicle1Make = randomItem(carMakes);
  const vehicle1Model = randomItem(modelsByMake[vehicle1Make]);
  const vehicle1Year = random(2015, 2024);
  
  const vehicle2Make = randomItem(carMakes);
  const vehicle2Model = randomItem(modelsByMake[vehicle2Make]);
  const vehicle2Year = random(2015, 2024);
  
  const driver2FirstName = randomItem(firstNames.filter(name => name !== primaryFirstName));
  const driver2LastName = randomItem(lastNames);
  
  return {
    name: `${primaryFirstName} ${primaryLastName}`,
    address: `${random(100, 9999)} ${randomItem(streets)}`,
    city: randomItem(cities),
    state: randomItem(states),
    zipCode: `${random(10000, 99999)}`,
    vehicle1: {
      year: vehicle1Year,
      make: vehicle1Make,
      model: vehicle1Model
    },
    vehicle2: {
      year: vehicle2Year,
      make: vehicle2Make,
      model: vehicle2Model
    },
    driver1: {
      name: `${primaryFirstName} ${primaryLastName}`,
      age: random(25, 65)
    },
    driver2: {
      name: `${driver2FirstName} ${driver2LastName}`,
      age: random(25, 65)
    },
    hasTickets: 'no',
    hasAccidents: 'no'
  };
}

export function QuoteForm({ onNavigate }: QuoteFormProps) {
  const [formData, setFormData] = useState(() => generateRandomData());

  useEffect(() => {
    setFormData(generateRandomData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Get Your Auto Insurance Quote</h1>
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
            </div>
          </div>

          {/* Vehicles */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Vehicles</h2>
            
            <div className="mb-6">
              <h3 className="text-xl mb-4 text-gray-700">Vehicle 1</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="vehicle1Year">Year</Label>
                  <Input 
                    id="vehicle1Year" 
                    value={formData.vehicle1.year}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="vehicle1Make">Make</Label>
                  <Input 
                    id="vehicle1Make" 
                    value={formData.vehicle1.make}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="vehicle1Model">Model</Label>
                  <Input 
                    id="vehicle1Model" 
                    value={formData.vehicle1.model}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-gray-700">Vehicle 2</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="vehicle2Year">Year</Label>
                  <Input 
                    id="vehicle2Year" 
                    value={formData.vehicle2.year}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="vehicle2Make">Make</Label>
                  <Input 
                    id="vehicle2Make" 
                    value={formData.vehicle2.make}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="vehicle2Model">Model</Label>
                  <Input 
                    id="vehicle2Model" 
                    value={formData.vehicle2.model}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Drivers */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Drivers</h2>
            
            <div className="mb-6">
              <h3 className="text-xl mb-4 text-gray-700">Driver 1</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="driver1Name">Name</Label>
                  <Input 
                    id="driver1Name" 
                    value={formData.driver1.name}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="driver1Age">Age</Label>
                  <Input 
                    id="driver1Age" 
                    value={formData.driver1.age}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-gray-700">Driver 2</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="driver2Name">Name</Label>
                  <Input 
                    id="driver2Name" 
                    value={formData.driver2.name}
                    readOnly
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="driver2Age">Age</Label>
                  <Input 
                    id="driver2Age" 
                    value={formData.driver2.age}
                    readOnly
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Driving History */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Driving History</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-4 block">
                  Have you or any drivers on this policy had any tickets in the past 3 years?
                </Label>
                <RadioGroup value={formData.hasTickets}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="tickets-yes" disabled />
                    <Label htmlFor="tickets-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="tickets-no" disabled />
                    <Label htmlFor="tickets-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Have you or any drivers on this policy had any accidents in the past 3 years?
                </Label>
                <RadioGroup value={formData.hasAccidents}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="accidents-yes" disabled />
                    <Label htmlFor="accidents-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="accidents-no" disabled />
                    <Label htmlFor="accidents-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <Button 
              onClick={() => onNavigate('auto')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              onClick={() => onNavigate('quote-results')}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Get My Quote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
