/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PromoBanner } from './components/PromoBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DescriptionSection } from './components/DescriptionSection';
import { InteractiveAuraScan } from './components/InteractiveAuraScan';
import { KeyFeaturesSection } from './components/KeyFeaturesSection';
import { ReportPreviewSection } from './components/ReportPreviewSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { Footer } from './components/Footer';
import { StickyFloatingCTA } from './components/StickyFloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Countdown Promo Bar */}
      <PromoBanner />

      {/* Main Glassmorphic Navigation Header */}
      <Navbar />

      {/* Main Hero Section */}
      <main>
        <HeroSection />
        <InteractiveAuraScan />
        <DescriptionSection />
        <KeyFeaturesSection />
        <ReportPreviewSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating CTA Bar for conversion */}
      <StickyFloatingCTA />
    </div>
  );
}
