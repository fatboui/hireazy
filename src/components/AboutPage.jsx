import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  Target, 
  Shield, 
  Lightbulb,
  Search,
  MessageSquare,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Clock
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Fairness",
      description: "We eliminate bias and ensure every candidate gets an equal opportunity to showcase their skills."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expertise",
      description: "Our network of expert Interview Engineers brings years of technical experience to every assessment."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "We continuously evolve our platform with the latest technology to improve the hiring experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Impact",
      description: "We're committed to making a positive impact on the tech industry by connecting great talent with great companies."
    }
  ]

  const processSteps = [
    {
      step: "01",
      icon: <Search className="h-12 w-12 text-white" />,
      title: "Candidate Screening",
      description: "Our platform conducts initial technical assessments and behavioral screenings to ensure a strong foundational fit.",
      features: ["24/7 availability", "Standardized evaluations", "Automated scoring", "Skill-based filtering"]
    },
    {
      step: "02",
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      title: "Technical Interviews",
      description: "Candidates undergo live, standardized technical interviews conducted by our network of expert Interview Engineers.",
      features: ["Real-time coding", "Problem-solving assessment", "In-depth technical evaluation", "Behavioral analysis"]
    },
    {
      step: "03",
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      title: "Insights & Analytics",
      description: "Receive comprehensive interview reports, performance analytics, and actionable insights to make informed hiring decisions.",
      features: ["Benchmarking data", "Predictive analytics", "Reduced bias metrics", "Performance comparisons"]
    },
    {
      step: "04",
      icon: <Settings className="h-12 w-12 text-white" />,
      title: "Seamless Integration",
      description: "Our solution integrates smoothly with your ATS and recruitment pipeline, ensuring a frictionless experience.",
      features: ["ATS integration", "API connectivity", "Custom workflows", "Real-time updates"]
    }
  ]

  const benefits = [
    "Faster hiring cycles",
    "Higher quality hires",
    "Reduced unconscious bias",
    "Reclaimed engineering time",
    "Improved candidate experience",
    "Data-driven decisions"
  ]

  const stats = [
    { number: "50k+", label: "Technical interviews conducted" },
    { number: "25+", label: "Countries where we've interviewed" },
    { number: "500+", label: "Trained & vetted Interview Engineers" },
    { number: "95%", label: "Client satisfaction rate" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Hireazy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in a world where every company can easily access the best technical talent, 
            and every engineer can find their ideal role.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Hireazy.co.uk, we believe in a world where every company can easily access the best technical talent, 
                and every engineer can find their ideal role. Our mission is to revolutionize technical hiring through 
                fairness, efficiency, and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're building the future of technical hiring by combining human expertise with cutting-edge technology 
                to create an interviewing experience that's fair, efficient, and insightful for everyone involved.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Story</h3>
                <p className="text-blue-100 mb-4">
                  Founded by a team of engineers and hiring experts who experienced firsthand the challenges 
                  of technical recruiting, Hireazy was born from a simple idea: there has to be a better way.
                </p>
                <p className="text-blue-100">
                  Today, we're proud to serve hundreds of companies worldwide, helping them find exceptional 
                  talent while giving candidates the fair and engaging interview experience they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach technical hiring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hireazy.co.uk provides an end-to-end solution for your technical hiring needs. 
              Here's how our Interviewing Cloud works to deliver top talent and save your team valuable time.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 rounded-full p-4 mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600">Step {step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl font-bold text-white/20 mb-4">{step.step}</div>
                    <h4 className="text-xl font-semibold mb-4">{step.title} Features</h4>
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hireazy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach delivers measurable benefits for your hiring process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have transformed their technical hiring with Hireazy. 
                See how we can help you build your dream engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Global Impact
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're proud to be the world's leader in technical interviewing, 
            helping companies and candidates connect across the globe.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

