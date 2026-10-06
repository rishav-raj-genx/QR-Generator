# QR Code Generator

A modern, responsive, and highly interactive QR Code Generator built with React, Vite, and Tailwind CSS. The application allows users to generate and download high-quality QR codes instantly.

## 🚀 Features

- **Dynamic Rendering:** The QR code updates in real-time as you type.
- **Beautiful UI/UX:** Clean, minimalist design with a soft gradient background, powered by Tailwind CSS v4.
- **Micro-interactions:** Smooth animations and transitions using Framer Motion (fade-in, scale-up, hover states).
- **Download Functionality:** Allows users to download the generated QR code directly to their device as a high-quality PNG.
- **Input Validation:** Automatically strips leading and trailing whitespaces before rendering the QR code.
- **Fully Responsive:** Layout designed to stack cleanly on mobile devices and scale up for desktops.
- **SEO Optimized:** Implements standard HTML semantic tags and metadata.

## 🛠 Tech Stack

- **Framework:** React 19 (Initialized via Vite)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **QR Code Generation:** qrcode.react
- **Package Manager:** pnpm

## 📦 Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/rishav-raj-genx/QR-Generator.git
   cd QR-Generator/qr-generator
   ```

2. **Install dependencies:**
   Make sure you have `pnpm` installed. Then run:
   ```bash
   pnpm install
   ```

3. **Start the Development Server:**
   ```bash
   pnpm run dev
   ```
   The application will be running at `http://localhost:5173/`.

## 🏗 Build for Production

To create an optimized production build, run:

```bash
pnpm run build
```

This will generate the minified assets inside the `dist` folder.

## 📁 Project Structure

```
qr-generator/
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx    # Application Header with icon
│   │   ├── QRDisplay.jsx # Renders and animates the QR Code / Handles downloads
│   │   └── QRInput.jsx   # Input field for typing the URL/Text
│   ├── App.jsx           # Main layout and state management
│   ├── index.css         # Tailwind configurations & globals
│   └── main.jsx          # React initialization
├── index.html            # Main HTML file with custom fonts (Inter)
├── vite.config.js        # Vite & Tailwind configurations
└── package.json          # Project dependencies and scripts
```
