import React, { useState } from 'react';
import {
  FileText,
  BarChart2,
  Download,
  Clock,
  RefreshCw,
  MessageSquare,
  Linkedin // <-- Import the Linkedin icon from lucide-react
} from 'lucide-react';

// Use a relative import for your Card components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';

const Navigation = () => (
  <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/00dtWXR/image-removebg-preview-14.png"
          alt="TextMine Pro Logo"
          className="h-10 w-10 mr-2"
        />
        <span className="text-xl font-bold text-blue-500">TextMine Pro</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#home" className="text-gray-300 hover:text-white">Home</a>
        <a href="#features" className="text-gray-300 hover:text-white">Features</a>
        <a href="#about" className="text-gray-300 hover:text-white">About</a>
        <a href="#download" className="text-gray-300 hover:text-white">Download</a>
        <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        <a href="#creators" className="text-gray-300 hover:text-white">Meet the Creators</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div id="home" className="pt-24 pb-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-6">
        TextMine Pro<br />
        <span className="text-blue-500">For Researchers Only</span>
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Analyze hundreds of documents quickly. Process large annual reports, normalize keyword counts, and gain interactive insights.
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.dropbox.com/scl/fo/1kwzrcu8wbmu5vf9saef4/AP5zCxYKkK3N3291IKogUgM?rlkey=n2jgp1rcbn5indnq1iuzemdof&st=p2dwbq5d&dl=0"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Now
        </a>
      </div>
    </div>
  </div>
);

const Features = () => (
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

const About = () => (
  <div id="about" className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-8">
        TextMine Pro was born out of our own research struggles. We needed a tool that could process multiple PDFs—each 400-500 pages long—across many annual reports quickly and accurately. Traditional methods (like Chrome indexing) could take 6-7 hours and still be inaccurate, and no online tool or GPT solution existed for processing gigabytes of data. In our research, we had to quantify qualitative information (e.g. building an uncertainty index based on keyword frequency) and nothing on the market could handle it. Check out this Reddit thread for context: <a href="https://www.reddit.com/r/AskAcademia/s/tUIjtGDUDZ" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">r/AskAcademia</a>.
      </p>
      <div className="bg-gray-800 rounded-lg p-8 text-left max-w-3xl mx-auto">
        <p className="text-gray-400">
          Note: Windows Defender Smartscreen might flag TextMine Pro because it is signed by an individual rather than an established organization.
        </p>
      </div>
    </div>
  </div>
);

const DownloadSection = () => (
  <div id="download" className="py-16 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Download TextMine Pro</h2>
      <p className="text-gray-400 mb-8">
        Simply download and run. No installer is required. Currently available for Windows only.
      </p>
      <a
        href="https://www.dropbox.com/scl/fo/1kwzrcu8wbmu5vf9saef4/AP5zCxYKkK3N3291IKogUgM?rlkey=n2jgp1rcbn5indnq1iuzemdof&st=p2dwbq5d&dl=0"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Now
      </a>
    </div>
  </div>
);

const Contact = () => (
  <div id="contact" className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-8">
        We'd love to hear your feedback or answer any questions you have.
      </p>
      <div className="max-w-xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8">
          <p className="text-gray-300 mb-2">
            <span className="mr-2">📧</span> 
            <a href="mailto:marshallbt123@gmail.com" className="hover:underline">marshallbt123@gmail.com</a>
          </p>
          <p className="text-gray-300">
            <span className="mr-2">📝</span> 
            <a href="https://forms.gle/97onA8Ztm9e4YBco7" target="_blank" rel="noopener noreferrer" className="hover:underline">Give Feedback</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Creators = () => (
  <div id="creators" className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Creators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CreatorCard
          name="Yash Pratap"
          photo="https://i.ibb.co/xSkFLF7y/1737737520024.jpg"
          linkedin="https://in.linkedin.com/in/yashpratap19"
        />
        <CreatorCard
          name="Karan Rana"
          photo="https://i.ibb.co/FqY2qJVS/1727680585130.jpg"
          linkedin="https://in.linkedin.com/in/karan-rana-540594218"
        />
      </div>
    </div>
  </div>
);

const CreatorCard = ({ name, photo, linkedin }) => (
  <Card className="bg-gray-900 border-gray-800">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <img 
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <CardTitle className="text-white">{name}</CardTitle>
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

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center space-y-2">
      <span className="text-gray-400">© 2025 TextMine Pro. All rights reserved.</span>
      <span className="text-gray-400">Created by BITSians ❤️</span>
      <div className="text-gray-400">Windows only</div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <About />
        <DownloadSection />
        <Contact />
        <Creators />
      </main>
      <Footer />
    </div>
  );
};

export default App;
