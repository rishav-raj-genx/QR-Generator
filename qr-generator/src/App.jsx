import { useState } from 'react';
import { Header } from './components/Header';
import { QRInput } from './components/QRInput';
import { QRDisplay } from './components/QRDisplay';
import { motion } from 'framer-motion';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-indigo-50/50 blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl mx-auto"
      >
        <Header />

        <div className="mt-8 bg-white/80 backdrop-blur-xl py-10 px-8 shadow-2xl shadow-gray-200/50 rounded-3xl border border-white">
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 ml-1">
                Content
              </label>
              <QRInput value={inputValue} onChange={setInputValue} />
              <p className="text-xs text-gray-400 ml-2">
                Your QR code updates automatically as you type.
              </p>
            </div>

            <div className="pt-2">
              <QRDisplay value={inputValue} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 font-medium">
            Fast, secure, and generated locally in your browser.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
