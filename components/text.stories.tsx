import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { FontWeights, TextVariants } from '@/constants/typography';

import { Text } from './text';

const meta = {
  title: 'Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    size: 'base',
  },
  argTypes: {
    children: { control: false },
    variant: { control: 'select', options: Object.keys(TextVariants) },
    size: { control: 'select', options: ['large', 'base', 'small'] },
    weight: { control: 'select', options: Object.keys(FontWeights) },
    lightColor: { control: 'color' },
    darkColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 8 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
