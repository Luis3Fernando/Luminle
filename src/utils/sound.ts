export const playSound = (src: string) => {
  const audio = new Audio(src);
  audio.play().catch((e) => {
    console.warn("No se pudo reproducir el sonido:", e);
  });
};
