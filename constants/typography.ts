/**
 * Typography tokens derived from the design's Figma type scale.
 * Single source of truth consumed by `components/text.tsx` and the
 * `useFonts` call in `app/_layout.tsx` (font family keys must match).
 */

export const FontWeights = {
  light: "Inter_300Light",
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
} as const;

export const TextVariants = {
  display: {
    large: { fontSize: 80, lineHeight: 84 },
    base: { fontSize: 72, lineHeight: 76 },
    small: { fontSize: 60, lineHeight: 63 },
  },
  heading: {
    large: { fontSize: 40, lineHeight: 46 },
    base: { fontSize: 32, lineHeight: 37 },
    small: { fontSize: 24, lineHeight: 28 },
  },
  body: {
    large: { fontSize: 18, lineHeight: 26 },
    base: { fontSize: 16, lineHeight: 23 },
    small: { fontSize: 14, lineHeight: 20 },
  },
  label: {
    large: { fontSize: 14, lineHeight: 19 },
    base: { fontSize: 12, lineHeight: 16 },
    small: { fontSize: 11, lineHeight: 15 },
  },
} as const;

export const DefaultVariantWeight: Record<
  keyof typeof TextVariants,
  keyof typeof FontWeights
> = {
  display: "semibold",
  heading: "semibold",
  body: "regular",
  label: "regular",
};

export type TextVariant = keyof typeof TextVariants;
export type TextSize = keyof (typeof TextVariants)["display"];
export type TextWeight = keyof typeof FontWeights;
