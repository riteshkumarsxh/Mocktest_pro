import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1E5EFF] via-[#3d6fff] to-[#5a83ff] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 text-center relative z-10">
        <h2 className="text-white mb-4 lg:mb-6">
          Ready to Boost Your Score?
        </h2>
        <p className="text-white text-base lg:text-lg mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto px-4">
          Join thousands of successful students who achieved their dream government job with MockExam
        </p>
        <button className="px-8 py-4 lg:px-12 lg:py-5 bg-[#FFC947] text-[#0C1B3A] rounded-lg hover:bg-[#f0ba35] transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-2 lg:gap-3 mx-auto text-base lg:text-xl" style={{ fontWeight: '600' }}>
          Start Your Free Mock Test
          <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        
        <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:justify-center lg:gap-8 mt-8 lg:mt-12 max-w-lg lg:max-w-none mx-auto">
          <div className="text-white">
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>100%</div>
            <p className="opacity-90 text-sm lg:text-base">Free Forever</p>
          </div>
          <div className="w-px h-12 lg:h-16 bg-white opacity-30 hidden lg:block"></div>
          <div className="text-white">
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>No</div>
            <p className="opacity-90 text-sm lg:text-base">Credit Card</p>
          </div>
          <div className="w-px h-12 lg:h-16 bg-white opacity-30 hidden lg:block"></div>
          <div className="text-white">
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>24/7</div>
            <p className="opacity-90 text-sm lg:text-base">Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}
