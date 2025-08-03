import React from 'react';
import { CheckCircle, Users, Calendar, FileText, Clock, Star, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Post Your Requirements',
      description: 'Tell us about your role, required skills, and interview preferences. Our AI will match you with the perfect interviewers.',
      icon: FileText,
      details: [
        'Job title and description',
        'Required technical skills',
        'Interview type (technical, behavioral, system design)',
        'Experience level needed',
        'Preferred interview duration'
      ]
    },
    {
      number: 2,
      title: 'Browse & Select Interviewers',
      description: 'Review profiles of qualified interviewers from top tech companies. See their ratings, experience, and availability.',
      icon: Users,
      details: [
        'View interviewer profiles and ratings',
        'Check availability and pricing',
        'Read reviews from other companies',
        'Filter by skills and experience',
        'Message interviewers directly'
      ]
    },
    {
      number: 3,
      title: 'Schedule & Conduct',
      description: 'Book your preferred time slot and conduct the interview via video call. Our platform provides all necessary tools.',
      icon: Calendar,
      details: [
        'Real-time calendar integration',
        'Video conferencing platform',
        'Code sharing and collaboration tools',
        'Interview recording (optional)',
        'Technical assessment templates'
      ]
    },
    {
      number: 4,
      title: 'Get Detailed Feedback',
      description: 'Receive comprehensive feedback and recommendations within 24 hours to make informed hiring decisions.',
      icon: Star,
      details: [
        'Technical skills assessment',
        'Communication evaluation',
        'Problem-solving analysis',
        'Cultural fit assessment',
        'Hiring recommendation with reasoning'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'Reduce hiring time from weeks to days with instant access to qualified interviewers',
      icon: Clock
    },
    {
      title: 'Consistent Quality',
      description: 'Every interviewer is vetted and rated, ensuring consistent high-quality experiences',
      icon: Star
    },
    {
      title: 'Expert Insights',
      description: 'Get feedback from engineers at top companies who know what good looks like',
      icon: Users
    },
    {
      title: 'Better Decisions',
      description: 'Make data-driven hiring decisions with detailed assessments and recommendations',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Hireazy Works
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Our simple 4-step process connects you with expert interviewers and helps you make better hiring decisions faster.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{step.number}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`bg-gray-50 rounded-lg p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                        <step.icon className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Step {step.number}</h3>
                      <p className="text-gray-600">{step.title}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <ArrowRight className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hireazy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to solve the most common pain points in technical hiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pay only for the interviews you need. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Junior Level</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$80-120</div>
              <p className="text-gray-600 mb-6">Per interview hour</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 0-3 years experience</li>
                <li>• Basic technical skills</li>
                <li>• Standard feedback report</li>
              </ul>
            </div>

            <div className="bg-blue-600 rounded-lg p-8 text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mid-Senior Level</h3>
              <div className="text-3xl font-bold mb-4">$120-180</div>
              <p className="text-blue-100 mb-6">Per interview hour</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• 3-8 years experience</li>
                <li>• Advanced technical skills</li>
                <li>• Detailed feedback report</li>
                <li>• System design capability</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff+ Level</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$180-250</div>
              <p className="text-gray-600 mb-6">Per interview hour</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 8+ years experience</li>
                <li>• Expert-level skills</li>
                <li>• Comprehensive report</li>
                <li>• Leadership assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already transformed their hiring process with Hireazy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Start Hiring Now
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;