import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0C1B3A] text-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 lg:pb-12 border-b border-gray-700">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 lg:mb-6">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#1E5EFF] flex items-center justify-center">
                <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: '700' }}>MockExam</span>
            </div>
            <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">
              India's most trusted platform for government exam preparation with expert-designed mock tests and analytics.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-800 hover:bg-[#1E5EFF] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-800 hover:bg-[#1E5EFF] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-800 hover:bg-[#1E5EFF] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-800 hover:bg-[#1E5EFF] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>

          {/* Exams */}
          <div>
            <h4 className="mb-4 lg:mb-6">Popular Exams</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">SSC CGL</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">IBPS PO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Railway RRB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">UPSC CSE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">State PSC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Defence Exams</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFC947] transition-colors text-sm lg:text-base">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="mb-4 lg:mb-6">Contact Us</h4>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm lg:text-base">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 mt-1 flex-shrink-0" />
                <span>support@mockexam.in</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm lg:text-base">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm lg:text-base">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mt-1 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <p className="text-gray-400 text-sm lg:text-base">© 2025 MockExam. All rights reserved.</p>
          <p className="text-gray-400 text-sm lg:text-base">Made with ❤️ for aspirants</p>
        </div>
      </div>
    </footer>
  );
}
