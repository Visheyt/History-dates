type CreateDotsParams = {
  numDots: number;
  width: number;
  height: number;
};

export const createDots = ({ numDots, width, height }: CreateDotsParams) => {
  const radiusX = width / 2;
  const radiusY = height / 2;
  const dots = Array.from({ length: numDots }, (_, i) => {
    const angle = (i + 1) * 10 * (Math.PI / 30);
    const x = radiusX * Math.cos(angle);
    const y = radiusY * Math.sin(angle);
    return { x, y };
  });
  return dots;
};
