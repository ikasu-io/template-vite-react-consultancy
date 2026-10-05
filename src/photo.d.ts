// Type of a photo imported with `?photo` (see vite.config.ts).
declare module '*?photo' {
  const photo: { src: string; srcset: string; w: number; h: number }
  export default photo
}
