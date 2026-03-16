import "../styles/global.css";


// export const metadata = {
//   title: {
//     default: "Zahra karimi - Full Stack Dev Portfolio",
//     template: "%'s | Zahra karimi"
//   },
//   description: "Full stack developer with expertise in front-end. Explore my projects and get in touch for collaboration opportunities.",
//   keywords: [
//     "full stack developer",
//     "portfolio",
//     "Zahra karimi",
//     "Calgary",
//     "React", "Next.js", "JavaScript", "TypeScript", "Node.js",
//   ],
//   authors: [{ name: 'Zahra karimi' }],
//   creator: "Zahra karimi",

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "",
//     title: "Zahra karimi - Full Stack Developer Portfolio",
//     description: "Full stack developer with expertise in front-end. Explore my projects and get in touch.",
//     siteName: "Zahra karimi Portfolio",
//     images: [
//       {
//         url: ",
//         width: 1200,
//         height: 630,
//         alt: "Zahra Karimi - Full Stack Developer Portfolio",
//         type: "image/png",
//       },
//     ],
//   },
// };

// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
//   userScalable: true,
// };



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
     
          {children}
    
      </body>
    </html>
  );
}