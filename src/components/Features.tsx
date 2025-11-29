import { BarChart3, FileText, Zap, BookOpen, Calendar, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track your performance with detailed analytics and identify weak areas to improve your preparation.',
    color: 'bg-blue-50 text-[#1E5EFF]'
  },
  {
    icon: FileText,
    title: 'Real Exam Pattern',
    description: 'Practice with tests designed to match the exact pattern and difficulty level of actual exams.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get your test results immediately with score breakdown and time analysis for each section.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: BookOpen,
    title: 'Detailed Solutions',
    description: 'Learn from comprehensive explanations for every question with tips and tricks from experts.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Calendar,
    title: 'Daily Quizzes',
    description: 'Stay sharp with daily practice quizzes covering all subjects and topics in your syllabus.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with visual graphs and personalized study recommendations.',
    color: 'bg-teal-50 text-teal-600'
  },
];

export function Features() {
  return (
    <section className="py-12 lg:py-20 bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[#0C1B3A] mb-3 lg:mb-4">Why Choose MockExam?</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
            Everything you need to excel in your government exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg lg:rounded-xl p-6 lg:p-8 hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl ${feature.color} flex items-center justify-center mb-4 lg:mb-6`}>
                <feature.icon className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-[#0C1B3A] mb-2 lg:mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
