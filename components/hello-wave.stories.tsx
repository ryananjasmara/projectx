import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { HelloWave } from './hello-wave';

const meta = {
  title: 'HelloWave',
  component: HelloWave,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof HelloWave>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
