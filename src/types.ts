export interface AuraAnalysisResult {
  dominantAuraColor: string;
  hexColor: string;
  secondaryAuraColor: string;
  innerConditionSummary: string;
  spiritualReflectionQuote: string;
  strengths: string[];
  focusAreas: string[];
  teaserRecommendation: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  story: string;
  avatarColor: string;
  auraMatch: string;
}
