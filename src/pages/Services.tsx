import React from 'react';
import { Users, FileText, Target, Clock, Shield, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'On-Demand Interviewers',
      description: 'Access a pool of vetted finance professionals to take interviews on your behalf.',
      features: [
        'Pre-screened finance experts',
        'Available within 24 hours',
        'Specialized in various finance roles',
        'Flexible scheduling options'
      ]
    },
    {
      icon: FileText,
      title: 'Structured Reports',
      description: 'Detailed evaluations with a standardized scoring format - no more vague feedback.',
      features: [
        'Comprehensive candidate assessment',
        'Standardized scoring metrics',
        'Detailed technical evaluation',
        'Clear hiring recommendations'
      ]
    },
    {
      icon: Target,
      title: 'Role-Based Interviewing',
      description: 'Each interview is tailored for Investment Banking, Corporate Finance, M&A, FP&A, Private Equity, Venture Capital, and more.',
      features: [
        'Investment Banking focus',
        'Corporate Finance expertise',
        'M&A transaction knowledge',
        'FP&A and modeling skills'
      ]
    },
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Get notified as interviews are completed and reports are ready.',
      features: [
        'Live interview status updates',
        'Instant completion notifications',
        'Real-time progress tracking',
        'Automated report delivery'
      ]
    },
    {
      icon: Calendar,
      title: 'Interview Scheduling & Automation',
      description: 'Smart scheduling with auto-reminders and calendar integrations.',
      features: [
        'Automated calendar sync',
        'Smart reminder system',
        'Timezone coordination',
        'Rescheduling flexibility'
      ]
    },
    {
      icon: Shield,
      title: 'Integrity Monitoring',
      description: 'Tools to detect cheating or impersonation during interviews.',
      features: [
        'Identity verification',
        'Proctoring capabilities',
        'Behavioral analysis',
        'Fraud detection systems'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Comprehensive interview solutions designed to streamline your finance hiring process with expert precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need for Finance Hiring
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From on-demand interviewers to detailed reporting, we provide all the tools you need to make confident hiring decisions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={index * 150}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 hover-scale">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our Services Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the right interviewer for your specific needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Define Requirements',
                description: 'Tell us about the role, required skills, and interview preferences.'
              },
              {
                step: 2,
                title: 'Match & Schedule',
                description: 'We match you with the perfect interviewer and schedule the session.'
              },
              {
                step: 3,
                title: 'Conduct Interview',
                description: 'Our expert conducts a thorough, role-specific interview.'
              },
              {
                step: 4,
                title: 'Receive Report',
                description: 'Get detailed feedback and hiring recommendations within 24 hours.'
              }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 200} className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 hover-scale">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Finance Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our interviewers specialize in various finance domains to ensure expert-level evaluation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Investment Banking',
              'Corporate Finance',
              'M&A Transactions',
              'FP&A & Modeling',
              'Private Equity',
              'Venture Capital',
              'Risk Management',
              'Financial Analysis'
            ].map((specialization, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-all duration-300 card-hover"
              >
                <h3 className="font-semibold text-gray-900">{specialization}</h3>
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
              Ready to Streamline Your Finance Hiring?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our expert interview services and make better hiring decisions faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover-lift btn-primary">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover-lift">
                Schedule a Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;