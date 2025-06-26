import { TRPCProviderClient } from "@/providers";
import { ClerkProvider } from "@clerk/nextjs";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyTube | Your favorite videos, right here",
  description:
    "MyTube is a video sharing platform that allows you to share your favorite videos with your friends and family.",
  icons: {
    icon: "/logo.svg",
  },
  category: "social",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <Toaster />
          <TRPCProviderClient>{children}</TRPCProviderClient>
        </body>
      </html>
    </ClerkProvider>
  );
}
