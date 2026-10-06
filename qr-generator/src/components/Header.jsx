import { QrCode } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-center space-x-3 mb-8 pt-12">
      <div className="bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-200">
        <QrCode className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
        QR Generator
      </h1>
    </header>
  );
}
