import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import {
  DefaultVariantWeight,
  FontWeights,
  TextVariants,
  type TextSize,
  type TextVariant,
  type TextWeight,
} from '@/constants/typography';
import { useThemeColor } from '@/hooks/use-theme-color';

export type TextProps = RNTextProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
};

export function Text({
  style,
  lightColor,
  darkColor,
  variant = 'body',
  size = 'base',
  weight,
  ...rest
}: TextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const resolvedWeight = weight ?? DefaultVariantWeight[variant];
  const { fontSize, lineHeight } = TextVariants[variant][size];
  const fontFamily = FontWeights[resolvedWeight];

  return <RNText style={[{ color, fontSize, lineHeight, fontFamily }, style]} {...rest} />;
}
