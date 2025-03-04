import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Chỉ kích hoạt khi build production
  fallbacks: {
    document: '/_offline',
    image: '/static/images/fallback.png',
    audio: '/static/audio/fallback.mp3', 
    video: '/static/video/fallback.mp4', 
    font: '/static/fonts/fallback.woff2',
  },
  ...nextConfig,
});