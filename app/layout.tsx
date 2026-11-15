import type { Metadata } from "next";
import "./styles.css";
import "./hero-fit.css";
import "./compact-spacing.css";
import "./imagery.css";
import "./contact-type.css";
export const metadata: Metadata = { title: "Metagize Solutions LLP | Building What's Next", description: "Strategy, technology and multidisciplinary solutions for a changing world.", openGraph: { title: "Metagize Solutions LLP", description: "Strategy, technology and solutions for a changing world.", type: "website" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
