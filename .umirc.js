import { resolve } from 'path';

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'suqu',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  alias: {
    '@': resolve('src'),
  },
}
