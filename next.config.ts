import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/_offline',
    image: '/static/images/fallback.png',
    audio: '/static/audio/fallback.mp3',
    video: '/static/video/fallback.mp4',
    font: '/static/fonts/fallback.woff2',
  },
  ...nextConfig,
});