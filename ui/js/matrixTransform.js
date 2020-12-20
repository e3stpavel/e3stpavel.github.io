function matrixTransform(matrix, point) {
  const {a, b, c, d, e, f} = matrix;
  const {x, y} = point;
  return {
    x: a * x + c * y + e,
    y: b * x + d * y + f,
  };
}