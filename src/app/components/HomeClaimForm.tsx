import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

interface HomeClaimFormProps {
  onNavigate: (page: string) => void;
}

// Sample data for random generation
const damageTypes = [
  'Severe thunderstorm with high winds',
  'Hailstorm',
  'Tropical storm',
  'Winter storm with heavy snow and ice',
  'Tornado',
  'Hurricane-force winds'
];

const roofDamageDescriptions = [
  'Multiple shingles blown off by high winds, allowing water infiltration into attic space',
  'Large section of roof damaged by falling tree limb during storm, creating opening for water entry',
  'Hail damage to roof shingles compromised roof integrity, leading to extensive water leaks',
  'Wind-driven rain forced under damaged shingles, causing water damage to interior ceilings',
  'Severe wind damage lifted entire section of roof, exposing interior to heavy rainfall',
  'Storm damage to roof flashing and vents allowed significant water intrusion'
];

const waterDamageDetails = [
  'Water leaked through damaged roof into master bedroom, damaging ceiling drywall, insulation, and bedroom carpeting. Water also damaged furniture and personal belongings in the room.',
  'Extensive water damage to upstairs hallway ceiling and walls. Water traveled down interior walls causing damage to first floor living room ceiling and hardwood floors.',
  'Water penetration through compromised roof caused damage to attic insulation, second floor bedroom ceiling, and closet contents. Visible water staining and potential mold growth.',
  'Significant water intrusion damaged kitchen ceiling drywall, cabinets, and caused water pooling on tile floor. Some electrical fixtures also affected.',
  'Water leaked into multiple rooms including bedrooms and bathroom, damaging ceilings, walls, flooring, and various personal property including electronics and clothing.',
  'Roof leak caused extensive damage to upstairs bathroom ceiling, bedroom ceilings, and water traveled to first floor causing damage to family room ceiling and entertainment center.'
];

const locations = [
  'During severe weather event at primary residence',
  'At home during overnight storm',
  'While away from home - discovered damage upon return',
  'During evening thunderstorm at residence',
  'At property during afternoon storm system',
  'Overnight during severe weather - damage discovered next morning'
];

const times = ['2:30 AM', '3:45 AM', '11:20 PM', '1:15 AM', '4:00 AM', '10:45 PM', '12:30 AM', '2:00 AM'];

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem<T>(arr: T[]): T {
  return arr[random(0, arr.length - 1)];
}

function generateRandomDate() {
  const today = new Date();
  const daysAgo = random(1, 14);
  const date = new Date(today);
  date.setDate(date.getDate() - daysAgo);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function generateRandomData() {
  const damageType = randomItem(damageTypes);
  const roofDamage = randomItem(roofDamageDescriptions);
  const waterDamage = randomItem(waterDamageDetails);
  
  return {
    dateOfLoss: generateRandomDate(),
    timeOfLoss: randomItem(times),
    location: randomItem(locations),
    whatHappened: `${damageType} caused significant damage to roof and subsequent water damage to interior of home.\n\nRoof Damage:\n${roofDamage}\n\nWater Damage:\n${waterDamage}\n\nI have documented the damage with photographs and have taken steps to prevent further damage by placing tarps over the damaged roof area. A roofing contractor has been contacted for emergency repairs.`,
    needsHotel: 'no',
    priorDamage: 'no'
  };
}

export function HomeClaimForm({ onNavigate }: HomeClaimFormProps) {
  const [formData, setFormData] = useState(() => generateRandomData());

  useEffect(() => {
    setFormData(generateRandomData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">File a Home Insurance Claim</h1>
          <p className="text-xl text-gray-600">
            Please review the details of your claim below
          </p>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          {/* Loss Details */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Details of Loss</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="dateOfLoss">Date of Loss</Label>
                <Input 
                  id="dateOfLoss"
                  type="date"
                  value={formData.dateOfLoss}
                  readOnly
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="timeOfLoss">Time of Day</Label>
                <Input 
                  id="timeOfLoss"
                  value={formData.timeOfLoss}
                  readOnly
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location"
                  value={formData.location}
                  readOnly
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="whatHappened">What Happened? (Detailed Description)</Label>
                <Textarea 
                  id="whatHappened"
                  value={formData.whatHappened}
                  readOnly
                  className="mt-2 min-h-[300px] font-mono text-sm"
                />
              </div>
            </div>
          </div>

          {/* Additional Questions */}
          <div className="mb-8">
            <h2 className="text-2xl mb-6 text-gray-800">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-4 block">
                  Is the home safe to live in or do you need a hotel?
                </Label>
                <RadioGroup value={formData.needsHotel}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="hotel-yes" disabled />
                    <Label htmlFor="hotel-yes" className="cursor-pointer">Yes, I need a hotel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hotel-no" disabled />
                    <Label htmlFor="hotel-no" className="cursor-pointer">No, home is safe to live in</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Was there any un-repaired damage to your roof or to your property prior to the event reported in this claim?
                </Label>
                <RadioGroup value={formData.priorDamage}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="yes" id="prior-yes" disabled />
                    <Label htmlFor="prior-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="prior-no" disabled />
                    <Label htmlFor="prior-no" className="cursor-pointer">No</Label>
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
              onClick={() => onNavigate('home-claim-questionnaire')}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
