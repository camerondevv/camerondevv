import { useState } from 'react';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Application Center</h2>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-2 rounded-full mb-4">
        <div
          className="bg-green-500 h-2 rounded-full transition-all"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>
      
      {/* Step Content */}
      {step === 1 && (
        <div>
          <h3 className="text-lg mb-2">Personal Information</h3>
          {/* Your form inputs */}
        </div>
      )}
      {step === 2 && (
        <div>
          {/* Requirements */}
        </div>
      )}
      {/* More steps */}

      {/* Navigation Buttons */}
      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button className="bg-gray-600 px-4 py-2 rounded" onClick={prevStep}>Back</button>
        )}
        {step < 4 && (
          <button className="bg-green-600 px-4 py-2 rounded" onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
}