import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Clock, 
  Target, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star
} from 'lucide-react'

const HomePage = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Accelerate Hiring",
      description: "24/7 interviews & unlimited capacity"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Reliably Identify Talent",
      description: "Innovative solutions, predictive results"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Delight Candidates",
      description: "Fair, friendly, & engaging experience"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Reclaim Engineering Bandwidth",
      description: "Real interviews with expert interviewers"
    }
  ]

  const testimonials = [
    {
      quote: "Hireazy's Interviewing Cloud has been a game-changer for us. We've gotten back over 25,000 hours of developer time that we're able to spend innovating and building products.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp"
    },
    {
      quote: "We've been blown away that we're getting so much more information about our candidates, in such a standardized way, so much faster than we did on our own.",
      author: "Michael Chen",
      role: "Head of Engineering",
      company: "InnovateLab"
    },
    {
      quote: "I rely heavily on Hireazy because it is the one thing in our hiring process that is consistent and systematic.",
      author: "Emma Davis",
      role: "VP of Engineering",
      company: "StartupX"
    }
  ]

  const clientLogos = [
    "TechCorp", "InnovateLab", "StartupX", "DevSolutions", "CodeCraft", "BuildTech"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Hire with Confidence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hire world-class{' '}
                <span className="text-blue-600">tech talent</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Streamline your technical hiring process with Hireazy.co.uk – quality, efficiency, and equity at every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-4">
                  <h3 className="text-lg font-semibold mb-2">Live Technical Interview</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div>
                      <div className="w-20 h-2 bg-white/30 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Code quality assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Problem-solving skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Communication abilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hireazy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Hireazy: Your Partner in Technical Hiring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to hire great engineers with our innovative approach that combines human expertise with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Brief */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our innovative human + technology approach integrates seamlessly into your process and delivers value at each stage of the funnel. From initial screening to final insights, we ensure every step is optimized for success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Screen</h4>
                    <p className="text-gray-600">Automated candidate screening and assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Interview</h4>
                    <p className="text-gray-600">Live technical interviews with expert interviewers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Insights</h4>
                    <p className="text-gray-600">Comprehensive reports and hiring analytics</p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">End-to-End Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6" />
                    <span>Seamless integration with your ATS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6" />
                    <span>Real-time candidate feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6" />
                    <span>Detailed performance analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6" />
                    <span>Bias-free evaluation process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those who know best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Hireazy to find their next great engineers. 
            Start your journey to better technical hiring today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

