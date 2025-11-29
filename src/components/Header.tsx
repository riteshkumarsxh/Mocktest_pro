import { BookOpen, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-3 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#1E5EFF] flex items-center justify-center">
            <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <span className="text-[#0C1B3A]" style={{ fontSize: '1.125rem', fontWeight: '700' }}>MockExam</span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-[#0C1B3A] hover:text-[#1E5EFF] transition-colors">Home</a>
          <a href="#exams" className="text-[#0C1B3A] hover:text-[#1E5EFF] transition-colors">Exams</a>
          <a href="#quiz" className="text-[#0C1B3A] hover:text-[#1E5EFF] transition-colors">Daily Quiz</a>
          <a href="#pricing" className="text-[#0C1B3A] hover:text-[#1E5EFF] transition-colors">Pricing</a>
          <a href="#contact" className="text-[#0C1B3A] hover:text-[#1E5EFF] transition-colors">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 lg:gap-3">
          <button className="px-3 py-2 lg:px-6 lg:py-2.5 text-[#1E5EFF] hover:bg-[#F5F7FA] rounded-lg transition-colors flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button className="px-3 py-2 lg:px-6 lg:py-2.5 bg-[#1E5EFF] text-white rounded-lg hover:bg-[#1651e0] transition-colors text-sm lg:text-base">
            Sign Up
          </button>
          <button className="lg:hidden p-2 text-[#0C1B3A]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
