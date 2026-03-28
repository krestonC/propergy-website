export const EASE_SMOOTH_DECEL = "power4.out";

export const STAGGER_DELAY = 0.12;

export const REVEAL_CONFIG = {
  from: { opacity: 0, y: 50 },
  to: {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: EASE_SMOOTH_DECEL,
  },
  trigger: {
    start: "top 85%",
    toggleActions: "play none none none" as const,
  },
};
