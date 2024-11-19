import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#A24C4C",
  colorScheme: "dark",
}

export const metadata : Metadata = {
  title: "Taha Paracha - A Developer and Designer",
  description: "Hey, im Taha Paracha, I'm a student striving to help new developers and young entrepreneurs create their dreams. I use the latest technology to create a beautiful UI and ensure an amazing user experience.",
  applicationName: 'Taha Paracha',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Developer', 'Design'],
  creator: 'Taha Paracha',
  openGraph: {
    title: 'Taha Paracha - A Developer and Designer',
    description: "Hey, im Taha Paracha, I'm a student striving to help new developers and young entrepreneurs create their dreams. I use the latest technology to create a beautiful UI and ensure an amazing user experience.",
    url: 'https://tahaparacha.vercel.app',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://tahaparacha.vercel.app/images/thumbnail.png',
        width: 800,
        height: 600,
      },
    ]
  }
}


export default function RootLayout(
  { children } : 
  {
  children: React.ReactNode, 
  }) {
  return (
    <html lang="en">
      <body>
        
          <Analytics />
          <SpeedInsights />
          {children}

      </body>
    </html>
  );
}
