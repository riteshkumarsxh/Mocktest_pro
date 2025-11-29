import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#F5F7FA] to-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-50 rounded-full text-[#1E5EFF] text-sm lg:text-base">
              🎯 India's Leading Mock Test Platform
            </div>
            <h1 className="text-[#0C1B3A]">
              Crack Government Exams with Confidence
            </h1>
            <p className="text-gray-600 text-base lg:text-lg">
              Practice with 10,000+ questions designed by experts. Get real-time analytics, detailed solutions, and personalized study plans to ace your government exam preparation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-[#FFC947] text-[#0C1B3A] rounded-lg hover:bg-[#f0ba35] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Free Test
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-[#1E5EFF] border-2 border-[#1E5EFF] rounded-lg hover:bg-[#1E5EFF] hover:text-white transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Browse Exams
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:gap-8 pt-4 lg:pt-6">
              <div>
                <div className="text-[#0C1B3A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>50K+</div>
                <p className="text-gray-600 text-sm lg:text-base">Active Students</p>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden lg:block"></div>
              <div>
                <div className="text-[#0C1B3A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>10K+</div>
                <p className="text-gray-600 text-sm lg:text-base">Practice Questions</p>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden lg:block"></div>
              <div>
                <div className="text-[#0C1B3A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>98%</div>
                <p className="text-gray-600 text-sm lg:text-base">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBvbmxpbmV8ZW58MXx8fHwxNzY0MzgwMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student studying online"
                className="w-full h-[280px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-lg lg:rounded-xl shadow-xl p-4 lg:p-6 max-w-[200px] lg:max-w-xs">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl lg:text-2xl">✓</span>
                </div>
                <div>
                  <div className="text-[#0C1B3A]" style={{ fontWeight: '600' }}>85% Score</div>
                  <p className="text-gray-600 text-xs lg:text-sm">Great improvement!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
