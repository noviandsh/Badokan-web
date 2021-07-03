const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/scripts/views/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/favicon.png'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new WebpackPwaManifest({
      name: 'Badokan App',
      short_name: 'Badokan',
      description: 'Temukan Makanan Enak di Seluruh Indonesia. Kurus atau gendut adalah pilihan, tapi makan enak adalah kewajiban.',
      start_url: './index.html',
      display: 'standalone',
      background_color: '#1f1f1f',
      theme_color: '#ffc107',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x48.png'),
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x72.png'),
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x96.png'),
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x128.png'),
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x192.png'),
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x384.png'),
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/maskable_icon_x512.png'),
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    }),
  ],
};
