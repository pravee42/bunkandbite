'use client';
import React, {useState, useEffect} from 'react';
import {ScratchToReveal} from '../components/magicui/scratch-to-reveal';
import {motion} from 'framer-motion';

export default function Home() {
  // Array of bakery discount offers
  const offers = [
    'CHOCO BROWNIE FREE',
    '10% OFF',
    'BETTER LUCK NEXT TIME'
  ];

  // State to store the randomly selected offer
  const [selectedOffer, setSelectedOffer] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);

  // Select a random offer when component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setSelectedOffer(offers[randomIndex]);
  }, []);

  // Handle scratch completion
  const handleScratchComplete = () => {
    setIsRevealed(true);
  };

  // SVG patterns for the background
  const BakeryPattern = () => (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {/* Random brownie and cake SVG patterns */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.4,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            y: [0, Math.random() * 10 - 5],
            x: [0, Math.random() * 10 - 5],
            rotate: [
              `${Math.random() * 10 - 5}deg`,
              `${Math.random() * 10 - 5}deg`,
            ],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}>
          {i % 3 === 0 ? (
            // Brownie
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#8B4513">
              <rect x="2" y="2" width="20" height="20" rx="2" />
            </svg>
          ) : i % 3 === 1 ? (
            // Cupcake
            <svg width="40" height="45" viewBox="0 0 24 30" fill="#FFB6C1">
              <path d="M2,10 Q12,0 22,10 L20,20 L4,20 L2,10 Z" />
              <rect x="8" y="20" width="8" height="10" fill="#D2B48C" />
            </svg>
          ) : (
            // Cake slice
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFC0CB">
              <path d="M2,20 L12,2 L22,20 Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );

  // Confetti effect when revealed
  const Confetti = () => {
    if (!isRevealed) return null;

    return (
      <>
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: '50%',
              top: '50%',
              backgroundColor: [
                '#FFB6C1', // Light pink
                '#FFD700', // Gold
                '#98FB98', // Pale green
                '#87CEFA', // Light sky blue
                '#D8BFD8', // Thistle
                '#FFDAB9', // Peach puff
              ][Math.floor(Math.random() * 6)],
              zIndex: 50,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              x: (Math.random() - 0.5) * 400,
              y: (Math.random() - 0.5) * 400,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
          />
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-amber-50 p-4 relative overflow-hidden">
      {/* Background pattern */}
      <BakeryPattern />

      {/* Confetti effect */}
      <Confetti />

      {/* Top decorative elements */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-16 w-32 h-32 rounded-full bg-pink-100 opacity-40"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute top-12 right-12 md:top-20 md:right-20 w-24 h-24 rounded-full bg-amber-100 opacity-40"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-md w-full"
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.7}}>
        <motion.div
          className="text-center mb-6"
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.2, duration: 0.7}}>
          <h1
            className="text-5xl font-bold text-pink-600 mb-1 tracking-wider"
            style={{fontFamily: 'serif'}}>
            BUNK & BITE
          </h1>
          <p className="text-pink-800 text-lg italic">
            Tastier than a boring class
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white p-8 rounded-3xl shadow-xl border-4 border-pink-200"
          initial={{scale: 0.9, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{delay: 0.4, duration: 0.7}}>
          {/* Decorative bakery items */}
          <motion.div
            className="absolute -top-16 -left-8 text-5xl z-20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}>
            🍪
          </motion.div>

          <motion.div
            className="absolute -bottom-12 -right-6 text-5xl z-20"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}>
            🧁
          </motion.div>

          <motion.div
            className="absolute -top-10 -right-10 text-5xl z-20"
            animate={{
              y: [0, -8, 0],
              x: [0, 8, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}>
            🍰
          </motion.div>

          <motion.div
            className="absolute -bottom-14 -left-6 text-5xl z-20"
            animate={{
              y: [0, 8, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}>
            🍩
          </motion.div>

          {/* Main scratch card */}
          <div className="flex justify-center items-center mb-4">
            <ScratchToReveal
              width={280}
              height={280}
              minScratchPercentage={40}
              className="flex items-center justify-center overflow-hidden rounded-2xl shadow-inner"
              // Chocolate brownie gradient for scratch surface
              gradientColors={['#DC1C74', '#C2185B', '#E91E63']}
              onReveal={handleScratchComplete}
              foregroundComponent={
                <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gradient-to-br from-pink-700 to-pink-900">
                  <motion.div
                    className="w-16 h-16 mb-3"
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}>
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="10"
                        y="10"
                        width="80"
                        height="80"
                        rx="5"
                        fill="#6D4C41"
                      />
                      <rect
                        x="20"
                        y="20"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="43"
                        y="20"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="66"
                        y="20"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="20"
                        y="43"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="43"
                        y="43"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="66"
                        y="43"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="20"
                        y="66"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="43"
                        y="66"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                      <rect
                        x="66"
                        y="66"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#8D6E63"
                      />
                    </svg>
                  </motion.div>
                </div>
              }>
              <motion.div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-amber-100 w-full h-full p-6 rounded-lg"
                initial={{scale: 0.5, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.5}}>
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    repeat: isRevealed ? Infinity : 0,
                    repeatDelay: 3,
                  }}>
                  🎁
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-center text-amber-900 bg-amber-50 p-3 rounded-lg shadow-inner"
                  animate={{
                    y: isRevealed ? [0, -5, 0] : 0,
                    scale: isRevealed ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isRevealed ? Infinity : 0,
                    repeatDelay: 2,
                  }}>
                  {selectedOffer}
                </motion.div>
              </motion.div>
            </ScratchToReveal>
          </div>

          <motion.p
            className="text-center text-pink-800 mt-3 font-medium"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.6, duration: 0.7}}>
            Valid today only at Brownie Delights Bakery
            <div className="text-xl mt-2 font-bold text-pink-900">
              Scratch For Surprise
            </div>
            <div className="text-sm text-pink-400 mt-2 font-medium">
              #bunksleeprepeat
            </div>
          </motion.p>

          {isRevealed && (
            <motion.div
              className="mt-4 rounded-lg overflow-hidden border-2 border-pink-500"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}>
              <div className="bg-pink-600 text-white font-bold py-2 px-4 text-center">
                Our Menu
              </div>
              <div className="bg-white p-2 text-sm">
                <div className="grid grid-cols-2 gap-1">
                  <div className="py-1 px-2">Brownie</div>
                  <div className="py-1 px-2 text-right">₹50</div>
                  <div className="py-1 px-2 bg-pink-500 text-white">
                    Blondie
                  </div>
                  <div className="py-1 px-2 bg-pink-500 text-white text-right">
                    ₹50
                  </div>
                  <div className="py-1 px-2">CupCakes</div>
                  <div className="py-1 px-2 text-right">₹20</div>
                  <div className="py-1 px-2 bg-pink-500 text-white">
                    CakePops
                  </div>
                  <div className="py-1 px-2 bg-pink-500 text-white text-right">
                    ₹20
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/4 w-40 h-40 rounded-full bg-amber-100 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute -bottom-10 right-1/3 w-48 h-48 rounded-full bg-pink-100 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
