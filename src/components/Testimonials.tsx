import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'SSC CGL 2024 Qualifier',
    image: 'https://images.unsplash.com/photo-1670223364099-eb3f7738cd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjB3b21hbnxlbnwxfHx8fDE3NjQzOTIzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    review: 'MockExam helped me identify my weak areas and improve systematically. The detailed analytics and real exam patterns made all the difference in my preparation.'
  },
  {
    name: 'Rahul Kumar',
    role: 'IBPS PO Selected',
    image: 'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzY0MzE1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    review: 'The quality of questions and instant feedback system is exceptional. I practiced over 500 mock tests and saw consistent improvement in my scores. Highly recommended!'
  },
  {
    name: 'Anjali Verma',
    role: 'Railway RRB Cleared',
    image: 'https://images.unsplash.com/photo-1654027879796-b9dee8caabb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQyOTYzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    review: 'Best platform for government exam preparation! The daily quizzes kept me consistent and the progress tracking feature motivated me to improve every day.'
  },
];

export function Testimonials() {
  return (
    <section className="py-12 lg:py-20 bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[#0C1B3A] mb-3 lg:mb-4">Success Stories</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
            Hear from students who cracked their government exams with MockExam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg lg:rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 lg:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-[#FFC947] text-[#FFC947]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-4 lg:mb-6 italic text-sm lg:text-base">"{testimonial.review}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3 lg:gap-4 pt-4 border-t border-gray-200">
                <ImageWithFallback 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-[#0C1B3A]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
