import React from 'react';
import Navigation from './components/navigation';
import AnimatedBackground from './components/AnimatedBackground';

import {
  FileText,
  BarChart2,
  Download,
  Clock,
  RefreshCw,
  MessageSquare,
  Linkedin,
  Zap,
  CheckCircle,
  XCircle,
  Cloud,
  Shield,
  AlertCircle
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/card';

// ------------------- Hero Section -------------------
const Hero = () => (
  <div id="home" className="pt-24 pb-16 bg-gray-900 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      {/* Left column: Title and download */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          TextMine Pro<br />
          <span className="text-blue-500">For Researchers Only</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Analyze hundreds of documents quickly. Process large annual reports, normalize keyword counts, and gain interactive insights.
        </p>
        <a
          href="https://www.dropbox.com/scl/fo/1kwzrcu8wbmu5vf9saef4/AP5zCxYKkK3N3291IKogUgM?rlkey=n2jgp1rcbn5indnq1iuzemdof&st=p2dwbq5d&dl=0"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center"
          onClick={() => {
            window.gtag('event', 'download', {
              event_category: 'Button Click',
              event_label: 'Download Button'
            });
          }}
        >
          <Download className="mr-2 h-5 w-5" />
          Download Now
        </a>
      </div>
      {/* Right column: Screenshot */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co/h19FnRT5/Screenshot-2025-02-14-023420.png"
          alt="App Screenshot"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  </div>
);

// ------------------- Feature Comparison Components -------------------
const FeatureComparison = ({ title, features, positive = true }) => (
  <div className="flex items-start space-x-3">
    {positive ? (
      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
    )}
    <div>
      <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-300">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  </div>
);

// ------------------- Why TextMine Pro? Section -------------------
const WhyTextMinePro = () => (
  <div id="why-textmine" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          Why Choose <span className="text-blue-400">TextMine Pro</span>?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the future of research text analysis with unmatched speed, precision, and capabilities that no other tool can offer.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <StatCard 
          icon={Clock}
          value="98% Faster"
          label="Than Traditional Methods"
        />
        <StatCard 
          icon={FileText}
          value="Unlimited"
          label="PDF Processing Capacity"
        />
        <StatCard 
          icon={BarChart2}
          value="100% Accurate"
          label="Word Frequency Analysis"
        />
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* TextMine Pro Features */}
        <div className="bg-gradient-to-br from-blue-900/20 to-gray-900 p-8 rounded-xl border border-blue-800/50 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">TextMine Pro</h3>
          </div>
          <FeatureComparison
            title="Revolutionary Research Tool"
            features={[
              "Process 50+ PDFs simultaneously in minutes",
              "Multi-word frequency analysis with normalization",
              "Interactive visualizations and insights",
              "100% offline and secure operation",
              "Handles files of any size efficiently"
            ]}
          />
        </div>

        {/* Traditional Tools Limitations */}
        <div className="bg-gradient-to-br from-red-900/10 to-gray-900 p-8 rounded-xl border border-red-800/30 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-red-500/20 rounded-lg">
              <Cloud className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Other Solutions (don't exist)</h3>
          </div>
          <FeatureComparison
            title="Limited Capabilities (...close to none)"
            features={[
              "Single file upload only",
              "1 word at a time for 1 file lol pretty much useless",
              "Basic or no visualization options",
              "Requires internet and your files go to cloud",
              "File size limitations and very slow (yeah we tried)"
            ]}
            positive={false}
          />
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-16 bg-gradient-to-r from-blue-600/10 via-blue-600/5 to-gray-900 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h4 className="text-xl font-bold text-white">Ready to Transform Your Research?</h4>
              <p className="text-gray-300">Join researchers worldwide who've switched to TextMine Pro</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 shadow-lg">
            Download Now
          </button>
          <div className="flex items-center justify-center text-gray-400">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">
              Note: Windows Defender Smartscreen might flag TextMine Pro because it is signed by an individual rather than an established organization.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
);

// ------------------- Features Section -------------------
const FeaturesSection = () => (
  <div id="features" className="py-16 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Powerful Features for Document Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Clock />}
          title="Lightning Fast"
          description="Process 50+ PDFs with 400-500 pages each in minutes, not hours."
        />
        <FeatureCard
          icon={<RefreshCw />}
          title="Smart Normalization"
          description="Normalize keyword counts per 10,000 words for fair, unbiased analysis."
        />
        <FeatureCard
          icon={<BarChart2 />}
          title="Interactive Insights"
          description="Visualize data with word clouds, histograms, and pie charts."
        />
        <FeatureCard
          icon={<FileText />}
          title="Bulk Processing"
          description="Handle multiple documents at once—no online tools required."
        />
        <FeatureCard
          icon={<Download />}
          title="Simple & Direct"
          description="No installer needed. Just download and run on Windows."
        />
        <FeatureCard
          icon={<MessageSquare />}
          title="Offline Operation"
          description="Process sensitive data locally without internet connection."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-gray-900 border-gray-800">
    <CardHeader>
      <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
      </div>
      <CardTitle className="text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

// ------------------- About Section -------------------
const About = () => (
  <div id="about" className="py-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        As part of a research project in the Economics and Finance department at BITS Pilani Goa, we were tasked with quantifying a critical metric using keyword frequency. We discovered that using Ctrl+F in traditional PDF readers was painfully slow – taking 2–3 minutes per file for just one word. With over 800 files and 10+ keywords to analyze, manual searching was impossible.
      </p>
      <p className="text-gray-400 max-w-2xl mx-auto">
        After trying various AI and online tools that only processed one file or one word at a time, we built TextMine Pro – a revolutionary offline tool that processes massive datasets in minutes and delivers research-ready CSV results with unparalleled accuracy.
      </p>
    </div>
  </div>
);

// ------------------- Creators Section -------------------
const Creators = () => (
  <div id="creators" className="py-8 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Creators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CreatorCard
          name="Yash Pratap Singh"
          subtitle1="BITS Pilani, Goa '26" 
          subtitle2="Intern @ EY | ex AirAsia, OnePlus" 
          photo="https://i.ibb.co/Z1cTt2pp/image.png"
          linkedin="https://in.linkedin.com/in/yashpratap19"
        />
        <CreatorCard
          name="Karan Rana"
          subtitle1="BITS Pilani, Goa '26" 
          subtitle2="Undergraduate Finance Researcher | ex Cosmo" 
          photo="https://i.ibb.co/FqY2qJVS/1727680585130.jpg"
          linkedin="https://in.linkedin.com/in/karan-rana-540594218"
        />
      </div>
    </div>
  </div>
);

const CreatorCard = ({ name, subtitle1, subtitle2, photo, linkedin }) => (
  <Card className="bg-gray-900 border-gray-800">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <CardTitle className="text-white">{name}</CardTitle>
          <p className="text-gray-400 text-sm mt-2">{subtitle1}</p>
          <p className="text-gray-400 text-sm">{subtitle2}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-2 text-blue-500 hover:text-blue-400">
        <Linkedin className="w-5 h-5" />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Connect on LinkedIn
        </a>
      </div>
    </CardContent>
  </Card>
);

// ------------------- Contact Section -------------------
const Contact = () => (
  <div id="contact" className="py-8 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-8">
        We'd love to hear your feedback or answer any questions you have.
      </p>
      <div className="max-w-xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8">
          <p className="text-gray-300 mb-3">
            <span className="mr-2">📧</span>
            <a href="mailto:marshallbt123@gmail.com" className="hover:underline">
              marshallbt123@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            <span className="mr-2">📝</span>
            <a href="https://forms.gle/97onA8Ztm9e4YBco7" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Give Feedback
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ------------------- Footer Section -------------------
const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center space-y-2">
      <span className="text-gray-400">© 2025 TextMine Pro. All rights reserved.</span>
      <span className="text-gray-400">Created by BITSians ❤️</span>
      <div className="text-gray-400">Windows only</div>
    </div>
  </footer>
);

// ------------------- Main App -------------------
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Animated Background behind everything */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main>
        <Hero />
        <WhyTextMinePro />
        <FeaturesSection />
        <About />
        <Creators />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;