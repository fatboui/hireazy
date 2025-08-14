import AnimatedSection from "../components/AnimatedSection";
import React from "react";
import { ArrowRight, Clock, Shield, Star, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Interviewers',
      description: 'Access a curated network of skilled interviewers from top tech companies'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Schedule interviews quickly and receive detailed feedback within 24 hours'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All interviewers are vetted and rated by previous companies'
    },
    {
      icon: Target,
      title: 'Tailored Matching',
      description: 'Get matched with interviewers who specialize in your specific tech stack'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'Hireazy transformed our hiring process. We found exceptional interviewers who helped us identify top talent quickly.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Engineering at StartupXYZ',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'The quality of interviews and feedback we receive is outstanding. It\'s like having senior engineers from FAANG companies on our team.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'VP of Engineering at InnovateTech',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      quote: 'Hireazy saved us countless hours and helped us build a stronger engineering team. The platform is intuitive and efficient.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Expert Interviewers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 animate-slide-up animate-stagger-1">
                In Minutes
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-slide-up animate-stagger-2">
              Connect with skilled interviewers from top tech companies to streamline your hiring process and find the best talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-3">
              <Link
                to="/register"
                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-primary"
              >
                Interviewer
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Company
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Hireazy Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional hiring is broken. Companies spend weeks searching for the right talent while great interviewers remain underutilized. We solve this by connecting companies with expert interviewers instantly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift">
                <div className="bg-red-100 rounded-lg p-3">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slow Hiring Process</h3>
                  <p className="text-gray-600">Companies take weeks to find and schedule qualified interviewers, losing top talent to competitors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover-lift">
                <div className="bg-red-100 rounded-lg p-3">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inconsistent Quality</h3>
                  <p className="text-gray-600">Internal team members lack specialized interview skills, leading to poor candidate experiences.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift">
                <div className="bg-green-100 rounded-lg p-3">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Matching</h3>
                  <p className="text-gray-600">Get matched with expert interviewers within minutes, not weeks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover-lift">
                <div className="bg-green-100 rounded-lg p-3">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Quality</h3>
                  <p className="text-gray-600">All interviewers are vetted professionals from top tech companies with proven track records.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple 3-step process connects you with the perfect interviewer for your needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: 'Post Your Requirements',
                description: 'Tell us about your role, tech stack, and interview type. Our AI matches you with the best interviewers.'
              },
              {
                step: 2,
                title: 'Schedule & Interview',
                description: 'Choose from available time slots and conduct interviews with expert interviewers via video call.'
              },
              {
                step: 3,
                title: 'Get Detailed Feedback',
                description: 'Receive comprehensive feedback and recommendations within 24 hours to make informed hiring decisions.'
              }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 200} className="text-center card-hover">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 hover-scale">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover-lift btn-primary"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hireazy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to conduct world-class interviews and hire the best talent.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 150} className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover">
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 hover-scale">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their hiring process with Hireazy.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 200} className="bg-white rounded-lg p-6 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 hover-scale"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current hover-scale" />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of companies that have already improved their hiring efficiency with Hireazy.
            </p>
            <Link
              to="/register"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-primary"
            >
              Get Started Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;