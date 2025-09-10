import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 pixel-art"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px auto',
          backgroundPosition: 'top left'
        }}
      ></div>
      {/* Background Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pixel-art"
        style={{
          backgroundImage: 'url(/images/background-grid.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px auto',
          backgroundPosition: 'top left'
        }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-slate-800/40"></div>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* POW Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/POW.png"
              alt="POW! Logo"
              width={450}
              height={180}
              className="pixel-art drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))'
              }}
              priority
            />
          </div>
          <h2 className="text-2xl text-black mb-8 font-xerxes flex items-center justify-center gap-3">
            THE Idle Clicker Game on Starknet
            <Image
              src="/images/starknet-symbol.png"
              alt="Starknet Logo"
              width={32}
              height={32}
              className="pixel-art"
            />
          </h2>
          <p className="text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed font-pixel">
            Click, Build, Mine. POW! is the ultimate idle clicker game on Starknet, where every tap builds your blockchain empire. Start small, click to grow, and rise through the ranks as you compete for the top of the leaderboard.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://apps.apple.com/ch/app/pow-powered-by-starknet/id6749684084?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 min-w-[200px] font-pixel"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.starknet.pow&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 min-w-[200px] font-pixel border-2 border-blue-400 hover:border-blue-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-black text-center mb-16 font-xerxes">
            Game Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative p-8 text-center pixel-art overflow-hidden" style={{
              backgroundImage: 'url(/images/window.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}>
              <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-xerxes">Fully Onchain Experience</h4>
              <p className="text-slate-300 font-pixel">Experience true blockchain gaming with all game state and progress stored directly on Starknet. Your empire is truly yours.</p>
              </div>
            </div>

            <div className="relative p-8 text-center overflow-hidden pixel-art" style={{
              backgroundImage: 'url(/images/window.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}>
              <div className="relative z-10">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-xerxes">Click-to-Earn Gameplay</h4>
              <p className="text-slate-300 font-pixel">Engage in enticing idle clicker mechanics where every tap builds your blockchain empire and generates value.</p>
              </div>
            </div>

            <div className="relative p-8 text-center overflow-hidden pixel-art" style={{
              backgroundImage: 'url(/images/window.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}>
              <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-xerxes">AVNU Paymaster</h4>
              <p className="text-slate-300 font-pixel">Seamless gameplay integrated with AVNU&lsquo;s paymaster for smooth gas-free transactions.</p>
              </div>
            </div>

            <div className="relative p-8 text-center overflow-hidden pixel-art" style={{
              backgroundImage: 'url(/images/window.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}>
              <div className="relative z-10">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-xerxes">Open Source</h4>
              <p className="text-slate-300 font-pixel">Built transparently as an open source project. Contribute, audit, and help shape the future of blockchain gaming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 relative z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-row justify-between items-center">
            <div className="mb-0">
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src="/images/pow-footer.png"
                  alt="POW! Logo"
                  width={100}
                  height={40}
                  className="pixel-art w-20 h-8 sm:w-24 sm:h-10"
                />
              </div>
              <p className="text-slate-400 font-pixel text-xs sm:text-sm">Powered by Starknet</p>
            </div>
            
            <div className="flex flex-row gap-3 sm:gap-6">
              <a
                href="https://github.com/keep-starknet-strange/pow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-pixel text-xs sm:text-sm">GitHub</span>
              </a>
              <a
                href="https://x.com/StarkWareLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
                <span className="font-pixel text-xs sm:text-sm">Twitter</span>
              </a>
              <a
                href="https://t.me/powgame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="font-pixel text-xs sm:text-sm">Telegram</span>
              </a>
              <a
                href="https://starknet.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Image
                  src="/images/starknet-symbol.png"
                  alt="Starknet logo"
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="font-pixel text-xs sm:text-sm">Starknet</span>
              </a>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-slate-700 text-center text-slate-400">
            <p className="font-pixel text-xs sm:text-sm">&copy; 2024 POW! - Keep Starknet Strange. Built by the Exploration Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
