import './globals.css';

export const metadata = {
  title: 'Shristi Group of Institutes, Raipur | Shristi Nursing College & Nupoor College of Pharmacy',
  description: 'Approved by Indian Nursing Council (INC) New Delhi & State Nursing Council. Offering B.Sc. Nursing, GNM, Post Basic B.Sc., M.Sc. Nursing, D.Pharm & Paramedical courses in Raipur, Chhattisgarh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8fafc] text-[#1e293b] font-sans antialiased min-h-screen flex flex-col selection:bg-[#991b1b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
