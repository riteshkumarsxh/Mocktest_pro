import { Briefcase, Building2, Train, Landmark, Scale, MapPin, Shield, GraduationCap } from 'lucide-react';

const exams = [
  { icon: Briefcase, title: 'SSC', description: 'Staff Selection Commission', color: 'bg-blue-50 text-[#1E5EFF]' },
  { icon: Building2, title: 'Banking', description: 'IBPS, SBI, RBI Exams', color: 'bg-green-50 text-green-600' },
  { icon: Train, title: 'Railway', description: 'RRB, RPF Recruitment', color: 'bg-purple-50 text-purple-600' },
  { icon: Landmark, title: 'UPSC', description: 'Civil Services Exam', color: 'bg-red-50 text-red-600' },
  { icon: Scale, title: 'BPSC', description: 'Bihar Public Service', color: 'bg-orange-50 text-orange-600' },
  { icon: MapPin, title: 'State Exams', description: 'Various State PSC', color: 'bg-teal-50 text-teal-600' },
  { icon: Shield, title: 'Defence', description: 'CDS, NDA, AFCAT', color: 'bg-indigo-50 text-indigo-600' },
  { icon: GraduationCap, title: 'Teaching', description: 'CTET, KVS, DSSSB', color: 'bg-pink-50 text-pink-600' },
];

export function ExamCategories() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[#0C1B3A] mb-3 lg:mb-4">Popular Exam Categories</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
            Choose from a wide range of government exams and start your preparation journey today
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {exams.map((exam) => (
            <div
              key={exam.title}
              className="group bg-white border-2 border-gray-200 rounded-lg lg:rounded-xl p-4 lg:p-6 hover:border-[#1E5EFF] hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-lg ${exam.color} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}>
                <exam.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-[#0C1B3A] mb-1 lg:mb-2">{exam.title}</h3>
              <p className="text-gray-600 text-xs lg:text-sm">{exam.description}</p>
              <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-200">
                <span className="text-[#1E5EFF] text-xs lg:text-sm group-hover:underline">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
