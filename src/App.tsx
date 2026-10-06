import React, { useState } from 'react';

type Screen = 'home' | 'identify' | 'result' | 'journal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedPlant, setSelectedPlant] = useState<any>(null);

  return (
    <div className="font-sans antialiased bg-[#faf8f3] text-[#1a1612] min-h-screen">
      {currentScreen === 'home' && <HomePage onNavigate={setCurrentScreen} />}
      {currentScreen === 'identify' && (
        <IdentifyPage 
          onBack={() => setCurrentScreen('home')}
          onResult={(plant) => {
            setSelectedPlant(plant);
            setCurrentScreen('result');
          }}
        />
      )}
      {currentScreen === 'result' && selectedPlant && (
        <ResultPage 
          plant={selectedPlant}
          onBack={() => setCurrentScreen('identify')}
          onJournal={() => setCurrentScreen('journal')}
        />
      )}
      {currentScreen === 'journal' && (
        <JournalPage onBack={() => setCurrentScreen('home')} />
      )}
    </div>
  );
}

// ============ HOME PAGE ============
function HomePage({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#faf8f3]/95 backdrop-blur-md z-50 border-b border-[#e0d6c8]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2d4a2d] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#faf8f3" strokeWidth="2">
                <path d="M16 24c-3.5 0-6-2.8-6-6.5 0-4 2.5-9 6-11.5 3.5 2.5 6 7.5 6 11.5 0 3.7-2.5 6.5-6 6.5z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12c0-3 1.5-5.5 4-7" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-serif text-2xl font-semibold text-[#2d4a2d]">GreenBite</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#4a3f32] hover:text-[#2d4a2d] transition-colors font-light">Features</a>
            <a href="#how-it-works" className="text-[#4a3f32] hover:text-[#2d4a2d] transition-colors font-light">How It Works</a>
            <a href="#plants" className="text-[#4a3f32] hover:text-[#2d4a2d] transition-colors font-light">Plants</a>
            <button 
              onClick={() => onNavigate('identify')}
              className="bg-[#2d4a2d] hover:bg-[#1f3a1f] text-[#faf8f3] px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[#2d4a2d] leading-tight">
                Your plants deserve better care
              </h1>
              <p className="text-xl text-[#4a3f32] font-light leading-relaxed">
                Identify any plant from a photo and get personalized care guides. Grow with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('identify')}
                  className="bg-[#2d4a2d] hover:bg-[#1f3a1f] text-[#faf8f3] px-8 py-4 rounded-lg font-medium transition-colors text-lg"
                >
                  Start Identifying →
                </button>
                <button className="border-2 border-[#2d4a2d] text-[#2d4a2d] hover:bg-[#2d4a2d] hover:text-[#faf8f3] px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#4a6b4a] border-2 border-[#faf8f3]" />
                  <div className="w-10 h-10 rounded-full bg-[#6b8a6b] border-2 border-[#faf8f3]" />
                  <div className="w-10 h-10 rounded-full bg-[#8fa68f] border-2 border-[#faf8f3]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#b86b42">
                        <path d="M10 1l2.39 6.64H19l-5.3 4.06 1.97 6.64L10 14.27l-5.67 4.07 1.97-6.64L1 7.64h6.61z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#4a3f32] font-light">Loved by 10,000+ plant parents</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://image.qwenlm.ai/generated-images/7549385e-2694-44e9-a383-3957d6e63158/_result.png"
                  alt="Beautiful garden setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#faf8f3] rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="text-3xl mb-2">🌱</div>
                <p className="font-serif text-lg font-medium text-[#2d4a2d] mb-1">8 Plants</p>
                <p className="text-sm text-[#4a3f32] font-light">Ready to identify</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#2d4a2d] mb-4">
              Everything you need to grow
            </h2>
            <p className="text-xl text-[#4a3f32] font-light max-w-2xl mx-auto">
              From identification to care guides, we've got your garden covered
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📸',
                title: 'Instant Identification',
                description: 'Take a photo and instantly know what plant you have. No more guessing games.'
              },
              {
                icon: '📖',
                title: 'Detailed Care Guides',
                description: 'Get specific instructions for soil, water, sunlight, and fertilizer needs.'
              },
              {
                icon: '📊',
                title: 'Growth Tracking',
                description: 'Log your plant\'s progress and monitor its health over time.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#faf8f3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-medium text-[#2d4a2d] mb-3">{feature.title}</h3>
                <p className="text-[#4a3f32] font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#2d4a2d] mb-8">
                How it works
              </h2>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Take a photo', desc: 'Snap a picture of your plant, seed, or seedling' },
                  { num: '02', title: 'Get identified', desc: 'We\'ll tell you exactly what plant you have' },
                  { num: '03', title: 'Learn to care', desc: 'Receive a personalized care guide' },
                  { num: '04', title: 'Track growth', desc: 'Log progress and watch your plant thrive' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2d4a2d] text-[#faf8f3] rounded-full flex items-center justify-center font-serif text-lg font-medium">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#2d4a2d] mb-1">{step.title}</h3>
                      <p className="text-[#4a3f32] font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://image.qwenlm.ai/generated-images/6a8a25f9-3761-4eeb-b8c7-d662f9327335/_result.png"
                  alt="Hands holding seedling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Section */}
      <section id="plants" className="py-20 px-6 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#2d4a2d] mb-4">
              Plants we identify
            </h2>
            <p className="text-xl text-[#4a3f32] font-light">
              Start with these 8 common, easy-to-grow plants
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🍅', name: 'Tomato' },
              { emoji: '🌿', name: 'Basil' },
              { emoji: '🍃', name: 'Mint' },
              { emoji: '🌻', name: 'Sunflower' },
              { emoji: '🌶️', name: 'Chili' },
              { emoji: '🥬', name: 'Spinach' },
              { emoji: '🌼', name: 'Marigold' },
              { emoji: '🌱', name: 'Coriander' }
            ].map((plant, i) => (
              <div key={i} className="bg-[#faf8f3] rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-3">{plant.emoji}</div>
                <h3 className="font-serif text-xl font-medium text-[#2d4a2d]">{plant.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#2d4a2d] to-[#4a6b4a] rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#faf8f3] mb-6">
              Ready to grow with confidence?
            </h2>
            <p className="text-xl text-[#e0d6c8] font-light mb-8 max-w-2xl mx-auto">
              Join thousands of plant parents who trust GreenBite for their gardening journey
            </p>
            <button 
              onClick={() => onNavigate('identify')}
              className="bg-[#faf8f3] hover:bg-[#f5f0e6] text-[#2d4a2d] px-10 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d4a2d] text-[#faf8f3] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#faf8f3] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#2d4a2d" strokeWidth="2">
                    <path d="M16 24c-3.5 0-6-2.8-6-6.5 0-4 2.5-9 6-11.5 3.5 2.5 6 7.5 6 11.5 0 3.7-2.5 6.5-6 6.5z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-serif text-2xl font-semibold">GreenBite</span>
              </div>
              <p className="font-light text-[#e0d6c8]">
                Your plants deserve better care
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Product</h4>
              <ul className="space-y-2 font-light text-[#e0d6c8]">
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Plants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2 font-light text-[#e0d6c8]">
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2 font-light text-[#e0d6c8]">
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#faf8f3] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#4a6b4a] pt-8 text-center font-light text-[#e0d6c8]">
            <p>&copy; 2024 GreenBite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============ IDENTIFY PAGE ============
function IdentifyPage({ onBack, onResult }: { onBack: () => void, onResult: (plant: any) => void }) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const plants = [
    { id: 'tomato', name: 'Tomato', emoji: '🍅' },
    { id: 'basil', name: 'Basil', emoji: '🌿' },
    { id: 'mint', name: 'Mint', emoji: '🍃' },
    { id: 'sunflower', name: 'Sunflower', emoji: '🌻' },
    { id: 'chili', name: 'Chili', emoji: '🌶️' },
    { id: 'spinach', name: 'Spinach', emoji: '🥬' },
    { id: 'marigold', name: 'Marigold', emoji: '🌼' },
    { id: 'coriander', name: 'Coriander', emoji: '🌱' }
  ];

  const handleDemo = () => {
    const randomPlant = plants[Math.floor(Math.random() * plants.length)];
    onResult({ ...randomPlant, confidence: 85 + Math.floor(Math.random() * 10) });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setUploadedImage(imageUrl);
        
        // Simulate analysis - pick a random plant
        setTimeout(() => {
          const randomPlant = plants[Math.floor(Math.random() * plants.length)];
          onResult({ 
            ...randomPlant, 
            confidence: 80 + Math.floor(Math.random() * 15),
            image: imageUrl
          });
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[#4a3f32] hover:text-[#2d4a2d] mb-8 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-light">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#2d4a2d] mb-4">
            Identify Your Plant
          </h1>
          <p className="text-xl text-[#4a3f32] font-light">
            Take a photo or try our demo mode
          </p>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="space-y-4 mb-12">
          <button
            onClick={handleDemo}
            className="w-full bg-[#2d4a2d] hover:bg-[#1f3a1f] text-[#faf8f3] rounded-2xl p-8 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 10V6h4M26 10V6h-4M6 22v4h4M26 22v4h-4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="3"/>
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h2 className="font-serif text-2xl font-medium mb-2">Try Demo Mode</h2>
                <p className="text-[#e0d6c8] font-light">See how plant identification works</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleUploadClick}
            className="w-full bg-[#faf8f3] border-2 border-[#2d4a2d] text-[#2d4a2d] hover:bg-[#2d4a2d] hover:text-[#faf8f3] rounded-2xl p-8 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 20v5a2 2 0 002 2h18a2 2 0 002-2v-5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 22V8" strokeLinecap="round"/>
                  <path d="M11 13l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h2 className="font-serif text-2xl font-medium mb-2">Upload Photo</h2>
                <p className="text-[#4a3f32] font-light">Choose from your gallery</p>
              </div>
            </div>
          </button>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-medium text-[#2d4a2d] mb-6 text-center">
            Plants We Can Identify
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plants.map((plant) => (
              <div key={plant.id} className="bg-[#f5f0e6] rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">{plant.emoji}</div>
                <p className="font-medium text-[#2d4a2d]">{plant.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ RESULT PAGE ============
function ResultPage({ plant, onBack, onJournal }: { plant: any, onBack: () => void, onJournal: () => void }) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[#4a3f32] hover:text-[#2d4a2d] mb-8 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-light">Back</span>
        </button>

        <div className="bg-[#faf8f3] rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-br from-[#2d4a2d] to-[#4a6b4a] p-12 text-center">
            <div className="text-8xl mb-4">{plant.emoji}</div>
            <h1 className="font-serif text-5xl font-semibold text-[#faf8f3] mb-2">{plant.name}</h1>
            <div className="inline-block bg-[#faf8f3] text-[#2d4a2d] px-4 py-2 rounded-full font-medium">
              {plant.confidence}% Match
            </div>
          </div>

          <div className="p-8">
            <h2 className="font-serif text-3xl font-medium text-[#2d4a2d] mb-6">Care Guide</h2>
            <div className="space-y-6">
              {[
                { icon: '🪴', label: 'Soil', value: 'Rich, well-draining soil with pH 6.0-7.0. Add compost before planting.' },
                { icon: '💧', label: 'Watering', value: 'Water deeply 2-3 times per week. Keep soil consistently moist but not waterlogged.' },
                { icon: '☀️', label: 'Sunlight', value: 'Full sun — at least 6-8 hours of direct sunlight daily.' },
                { icon: '🧪', label: 'Fertilizer', value: 'Balanced fertilizer every 2-3 weeks during growing season.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#f5f0e6] rounded-xl flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-medium text-[#2d4a2d] mb-2">{item.label}</h3>
                    <p className="text-[#4a3f32] font-light leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onJournal}
            className="flex-1 bg-[#2d4a2d] hover:bg-[#1f3a1f] text-[#faf8f3] rounded-xl p-6 font-serif text-xl font-medium transition-colors"
          >
            Log Growth
          </button>
          <button
            onClick={onBack}
            className="flex-1 border-2 border-[#2d4a2d] text-[#2d4a2d] hover:bg-[#2d4a2d] hover:text-[#faf8f3] rounded-xl p-6 font-serif text-xl font-medium transition-colors"
          >
            Identify Another
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ JOURNAL PAGE ============
function JournalPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[#4a3f32] hover:text-[#2d4a2d] mb-8 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-light">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#2d4a2d] mb-4">
            Growth Journal
          </h1>
          <p className="text-xl text-[#4a3f32] font-light">
            Track your plant's journey
          </p>
        </div>

        <div className="bg-[#faf8f3] rounded-3xl shadow-xl p-12 text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h2 className="font-serif text-2xl font-medium text-[#2d4a2d] mb-3">
            No entries yet
          </h2>
          <p className="text-[#4a3f32] font-light mb-6">
            Identify a plant and start logging its growth
          </p>
          <button 
            onClick={onBack}
            className="bg-[#2d4a2d] hover:bg-[#1f3a1f] text-[#faf8f3] px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Start Identifying
          </button>
        </div>
      </div>
    </div>
  );
}
