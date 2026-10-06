import { Link } from 'lucide-react';

export function QRInput({ value, onChange }) {
  return (
    <div className="w-full relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Link className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 sm:text-sm border-gray-200 rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200 ease-in-out bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400 border outline-none"
        placeholder="Enter URL or text to generate..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
