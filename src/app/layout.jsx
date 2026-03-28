import "../styles/global.css";


export const metadata = {
  title: {
    default: "Zahra Karimi - Full Stack Developer Portfolio",
    template: "%s | Zahra Karimi",
  },
  description: "Full stack developer specializing in React, Next.js, and Javascript. Explore my projects and get in touch for collaboration opportunities.",
  keywords: [
    "full stack developer",
    "portfolio",
    "Zahra Karimi",
    "Calgary",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "web development",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Zahra Karimi" }],
  creator: "Zahra Karimi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zahra-karimi-portfolio.vercel.app/",
    title: "Zahra Karimi - Full Stack Developer Portfolio",
    description: "Full stack developer specializing in React, Next.js, and Javascript. Explore my projects and get in touch for collaboration opportunities.",
    siteName: "Zahra Karimi Portfolio",
    images: [
      {
        url: "/images/ZahraPhoto.png",
        width: 1200,
        height: 630,
        alt: "Zahra Karimi - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
     
          {children}
    
      </body>
    </html>
  );
}