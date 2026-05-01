import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface HomeClaimQuestionnaireProps {
  onNavigate: (page: string) => void;
}

function generateReferenceNumber(): string {
  let number = '';
  for (let i = 0; i < 12; i++) {
    number += Math.floor(Math.random() * 10);
  }
  return number;
}

export function HomeClaimQuestionnaire({ onNavigate }: HomeClaimQuestionnaireProps) {
  const [referenceNumber, setReferenceNumber] = useState(() => generateReferenceNumber());

  useEffect(() => {
    setReferenceNumber(generateReferenceNumber());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Voice Verification</h1>
          <p className="text-xl text-gray-600">
            To complete your claim submission, please answer a few additional questions using the voice questionnaire below. This helps expedite the processing of your claim.
          </p>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          <div className="mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-800">
                <strong>Reference Number:</strong> {referenceNumber}
              </p>
              <p className="text-sm text-red-600 mt-2">
                Please save this reference number for your records
              </p>
            </div>
          </div>

          {/* Embedded Voice Verification Widget */}
          <div id="questionnaire-container" className="flex justify-center mb-8">
            <iframe 
              id="voice-questionnaire"
              src={`https://guide.clearspeed.com/us?embedded=true&questionnaire_id=019bbc9b-3a96-710c-9b65-50b400bcb2e3&reference_number=${referenceNumber}`}
              width="420"
              height="640"
              allow="microphone; camera; geolocation; display-capture; fullscreen; autoplay"
              allowFullScreen={true}
              className="border border-gray-300 rounded-lg shadow-md"
            />
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p><strong>What to expect:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You'll be asked a series of questions about your claim</li>
              <li>Respond verbally and clearly to each question</li>
              <li>The process typically takes 3-5 minutes</li>
              <li>Your responses will be analyzed for verification purposes</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t mt-8">
            <Button 
              onClick={() => onNavigate('home-claim')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button 
              onClick={() => onNavigate('home-insurance')}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Complete Claim Submission
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
