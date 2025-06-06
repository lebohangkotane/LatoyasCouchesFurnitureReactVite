import React from 'react';
import { Sofa, Clock, MapPin, Phone, Mail, ArrowRight, Hammer, Sparkles, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Phone size={16} />
            <span className="text-amber-100">068 075 9486 / 076 847 143</span>
          </div>
          <div className="flex items-center space-x-4">
            <Clock size={16} />
            <span className="text-amber-100">Mon-Sat: 8:30 AM - 5:00 PM</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg py-4 border-b-4 border-amber-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent flex items-center">
              <Sofa className="mr-3 text-amber-700" size={32} />
              Latoya's Couches And Furniture
            </h1>
            <div className="space-x-8">
              <a href="#services" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/WhatsApp Image 2025-06-04 at 10.07.26_54bc2f05.jpg')`
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Star className="text-amber-400 mr-2" size={24} />
              <span className="text-amber-300 font-semibold">Premium Quality Since Day One</span>
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Custom Furniture & 
              <span className="text-amber-400"> Professional Restorations</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your space with our handcrafted furniture and expert restoration services. 
              From luxurious sectionals to custom designs, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-amber-800 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#gallery" className="inline-flex items-center border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of furniture solutions designed to elevate your living space
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sofa className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">New Furniture</h3>
              <p className="text-gray-700 leading-relaxed">
                Browse our collection of high-quality, custom-made furniture pieces designed for your comfort and style. 
                From sectionals to accent chairs, we craft pieces that last.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Designs</h3>
              <p className="text-gray-700 leading-relaxed">
                Create your perfect piece with our custom furniture design service, tailored to your specific needs. 
                Choose fabrics, colors, and dimensions that match your vision.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Hammer className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Restorations</h3>
              <p className="text-gray-700 leading-relaxed">
                Give your beloved furniture pieces new life with our professional restoration services. 
                We preserve memories while updating functionality and appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Masterpieces</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of custom furniture and restoration projects that showcase our craftsmanship
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={`/WhatsApp Image 2025-06-04 at 10.06.${46 + index}_${index === 1 ? '2c0a4983' : index === 2 ? '7b126bca' : index === 3 ? 'fdd477b3' : index === 4 ? 'f54e3061' : '99cc4773'}.jpg`}
                  alt={`Furniture showcase ${index}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Custom Furniture</h4>
                    <p className="text-sm text-gray-200">Handcrafted Excellence</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a consultation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Visit Our Showroom</h3>
                  <p className="text-gray-600">16 2nd street, Middlivile, Randfontein, Gauteng, South Africa</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Call Us Today</h3>
                  <p className="text-gray-600">068 075 9486 / 076 847 143</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Email Us</h3>
                  <p className="text-gray-600">njenjemabetty145@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday to Saturday: 8:30 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Tell us about your furniture needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-4 rounded-lg hover:from-amber-800 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sofa className="mr-3 text-amber-400" size={32} />
              <h3 className="text-2xl font-bold">Latoya's Couches And Furniture</h3>
            </div>
            <p className="text-gray-300 mb-4">Crafting comfort, one piece at a time</p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Latoya's Couches And Furniture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;