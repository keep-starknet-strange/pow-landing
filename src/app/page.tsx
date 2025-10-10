'use client';

import Image from "next/image";
import NounsBuilder from "../components/NounsBuilder";
import { useState, useEffect } from 'react';

// Title bar options in cycling order: purple, pink, yellow, blue, purple, yellow
const titleBarOptions = [
  '/images/title_bar_scaled_13x_pngcrushed.png', // purple (original)
  '/images/title_bar_scaled_13x_pngcrushed pink.png', // pink
  '/images/title_bar_scaled_13x_pngcrushed yellow.png', // yellow
  '/images/title_bar_scaled_13x_pngcrushed yellow blue.png', // blue
  '/images/title_bar_scaled_13x_pngcrushed.png', // purple (original)
  '/images/title_bar_scaled_13x_pngcrushed yellow.png' // yellow
];

// Noggles options for flying animation
const nogglesOptions = [
  '/nouns-traits/Noggles/0-glasses-hip-rose.png',
  '/nouns-traits/Noggles/1-glasses-square-black-eyes-red.png',
  '/nouns-traits/Noggles/2-glasses-square-black-rgb.png',
  '/nouns-traits/Noggles/3-glasses-square-black.png',
  '/nouns-traits/Noggles/4-glasses-square-blue-med-saturated.png',
  '/nouns-traits/Noggles/5-glasses-square-blue.png',
  '/nouns-traits/Noggles/6-glasses-square-frog-green.png',
  '/nouns-traits/Noggles/7-glasses-square-fullblack.png',
  '/nouns-traits/Noggles/8-glasses-square-green-blue-multi.png',
  '/nouns-traits/Noggles/9-glasses-square-grey-light.png',
  '/nouns-traits/Noggles/10-glasses-square-guava.png',
  '/nouns-traits/Noggles/11-glasses-square-honey.png',
  '/nouns-traits/Noggles/12-glasses-square-magenta.png',
  '/nouns-traits/Noggles/13-glasses-square-orange.png',
  '/nouns-traits/Noggles/14-glasses-square-pink-purple-multi.png',
  '/nouns-traits/Noggles/15-glasses-square-red.png',
  '/nouns-traits/Noggles/16-glasses-square-smoke.png',
  '/nouns-traits/Noggles/17-glasses-square-teal.png',
  '/nouns-traits/Noggles/18-glasses-square-watermelon.png',
  '/nouns-traits/Noggles/19-glasses-square-yellow-orange-multi.png',
  '/nouns-traits/Noggles/20-glasses-square-yellow-saturated.png',
  '/nouns-traits/Noggles/21-glasses-deep-teal.png',
  '/nouns-traits/Noggles/22-glasses-grass.png',
  '/nouns-traits/Noggles/23-glasses-lavender.png'
];

