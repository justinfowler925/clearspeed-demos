import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

interface TheftClaimFormProps {
  onNavigate: (page: string) => void;
}

// Helper functions to generate random data
const generateRandomVehicle = () => {
  const makes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Nissan', 'Tesla'];
  const models = ['Accord', 'Camry', 'F-150', 'Silverado', 'X5', 'E-Class', 'Altima', 'Model 3'];
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const colors = ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray', 'Green'];
  
  const make = makes[Math.floor(Math.random() * makes.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  const year = years[Math.floor(Math.random() * years.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `${year} ${color} ${make} ${model}`;
};

const generateRandomLocation = () => {
  const locations = [
    '123 Main Street, Downtown Shopping Center',
    '456 Oak Avenue, Residential Area',
    '789 Park Boulevard, City Park Parking Lot',
    '321 Commerce Drive, Office Complex',
    '654 Elm Street, Apartment Complex',
    '987 Sunset Boulevard, Shopping Mall',
    '147 Harbor Road, Waterfront District',
    '258 University Avenue, Campus Parking'
  ];
  
  return locations[Math.floor(Math.random() * locations.length)];
};

const generateRandomDateTime = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7) + 1;
  const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  
  const dateStr = date.toISOString().split('T')[0];
  
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  return { date: dateStr, time: timeStr };
};

const generateRandomPoliceReport = () => {
  const prefix = ['PD', 'CR', 'IR', 'RP'];
  const number = Math.floor(Math.random() * 900000) + 100000;
  
  return `${prefix[Math.floor(Math.random() * prefix.length)]}-${number}`;
};

const generateRandomDetails = () => {
  const details = [
    'I parked my vehicle in the lot around 9 AM and when I returned at 5 PM, it was gone. I checked the entire parking area and confirmed it was not towed. I immediately contacted the local police department and filed a report. The vehicle was locked and had an alarm system installed. There were no suspicious individuals noticed in the area earlier.',
    'Vehicle was parked overnight in front of my residence. When I came out in the morning to go to work, I discovered the vehicle was missing. Neighbors did not see or hear anything suspicious during the night. I filed a police report immediately and checked with local towing companies to confirm it was not towed for any violations.',
    'Left the vehicle in a public parking garage while shopping. Upon returning approximately 2 hours later, the vehicle was no longer in the parking space. Security footage is being reviewed by authorities. No broken glass or signs of forced entry were found in the area. Police report has been filed and investigating officers have been assigned to the case.',
    'Parked the car in my workplace parking lot in the morning. During lunch break noticed the vehicle was missing. Checked with building security who confirmed no authorized towing. Filed police report and provided them with vehicle tracking information. The lot has security cameras which are being reviewed by law enforcement.'
  ];
  
  return details[Math.floor(Math.random() * details.length)];
};

export function TheftClaimForm({ onNavigate }: TheftClaimFormProps) {
  const [formData, setFormData] = useState({
    vehicle: '',
    location: '',
    date: '',
    time: '',
    policeReport: '',
    details: ''
  });

  // Generate random data on component mount
  useEffect(() => {
    const dateTime = generateRandomDateTime();
    setFormData({
      vehicle: generateRandomVehicle(),
      location: generateRandomLocation(),
      date: dateTime.date,
      time: dateTime.time,
      policeReport: generateRandomPoliceReport(),
      details: generateRandomDetails()
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Vehicle Theft Claim</h1>
          <p className="text-xl text-gray-600">
            Please provide the following information about your stolen vehicle
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            {/* Vehicle Description */}
            <div>
              <Label htmlFor="vehicle">Vehicle Description</Label>
              <Input
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="mt-2"
                placeholder="e.g., 2022 Black Honda Accord"
              />
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Location Where Vehicle Was Stolen</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-2"
                placeholder="e.g., 123 Main Street, Downtown"
              />
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Police Report */}
            <div>
              <Label htmlFor="policeReport">Police Report Number</Label>
              <Input
                id="policeReport"
                name="policeReport"
                value={formData.policeReport}
                onChange={handleChange}
                className="mt-2"
                placeholder="e.g., PD-123456"
              />
            </div>

            {/* Details */}
            <div>
              <Label htmlFor="details">Details - What Happened?</Label>
              <Textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="mt-2 min-h-[200px]"
                placeholder="Please describe the circumstances of the theft..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="button"
                onClick={() => onNavigate('questionnaire')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              >
                Next: Complete Voice Questionnaire
              </Button>
            </div>
          </form>
        </Card>

        {/* Info Box */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg mb-2 text-gray-800">Next Steps</h3>
          <p className="text-gray-600">
            After clicking "Next", you'll be asked to complete a short voice questionnaire 
            to verify some additional details about your claim. This helps us process your 
            claim faster and more securely.
          </p>
        </div>
      </div>
    </div>
  );
}
