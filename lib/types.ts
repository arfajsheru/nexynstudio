export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface NavCta {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly badge: string;
  readonly headlinePart1: string;
  readonly headlinePart2: string;
  readonly description: string;
  readonly primaryCta: CtaButton;
  readonly secondaryCta: CtaButton;
}

export interface CtaButton {
  readonly label: string;
  readonly href: string;
}

export interface StatItem {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface MotionConfig {
  readonly stagger: number;
  readonly duration: {
    readonly fast: number;
    readonly normal: number;
    readonly slow: number;
  };
}
