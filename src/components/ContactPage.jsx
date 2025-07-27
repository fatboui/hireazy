import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      content: "info@hireazy.co.uk",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Us",
      content: "+44 20 7946 0958",
      description: "Monday to Friday, 9AM to 6PM GMT"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Visit Us",
      content: "London, United Kingdom",
      description: "Schedule a meeting at our office"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM GMT",
      description: "We're here to help during business hours"
    }
  ]

  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "General Inquiries",
      description: "Questions about our services, pricing, or how we can help your company."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Partnership Opportunities",
      description: "Interested in partnering with us or exploring collaboration opportunities."
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: "Technical Support",
      description: "Need help with our platform or have technical questions about integration."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch with <span className="text-blue-600">Hireazy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you have questions about our services, need support, or want to explore partnership opportunities, 
            we're here to help. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1"
                          rows={5}
                          placeholder="Tell us more about your needs..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Quick Response Promise</h3>
                  </div>
                  <p className="text-gray-700">
                    We understand that time is valuable. That's why we commit to responding to all inquiries 
                    within 24 hours during business days. For urgent matters, don't hesitate to call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the type of support you need, and we'll connect you with the right team member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Hireazy
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How quickly can we get started with Hireazy?
                </h3>
                <p className="text-gray-600">
                  We can typically have you up and running within 48 hours of your initial consultation. 
                  Our team will work with you to configure the platform according to your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you integrate with existing ATS systems?
                </h3>
                <p className="text-gray-600">
                  Yes, we integrate with most major ATS platforms including Greenhouse, Lever, Workday, 
                  and many others. Our API also allows for custom integrations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What types of technical roles can you help us hire for?
                </h3>
                <p className="text-gray-600">
                  We support hiring for all types of software engineering roles, including full-stack developers, 
                  backend engineers, frontend specialists, mobile developers, DevOps engineers, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is there a minimum commitment or contract length?
                </h3>
                <p className="text-gray-600">
                  We offer flexible plans to suit different needs. While we have monthly options available, 
                  most clients find the best value in our quarterly and annual plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We look forward to hearing from you and helping you transform your technical hiring process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

