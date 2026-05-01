import { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

interface QuestionnairePageProps {
  onNavigate: (page: string) => void;
}

export function QuestionnairePage({ onNavigate }: QuestionnairePageProps) {
  const [referenceNumber, setReferenceNumber] = useState('');

  // Generate random 12-digit reference number on component mount
  useEffect(() => {
    const generateReferenceNumber = () => {
      let number = '';
      for (let i = 0; i < 12; i++) {
        number += Math.floor(Math.random() * 10);
      }
      return number;
    };

    setReferenceNumber(generateReferenceNumber());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl text-gray-800">Voice Verification Questionnaire</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To complete your claim submission, please answer a few additional questions using the voice 
            questionnaire below. This helps expedite the processing of your claim.
          </p>
        </div>

        {/* Reference Number Display */}
        <Card className="p-6 mb-8 max-w-2xl mx-auto bg-blue-50 border-blue-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Your Claim Reference Number:</p>
            <p className="text-2xl text-blue-600 tracking-wider font-mono">{referenceNumber}</p>
            <p className="text-sm text-gray-500 mt-2">Please keep this number for your records</p>
          </div>
        </Card>

        {/* Questionnaire Container */}
        <div className="flex justify-center">
          <div id="questionnaire-container" className="shadow-2xl rounded-lg overflow-hidden">
            <iframe 
              id="voice-questionnaire"
              src={`https://guide.clearspeed.com/us?embedded=true&questionnaire_id=019bbc9b-da9c-752e-b677-e9009309b4fd&reference_number=${referenceNumber}`}
              width="420"
              height="640"
              allow="microphone; camera; geolocation; display-capture; fullscreen; autoplay"
              allowFullScreen={true}
              className="border-0"
              title="Voice Questionnaire"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-white">
            <h3 className="text-lg mb-4 text-gray-800">What to Expect:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">1.</span>
                <span>You'll be asked a series of questions about your claim and personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">2.</span>
                <span>Please answer each question clearly using your microphone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">3.</span>
                <span>The entire process typically takes 3-5 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">4.</span>
                <span>Once completed, your claim will be submitted for review</span>
              </li>
            </ul>
          </Card>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg mb-2 text-gray-800">Need Help?</h3>
            <p className="text-gray-600">
              If you experience any technical difficulties or have questions about the questionnaire, 
              please call our 24/7 claims support line at <span className="font-semibold">1-800-AFFINITY</span> 
              {' '}and reference your claim number: <span className="font-mono font-semibold">{referenceNumber}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Button 
              onClick={() => onNavigate('auto-claim')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              onClick={() => onNavigate('auto-insurance')}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Submit Claim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