export default function Home() {
  // Shared state for Nouns Builder
  const [selectedTraits, setSelectedTraits] = useState({
    head: '',
    body: '',
    glasses: '',
    background: '',
    accessories: ''
  });

  const [activeTab, setActiveTab] = useState<'head' | 'body' | 'glasses' | 'accessories'>('head');
  const [traitOptions, setTraitOptions] = useState({
    heads: [] as Array<{id: string; name: string; path: string}>,
    bodies: [] as Array<{id: string; name: string; path: string}>,
    glasses: [] as Array<{id: string; name: string; path: string}>,
    backgrounds: [] as Array<{id: string; name: string; path: string}>,
    accessories: [] as Array<{id: string; name: string; path: string}>
  });

  // Scroll animation state for feature rows
  const [visibleRows, setVisibleRows] = useState<boolean[]>([false, false, false]);
  const [randomTitleBars, setRandomTitleBars] = useState<string[]>([]);
  const [flyingNoggles, setFlyingNoggles] = useState<Array<{
    id: number;
    src: string;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    animationDuration: number;
  }>>([]);
  const [visibleTitleSections, setVisibleTitleSections] = useState<boolean[]>([false, false, false, false, false, false]);
  const [visibleDownloadButtons, setVisibleDownloadButtons] = useState<boolean[]>([false, false]);
  const [visibleLeaderboards, setVisibleLeaderboards] = useState<boolean[]>([false, false]);
  const [visibleNounsSections, setVisibleNounsSections] = useState<boolean[]>([false, false]);

  // Set title bars: Game Features (purple), Leaderboards (purple), Nouns Builder (purple)
  useEffect(() => {
    const selectedBars = [
      titleBarOptions[0], // purple - Game Features
      titleBarOptions[0], // purple - Leaderboards (original)
      titleBarOptions[0]  // purple - Nouns Builder (same as Game Features)
    ];
    setRandomTitleBars(selectedBars);
  }, []);

  // Create flying Noggles
  useEffect(() => {
    const createFlyingNoggles = () => {
      const noggles = [];
      for (let i = 0; i < 15; i++) {
        noggles.push({
          id: i,
          src: nogglesOptions[Math.floor(Math.random() * nogglesOptions.length)],
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          speedX: (Math.random() - 0.5) * 0.5, // Slow horizontal movement
          speedY: (Math.random() - 0.5) * 0.3, // Slow vertical movement
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          animationDuration: 25 + Math.random() * 15 // Random duration between 25-40 seconds
        });
      }
      setFlyingNoggles(noggles);
    };

    createFlyingNoggles();
  }, []);

  // Generate random Noun on component mount
  useEffect(() => {
    const generateRandomNoun = () => {
      // Random head selection
      const heads = [
        '/nouns-traits/Heads/0-head-aardvark.png',
        '/nouns-traits/Heads/1-head-abstract.png',
        '/nouns-traits/Heads/2-head-ape.png',
        '/nouns-traits/Heads/3-head-bag.png',
        '/nouns-traits/Heads/4-head-bagpipe.png',
        '/nouns-traits/Heads/10-head-bear.png',
        '/nouns-traits/Heads/11-head-beer.png',
        '/nouns-traits/Heads/12-head-beet.png',
        '/nouns-traits/Heads/13-head-bell.png',
        '/nouns-traits/Heads/14-head-bigfoot-yeti.png',
        '/nouns-traits/Heads/15-head-bigfoot.png',
        '/nouns-traits/Heads/16-head-blackhole.png',
        '/nouns-traits/Heads/17-head-blueberry.png',
        '/nouns-traits/Heads/18-head-bomb.png',
        '/nouns-traits/Heads/19-head-bonsai.png',
        '/nouns-traits/Heads/20-head-boombox.png',
        '/nouns-traits/Heads/21-head-boot.png',
        '/nouns-traits/Heads/22-head-box.png',
        '/nouns-traits/Heads/23-head-boxingglove.png',
        '/nouns-traits/Heads/24-head-brain.png',
        '/nouns-traits/Heads/25-head-bubble-speech.png',
        '/nouns-traits/Heads/26-head-bubblegum.png',
        '/nouns-traits/Heads/27-head-burger-dollarmenu.png',
        '/nouns-traits/Heads/28-head-cake.png',
        '/nouns-traits/Heads/29-head-calculator.png',
        '/nouns-traits/Heads/30-head-calendar.png',
        '/nouns-traits/Heads/31-head-camcorder.png',
        '/nouns-traits/Heads/32-head-cannedham.png',
        '/nouns-traits/Heads/33-head-car.png',
        '/nouns-traits/Heads/34-head-cash-register.png',
        '/nouns-traits/Heads/35-head-cassettetape.png',
        '/nouns-traits/Heads/36-head-cat.png',
        '/nouns-traits/Heads/37-head-cd.png',
        '/nouns-traits/Heads/38-head-chain.png',
        '/nouns-traits/Heads/39-head-chainsaw.png',
        '/nouns-traits/Heads/40-head-chameleon.png',
        '/nouns-traits/Heads/41-head-chart-bars.png',
        '/nouns-traits/Heads/42-head-cheese.png',
        '/nouns-traits/Heads/43-head-chefhat.png',
        '/nouns-traits/Heads/44-head-cherry.png',
        '/nouns-traits/Heads/100-head-hardhat.png',
        '/nouns-traits/Heads/101-head-heart.png',
        '/nouns-traits/Heads/102-head-helicopter.png',
        '/nouns-traits/Heads/103-head-highheel.png',
        '/nouns-traits/Heads/104-head-hockeypuck.png',
        '/nouns-traits/Heads/105-head-horse-deepfried.png',
        '/nouns-traits/Heads/106-head-hotdog.png',
        '/nouns-traits/Heads/107-head-house.png',
        '/nouns-traits/Heads/160-head-pizza.png',
        '/nouns-traits/Heads/161-head-plane.png',
        '/nouns-traits/Heads/162-head-pop.png'
      ];
      
      // Random body selection
      const bodies = [
        '/nouns-traits/Bodies/0-body-bege-bsod.png',
        '/nouns-traits/Bodies/1-body-bege-crt.png',
        '/nouns-traits/Bodies/2-body-blue-sky.png',
        '/nouns-traits/Bodies/3-body-bluegrey.png',
        '/nouns-traits/Bodies/4-body-cold.png',
        '/nouns-traits/Bodies/5-body-computerblue.png',
        '/nouns-traits/Bodies/6-body-darkbrown.png',
        '/nouns-traits/Bodies/7-body-darkpink.png',
        '/nouns-traits/Bodies/8-body-foggrey.png',
        '/nouns-traits/Bodies/9-body-gold.png'
      ];
      
      // Random glasses selection
      const glasses = [
        '/nouns-traits/Noggles/0-glasses-hip-rose.png',
        '/nouns-traits/Noggles/1-glasses-square-black-eyes-red.png',
        '/nouns-traits/Noggles/2-glasses-square-black-rgb.png',
        '/nouns-traits/Noggles/3-glasses-square-black.png',
        '/nouns-traits/Noggles/4-glasses-square-blue-med-saturated.png',
        '/nouns-traits/Noggles/5-glasses-square-blue.png',
        '/nouns-traits/Noggles/6-glasses-square-frog-green.png',
        '/nouns-traits/Noggles/7-glasses-square-fullblack.png',
        '/nouns-traits/Noggles/8-glasses-square-green-blue-multi.png',
        '/nouns-traits/Noggles/9-glasses-square-grey-light.png'
      ];
      
      // Random background selection
      const backgrounds = [
        '/nouns-traits/Backgrounds/0-background-cool.svg',
        '/nouns-traits/Backgrounds/1-background-warm.svg'
      ];
      
      // Random accessories selection (including "none" option)
      const accessories = [
        '/nouns-traits/Accessories/70-accessory-none.png', // No accessory
        '/nouns-traits/Accessories/0-accessory-1n.png',
        '/nouns-traits/Accessories/1-accessory-aardvark.png',
        '/nouns-traits/Accessories/2-accessory-axe.png',
        '/nouns-traits/Accessories/3-accessory-belly-chameleon.png',
        '/nouns-traits/Accessories/4-accessory-bird-flying.png',
        '/nouns-traits/Accessories/5-accessory-bird-side.png',
        '/nouns-traits/Accessories/6-accessory-bling-anchor.png',
        '/nouns-traits/Accessories/7-accessory-bling-anvil.png',
        '/nouns-traits/Accessories/8-accessory-bling-arrow.png',
        '/nouns-traits/Accessories/9-accessory-bling-cheese.png',
        '/nouns-traits/Accessories/10-accessory-bling-gold-ingot.png',
        '/nouns-traits/Accessories/11-accessory-bling-love.png',
        '/nouns-traits/Accessories/12-accessory-bling-mask.png',
        '/nouns-traits/Accessories/13-accessory-bling-rings.png',
        '/nouns-traits/Accessories/14-accessory-bling-scissors.png',
        '/nouns-traits/Accessories/15-accessory-bling-sparkles.png',
        '/nouns-traits/Accessories/24-accessory-carrot.png',
        '/nouns-traits/Accessories/25-accessory-chain-logo.png',
        '/nouns-traits/Accessories/38-accessory-chicken.png',
        '/nouns-traits/Accessories/39-accessory-cloud.png',
        '/nouns-traits/Accessories/40-accessory-clover.png',
        '/nouns-traits/Accessories/42-accessory-cow.png',
        '/nouns-traits/Accessories/45-accessory-dinosaur.png',
        '/nouns-traits/Accessories/46-accessory-dollar-bling.png',
        '/nouns-traits/Accessories/47-accessory-dragon.png',
        '/nouns-traits/Accessories/48-accessory-ducky.png',
        '/nouns-traits/Accessories/49-accessory-eth.png',
        '/nouns-traits/Accessories/50-accessory-eye.png',
        '/nouns-traits/Accessories/52-accessory-fries.png',
        '/nouns-traits/Accessories/55-accessory-glasses.png',
        '/nouns-traits/Accessories/57-accessory-heart.png',
        '/nouns-traits/Accessories/60-accessory-infinity.png',
        '/nouns-traits/Accessories/62-accessory-leaf.png',
        '/nouns-traits/Accessories/63-accessory-lightbulb.png',
        '/nouns-traits/Accessories/66-accessory-lp.png',
        '/nouns-traits/Accessories/67-accessory-marsface.png',
        '/nouns-traits/Accessories/69-accessory-moon-block.png',
        '/nouns-traits/Accessories/72-accessory-pizza-bling.png',
        '/nouns-traits/Accessories/74-accessory-rain.png',
        '/nouns-traits/Accessories/75-accessory-rainbow-steps.png',
        '/nouns-traits/Accessories/76-accessory-rgb.png',
        '/nouns-traits/Accessories/77-accessory-robot.png',
        '/nouns-traits/Accessories/78-accessory-safety-vest.png',
        '/nouns-traits/Accessories/82-accessory-shrimp.png',
        '/nouns-traits/Accessories/85-accessory-snowflake.png',
        '/nouns-traits/Accessories/95-accessory-sunset.png',
        '/nouns-traits/Accessories/132-accessory-yingyang.png'
      ];
      
      setSelectedTraits({
        head: heads[Math.floor(Math.random() * heads.length)],
        body: bodies[Math.floor(Math.random() * bodies.length)],
        glasses: glasses[Math.floor(Math.random() * glasses.length)],
        background: backgrounds[Math.floor(Math.random() * backgrounds.length)],
        accessories: accessories[Math.floor(Math.random() * accessories.length)]
      });
    };

    generateRandomNoun();
  }, []);

  // Show buttons immediately on page load
  useEffect(() => {
    setVisibleDownloadButtons([true, true]);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createObserver = (index: number) => {
      const element = document.querySelector(`#feature-row-${index}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleRows(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    };

    // Create observers for all three rows
    [0, 1, 2].forEach(index => {
      const observer = createObserver(index);
      if (observer) observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Intersection Observer for title sections
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createTitleObserver = (index: number) => {
      const element = document.querySelector(`#title-section-${index}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleTitleSections(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    };

    // Create observers for all title sections
    [0, 1, 2, 3, 4, 5].forEach(index => {
      const observer = createTitleObserver(index);
      if (observer) observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Intersection Observer for leaderboards
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createLeaderboardObserver = (index: number) => {
      const element = document.querySelector(`#leaderboard-${index}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleLeaderboards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    };

    // Create observers for leaderboards
    [0, 1].forEach(index => {
      const observer = createLeaderboardObserver(index);
      if (observer) observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Intersection Observer for Nouns sections
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createNounsObserver = (index: number) => {
      const element = document.querySelector(`#nouns-section-${index}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleNounsSections(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    };

    // Create observers for Nouns sections
    [0, 1].forEach(index => {
      const observer = createNounsObserver(index);
      if (observer) observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);


  const handleTraitSelect = (traitType: string, traitPath: string) => {
    console.log('External trait select:', { traitType, traitPath });
    setSelectedTraits(prev => ({
      ...prev,
      [traitType]: traitPath
    }));
  };

  const handleTabChange = (tab: 'head' | 'body' | 'glasses' | 'accessories') => {
    setActiveTab(tab);
  };

  const generateRandomNoun = () => {
    if (traitOptions.heads.length === 0) return; // Wait for traits to load
    
    const randomTraits = {
      head: traitOptions.heads[Math.floor(Math.random() * traitOptions.heads.length)]?.path || '',
      body: traitOptions.bodies[Math.floor(Math.random() * traitOptions.bodies.length)]?.path || '',
      glasses: traitOptions.glasses[Math.floor(Math.random() * traitOptions.glasses.length)]?.path || '',
      background: '',
      accessories: traitOptions.accessories[Math.floor(Math.random() * traitOptions.accessories.length)]?.path || ''
    };
    
    Object.entries(randomTraits).forEach(([traitType, traitPath]) => {
      if (traitPath) {
        handleTraitSelect(traitType, traitPath);
      }
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 pixel-art animated-background"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px auto',
          backgroundPosition: 'top left'
        }}
      ></div>
      
      {/* Flying Noggles */}
      {flyingNoggles.map((noggle) => (
        <div
          key={noggle.id}
          className="flying-noggle"
          style={{
            left: noggle.x,
            top: noggle.y,
            animationDelay: `${noggle.id * 3}s`,
            animationDuration: `${noggle.animationDuration}s`
          }}
        >
          <Image
            src={noggle.src}
            alt="Flying Noggle"
            width={256}
            height={256}
            className="pixel-art opacity-60"
            style={{ 
              pointerEvents: 'none',
              userSelect: 'none',
              touchAction: 'none'
            }}
          />
        </div>
      ))}
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
      <header className="px-4 pt-16 pb-8 relative z-10 bg-gradient-to-b from-[#101117] to-[#06060a] shadow-[0_8px_32px_rgba(0,0,0,0.8)] min-h-[100vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* POW Logo - Full Width and Bigger */}
          <div className="text-center mb-12">
            <Image
              src="/images/POW.png"
              alt="POW! Logo"
              width={406}
              height={168}
              className="pixel-art drop-shadow-2xl rounded-lg mx-auto"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))'
              }}
              priority
            />
          </div>

          {/* Title - Centered */}
          <h2 className="text-slate-200 mb-8 font-xerxes flex items-center justify-center gap-3
            text-lg sm:text-xl md:text-2xl text-center">
            THE Idle Clicker Game on Starknet
            <Image
              src="/images/starknet-symbol.png"
              alt="Starknet Logo"
              width={32}
              height={32}
              className="pixel-art"
            />
          </h2>

          {/* From Left to Right: Paragraph - QR Code - Buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Paragraph - First Column */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-slate-200 leading-relaxed font-pixel text-lg">
                Click, Build, Mine. POW! is the ultimate idle clicker game on Starknet, where every tap builds your blockchain empire. Start small, click to grow, and rise through the ranks as you compete for the top of the leaderboard.
              </p>
            </div>

            {/* QR Code - Desktop center column only */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-300">
                <div className="text-center mb-2">
                  <p className="text-xs text-slate-600 font-pixel">
                    Scan QR to download
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/qr-code.png"
                    alt="Download QR Code - Works on both iOS and Android"
                    width={80}
                    height={80}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 font-pixel text-center">
                  iOS & Android
                </p>
              </div>
            </div>

            {/* Mobile Only: QR Code AND Buttons Side by Side */}
            <div className="flex lg:hidden flex-row items-center gap-4 justify-center w-full">
              {/* The QR code sits here for mobile */}
              <div className="flex flex-col items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-300">
                  <div className="text-center mb-2">
                    <p className="text-xs text-slate-600 font-pixel">
                      Scan QR to download
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/qr-code.png"
                      alt="Download QR Code - Works on both iOS and Android"
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-pixel text-center">
                    iOS & Android
                  </p>
                </div>
              </div>

              {/* Buttons right side on mobile */}
              <div className="flex flex-col gap-3 items-center download-buttons">
                <div className={`download-button ${visibleDownloadButtons[0] ? 'visible' : ''}`}>
                  <a
                    href="https://apps.apple.com/ch/app/pow-powered-by-starknet/id6749684084?l=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-100 text-black font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center gap-2 w-[160px] sm:w-[180px] font-pixel border-2 border-slate-300 hover:border-slate-400 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>Download on App Store</span>
                  </a>
                </div>
                <div className={`download-button download-button-delayed ${visibleDownloadButtons[1] ? 'visible' : ''}`}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.starknet.pow&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center gap-2 w-[160px] sm:w-[180px] font-pixel border-2 border-emerald-400 hover:border-emerald-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Get it on Google Play</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop: Third Column */}
            <div className="hidden lg:flex flex-col gap-4 items-center lg:items-start download-buttons">
              <div className={`download-button ${visibleDownloadButtons[0] ? 'visible' : ''}`}>
                <a
                  href="https://apps.apple.com/ch/app/pow-powered-by-starknet/id6749684084?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-100 text-black font-semibold py-2 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 w-[198px] font-pixel border-2 border-slate-300 hover:border-slate-400 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
              </div>
              <div className={`download-button download-button-delayed ${visibleDownloadButtons[1] ? 'visible' : ''}`}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.starknet.pow&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-2 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 w-[198px] font-pixel border-2 border-emerald-400 hover:border-emerald-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get it on Google Play
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-0 pt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title Bar - Left Side */}
          <div id="title-section-0" className={`flex justify-start -ml-6 lg:-ml-20 title-section ${visibleTitleSections[0] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src={randomTitleBars[0] || "/images/title_bar_scaled_13x_pngcrushed.png"}
                alt="Game Features"
                width={600}
                height={120}
                className="pixel-art"
              />
              <h2 className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-12 text-white font-xerxes text-lg sm:text-xl lg:text-2xl">
                Game Features
              </h2>
            </div>
          </div>
          
          {/* Description Box */}
          <div id="title-section-1" className={`flex justify-start mb-6 -ml-6 lg:-ml-20 description-section ${visibleTitleSections[1] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src="/images/title_bar_scaled_13x_pngcrushed pink.png"
                alt="Game Features Description"
                width={600}
                height={60}
                className="pixel-art title-bar-bouncy-left"
              />
              <p className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-12 pr-4 sm:pr-8 text-white font-pixel text-sm sm:text-base lg:text-lg font-bold leading-relaxed title-bar-text">
                <span>Powered by&nbsp;</span><a href="https://www.starknet.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 underline title-bar-link">Starknet</a><span>.</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            {/* First Row - Mobile: 2 items, Tablet: 3 items, Desktop: 5 items */}
            <div id="feature-row-0" className={`flex items-center gap-1 md:gap-2 lg:gap-2 feature-row ${visibleRows[0] ? 'visible slide-in-left' : ''}`}>
              {/* Left Connectors */}
              <div className="flex items-center justify-center h-full -ml-2 sm:-ml-4 md:-ml-8 lg:-ml-20">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-2 flex-1">
                <div className="relative p-1 text-center aspect-square flex flex-col justify-center items-center" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Fully Onchain</h4>
                  <p className="text-white font-pixel text-xs sm:text-sm leading-tight text-left pl-1">Your progress lives on <span className="bg-purple-800 text-white px-1 rounded">Starknet</span>, not some server that can vanish.</p>
                </div>

                <div className="relative p-1 text-center aspect-square flex flex-col justify-center items-center" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Click-to-Earn</h4>
                  <p className="text-white font-pixel text-xs sm:text-sm leading-tight text-left pl-1">Tap through the game, hit Prestige, and get <span className="bg-purple-800 text-white px-1 rounded">10 STRK</span>.</p>
                </div>

                {/* Tablet and Desktop items */}
                <div className="hidden md:block relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Gas Paid</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">We cover the fees with <span className="bg-purple-800 text-white px-1 rounded">AVNU</span>. You just play.</p>
                  </div>
                </div>

                {/* Desktop only items */}
                <div className="hidden lg:block relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Open Source</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">The code is <span className="bg-purple-800 text-white px-1 rounded">open-source</span>. Fork it, remix it, build your own.</p>
                  </div>
                </div>

                <div className="hidden lg:block relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Learn</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">New to crypto? <span className="bg-purple-800 text-white px-1 rounded">POW!</span> make it click!</p>
                  </div>
                </div>
              </div>
              
              {/* Right Connectors */}
              <div className="flex items-center justify-center h-full -mr-2 sm:-mr-4 md:-mr-8 lg:-mr-20">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
            </div>

            {/* Second Row - Mobile and Tablet only */}
            <div id="feature-row-1" className={`flex items-center gap-1 md:gap-2 lg:hidden feature-row ${visibleRows[1] ? 'visible slide-in-right' : ''}`}>
              {/* Left Connectors */}
              <div className="flex items-center justify-center h-full -ml-2 sm:-ml-4 md:-ml-8">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 flex-1">
                {/* Mobile: Paymaster, Open Source | Tablet: Open Source, Learn, Coming Soon */}
                <div className="block md:hidden relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Paymaster</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">Seamless gameplay integrated with <span className="bg-purple-800 text-white px-1 rounded">AVNU</span>&apos;s paymaster for smooth gas-free transactions.</p>
                  </div>
                </div>

                <div className="relative p-1 text-center aspect-square flex flex-col justify-center items-center" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Open Source</h4>
                  <p className="text-white font-pixel text-sm leading-tight text-left pl-1">Built as an <span className="bg-purple-800 text-white px-1 rounded">open-source</span> goldmine for building modern onchain apps.</p>
                </div>

                {/* Tablet only - Learn */}
                <div className="hidden md:block lg:hidden relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Learn</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">Still don&apos;t understand blockchain? <span className="bg-purple-800 text-white px-1 rounded">POW!</span> is a great way to gain visual understanding!</p>
                  </div>
                </div>

                {/* Tablet only - Coming Soon */}
                <div className="hidden md:block lg:hidden relative p-1 text-center aspect-square" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-normal text-gray-600 font-xerxes z-10 feature-title">Coming Soon</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">More exciting features are <span className="bg-purple-800 text-white px-1 rounded">coming soon</span> to enhance your gaming experience!</p>
                  </div>
                </div>

              </div>
              
              {/* Right Connectors */}
              <div className="flex items-center justify-center h-full -mr-2 sm:-mr-4 md:-mr-8">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
            </div>

            {/* Third Row - Mobile only */}
            <div id="feature-row-2" className={`flex items-center gap-1 md:hidden feature-row ${visibleRows[2] ? 'visible slide-in-left' : ''}`}>
              {/* Left Connectors */}
              <div className="flex items-center justify-center h-full -ml-2">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-1 md:gap-2 flex-1">
                {/* Mobile only: Learn, Coming Soon */}
                <div className="relative p-1 text-center aspect-square flex flex-col justify-center items-center" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-xs font-normal text-gray-600 font-xerxes z-10 feature-title">Learn</h4>
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-pixel text-sm leading-tight text-left pl-1">Still don&apos;t understand blockchain? <span className="bg-purple-800 text-white px-1 rounded">POW!</span> is a great way to gain visual understanding!</p>
                  </div>
                </div>

                <div className="relative p-1 text-center aspect-square flex flex-col justify-center items-center" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h4 className="absolute top-0 left-1 text-xs font-normal text-gray-600 font-xerxes z-10 feature-title">Coming Soon</h4>
                  <p className="text-white font-pixel text-sm leading-tight text-left pl-1">More exciting features are <span className="bg-purple-800 text-white px-1 rounded">coming soon</span> to enhance your gaming experience!</p>
                </div>

              </div>
              
              {/* Right Connectors */}
              <div className="flex items-center justify-center h-full -mr-2">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Connector"
                  width={12}
                  height={12}
                  className="pixel-art"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboards Section */}
      <section className="container mx-auto px-4 pb-2 pt-2 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title Bar - Right Side */}
          <div id="title-section-2" className={`flex justify-end -mr-6 lg:-mr-20 title-section-right ${visibleTitleSections[2] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src={randomTitleBars[1] || "/images/title_bar_scaled_13x_pngcrushed.png"}
                alt="Leaderboards"
                width={600}
                height={120}
                className="pixel-art"
              />
              <h2 className="absolute inset-0 flex items-center justify-end pr-12 text-white font-xerxes text-2xl">
                Leaderboards
              </h2>
            </div>
          </div>
          
          {/* Description Box */}
          <div id="title-section-3" className={`flex justify-end mb-6 -mr-6 lg:-mr-20 description-section-right ${visibleTitleSections[3] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src="/images/title_bar_scaled_13x_pngcrushed yellow.png"
                alt="Leaderboards Description"
                width={600}
                height={60}
                className="pixel-art title-bar-bouncy-right"
              />
              <p className="absolute inset-0 flex items-center justify-end pl-8 pr-12 text-white font-pixel text-lg font-bold leading-relaxed text-right">
                Compete with players worldwide!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-0">
            {/* First Leaderboard */}
            <div id="leaderboard-0" className={`relative p-0.5 lg:p-1 aspect-square max-w-64 mx-auto lg:max-w-none w-full leaderboard-left ${visibleLeaderboards[0] ? 'visible' : ''}`} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(0, 0, 0, 0.1)' }}>
              <div className="flex items-center justify-center h-full relative">
                <h3 className="absolute top-2 left-4 text-xs lg:text-sm font-bold text-white font-xerxes z-30">
                  Leaderboard 1
                </h3>
                <div className="w-full h-full relative z-30 overflow-hidden">
                  <iframe 
                    src="https://dune.com/embeds/5830568/9440539"
                    width="100%" 
                    height="100%"
                    frameBorder="0"
                    className="rounded"
                    style={{ 
                      border: 'none', 
                      transform: 'scale(0.8)',
                      transformOrigin: 'top left',
                      width: '125%',
                      height: '125%'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Second Leaderboard */}
            <div id="leaderboard-1" className={`relative p-0.5 lg:p-1 aspect-square max-w-64 mx-auto lg:max-w-none w-full leaderboard-right ${visibleLeaderboards[1] ? 'visible' : ''}`} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(0, 0, 0, 0.1)' }}>
              <div className="flex items-center justify-center h-full relative">
                <h3 className="absolute top-2 left-4 text-xs lg:text-sm font-bold text-white font-xerxes z-30">
                  Leaderboard 2
                </h3>
                <div className="w-full h-full relative z-30 overflow-hidden">
                  <iframe 
                    src="https://dune.com/embeds/5941703/9590190"
                    width="100%" 
                    height="100%"
                    frameBorder="0"
                    className="rounded"
                    style={{ 
                      border: 'none', 
                      transform: 'scale(0.8)',
                      transformOrigin: 'top left',
                      width: '125%',
                      height: '125%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nouns Builder Section */}
      <section className="container mx-auto px-4 pb-8 pt-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title Bar - Left Side */}
          <div id="title-section-4" className={`flex justify-start -ml-6 lg:-ml-20 title-section ${visibleTitleSections[4] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src={randomTitleBars[2] || "/images/title_bar_scaled_13x_pngcrushed.png"}
                alt="Nouns Builder"
                width={600}
                height={120}
                className="pixel-art"
              />
              <h2 className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-12 text-white font-xerxes text-lg sm:text-xl lg:text-2xl">
                Nouns Builder ⌐◨-◨
              </h2>
            </div>
          </div>
          
          {/* Description Box */}
          <div id="title-section-5" className={`flex justify-start mb-2 -ml-6 lg:-ml-20 description-section ${visibleTitleSections[5] ? 'visible' : ''}`}>
            <div className="relative">
              <Image
                src="/images/title_bar_scaled_13x_pngcrushed yellow blue.png"
                alt="Nouns Builder Description"
                width={600}
                height={60}
                className="pixel-art title-bar-bouncy-left"
              />
              <p className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-12 pr-4 sm:pr-8 text-white font-pixel text-sm sm:text-base lg:text-lg font-bold leading-relaxed title-bar-text">
                <span>POW is&nbsp;</span><a href="https://nouns.wtf/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 underline title-bar-link">Nounish </a><span>. Design your Noun in POW!</span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-2 lg:gap-1">
            {/* Nouns Preview - Left */}
            <div id="nouns-section-0" className={`relative p-0.5 sm:p-1 lg:p-4 aspect-square max-w-48 sm:max-w-64 mx-auto lg:max-w-none w-full nouns-section-left ${visibleNounsSections[0] ? 'visible' : ''}`}>
              <div className="flex items-center justify-center mt-1 sm:mt-2 lg:mt-2 mb-0.5 sm:mb-1 lg:mb-1 h-full relative">
                {/* Overlay border */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h3 className="absolute top-0 left-1 lg:left-3 text-xs sm:text-sm md:text-base lg:text-[22px] font-normal text-gray-600 font-xerxes z-30">
                    Preview
                  </h3>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center relative z-20 p-2 overflow-y-auto">
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <NounsBuilder 
                      showPreviewOnly={true}
                      selectedTraits={selectedTraits}
                      activeTab={activeTab}
                      onTraitOptionsLoaded={setTraitOptions}
                    />
                  </div>
                  <div className="absolute bottom-[33px] lg:bottom-[53px] left-1/2 transform -translate-x-1/2 z-30">
                    <button
                      onClick={generateRandomNoun}
                      className="text-white font-xerxes py-0.5 px-0.5 sm:py-0.5 sm:px-1 md:py-1 md:px-2 rounded text-[4px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-xs shadow-lg hover:shadow-xl transform hover:scale-105 hover:opacity-90 random-noun-button"
                      style={{ backgroundColor: 'rgba(67, 13, 145)' }}
                    >
                      🎲 Random Noun
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chain Connector - Between Preview and Builder */}
            <div className="hidden sm:flex items-center justify-center absolute left-1/2 top-[58%] transform -translate-x-1/2 -translate-y-1/2 z-40">
              {/* Mobile: 1 chain component */}
              <div className="flex items-center sm:hidden">
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
              </div>
              
              {/* Tablet: 4 chain components */}
              <div className="hidden sm:flex lg:hidden items-center gap-1">
  
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
              </div>
              
              {/* Desktop: 3 chain components */}
              <div className="hidden md:flex items-center gap-1">
    
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
                <Image
                  src="/images/blockchain_grid_chainconnector_scaled_112x_pngcrushed.png"
                  alt="Chain Connector"
                  width={12}
                  height={12}
                  className="pixel-art opacity-80"
                />
              </div>
            </div>

            {/* Nouns Builder Controls - Right */}
            <div id="nouns-section-1" className={`relative p-0.5 sm:p-1 lg:p-4 aspect-square max-w-48 sm:max-w-64 mx-auto lg:max-w-none w-full nouns-section-right ${visibleNounsSections[1] ? 'visible' : ''}`}>
              <div className="flex items-center justify-center mt-1 sm:mt-2 lg:mt-2 mb-0.5 sm:mb-1 lg:mb-1 h-full relative">
                {/* Overlay border */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  backgroundImage: 'url(/images/blockchain_grid_scaled_10x_pngcrushed.png)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                  <h3 className="absolute top-0 left-1 lg:left-3 text-xs sm:text-sm md:text-base lg:text-[22px] font-normal text-gray-600 font-xerxes z-30">
                    Select
                  </h3>
                </div>
                <div className="w-full h-full relative z-20 p-1 overflow-y-auto">
                  <NounsBuilder 
                    selectedTraits={selectedTraits}
                    onTraitSelect={handleTraitSelect}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    onTraitOptionsLoaded={setTraitOptions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-[#101117] py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* From Left to Right: Paragraph - QR Code - Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Paragraph - First Column */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-slate-200 leading-relaxed font-pixel text-lg">
                  Ready to start your blockchain empire? Download POW! now and join hundreds of players building their way to the top of the leaderboard.
                </p>
              </div>

              {/* QR Code - Desktop center column only */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-300">
                  <div className="text-center mb-2">
                    <p className="text-xs text-slate-600 font-pixel">
                      Scan QR to download
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/qr-code.png"
                      alt="Download QR Code - Works on both iOS and Android"
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-pixel text-center">
                    iOS & Android
                  </p>
                </div>
              </div>

              {/* Mobile Only: QR Code AND Buttons Side by Side */}
              <div className="flex lg:hidden flex-row items-center gap-4 justify-center w-full">
                {/* The QR code sits here for mobile */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-300">
                    <div className="text-center mb-2">
                      <p className="text-xs text-slate-600 font-pixel">
                        Scan QR to download
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/qr-code.png"
                        alt="Download QR Code - Works on both iOS and Android"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2 font-pixel text-center">
                      iOS & Android
                    </p>
                  </div>
                </div>

                {/* Buttons right side on mobile */}
                <div className="flex flex-col gap-3 items-center download-buttons">
                  <div className={`download-button ${visibleDownloadButtons[0] ? 'visible' : ''}`}>
                    <a
                      href="https://apps.apple.com/ch/app/pow-powered-by-starknet/id6749684084?l=en-GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-100 text-black font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center gap-2 w-[160px] sm:w-[180px] font-pixel border-2 border-slate-300 hover:border-slate-400 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span>Download on App Store</span>
                    </a>
                  </div>
                  <div className={`download-button download-button-delayed ${visibleDownloadButtons[1] ? 'visible' : ''}`}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.starknet.pow&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center gap-2 w-[160px] sm:w-[180px] font-pixel border-2 border-emerald-400 hover:border-emerald-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span>Get it on Google Play</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop: Third Column */}
              <div className="hidden lg:flex flex-col gap-4 items-center lg:items-start download-buttons">
                <div className={`download-button ${visibleDownloadButtons[0] ? 'visible' : ''}`}>
                  <a
                    href="https://apps.apple.com/ch/app/pow-powered-by-starknet/id6749684084?l=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-100 text-black font-semibold py-2 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 w-[198px] font-pixel border-2 border-slate-300 hover:border-slate-400 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download on App Store
                  </a>
                </div>
                <div className={`download-button download-button-delayed ${visibleDownloadButtons[1] ? 'visible' : ''}`}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.starknet.pow&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-2 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 w-[198px] font-pixel border-2 border-emerald-400 hover:border-emerald-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-[#101117] relative z-10">
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
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-pixel text-xs sm:text-sm">GitHub</span>
              </a>
              <a
                href="https://x.com/POW_sn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors"
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
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors"
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
                className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors"
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
