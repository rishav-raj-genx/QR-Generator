import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { Download, QrCode as QrIcon } from 'lucide-react';
import { useRef } from 'react';

export function QRDisplay({ value }) {
  const qrRef = useRef(null);
  
  const hasValue = value.trim().length > 0;

  const handleDownload = () => {
    if (!qrRef.current) return;
    
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm min-h-[360px]">
      <div className="relative flex items-center justify-center w-64 h-64 mb-6" ref={qrRef}>
        <AnimatePresence mode="wait">
          {hasValue ? (
            <motion.div
              key="qr"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="p-4 bg-white rounded-2xl shadow-xl shadow-indigo-100/50 ring-1 ring-gray-100"
            >
              <QRCodeCanvas
                value={value.trim()}
                size={220}
                bgColor={"#ffffff"}
                fgColor={"#111827"}
                level={"H"}
                includeMargin={false}
                className="rounded-lg"
              />
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50"
            >
              <QrIcon className="w-16 h-16 mb-4 text-gray-200" />
              <p className="text-sm font-medium text-gray-400">QR Code will appear here</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hasValue && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download PNG</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
