import { Search, PenTool, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose Exam',
    description: 'Select your target exam from our comprehensive list of government exams and mock tests.',
    step: '01'
  },
  {
    icon: PenTool,
    title: 'Attempt Test',
    description: 'Take the mock test in a real exam-like environment with timer and instant question navigation.',
    step: '02'
  },
  {
    icon: LineChart,
    title: 'View Analytics',
    description: 'Analyze your performance with detailed reports, compare with toppers, and get improvement tips.',
    step: '03'
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-[#0C1B3A] mb-3 lg:mb-4">How It Works</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
            Get started with your exam preparation in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#1E5EFF] via-[#1E5EFF] to-[#1E5EFF] hidden lg:block" style={{ top: '80px' }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center z-10" style={{ fontWeight: '700', fontSize: '0.875rem' }}>
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mt-10 lg:mt-12 mb-4 lg:mb-6 flex justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#1E5EFF] to-[#4a7eff] flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[#0C1B3A] mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
