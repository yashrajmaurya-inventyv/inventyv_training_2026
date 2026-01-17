//


export function translate2d(dx: number, dy: number): (x: number, y: number) => [number, number] {
  return function moveCoordinatesRight2Px(x: number, y: number): [number, number] {
    let coord1 = x + dx;
    let coord2 = y + dy;
    return [coord1, coord2];
  };
}


export function scale2d(sx: number, sy: number): (x: number, y: number) => [number, number] {
  return function doubleScale(x: number, y: number): [number, number] {
    let coord1 = x * sx;
    let coord2 = y * sy;
    return [coord1, coord2];
  };
}


export function composeTransform(
  f: (x: number, y: number) => [number, number],
  g: (x: number, y: number) => [number, number]
): (x: number, y: number) => [number, number] {
  return function (x: number, y: number): [number, number] {
    const [intermediateX, intermediateY] = f(x, y);
    return g(intermediateX, intermediateY);
  };
}


export function memoizeTransform(f: (x: number, y: number) => [number, number]): (x: number, y: number) => [number, number] {
  let lastX: number | null = null;
  let lastY: number | null = null;
  let lastResult: [number, number] | null = null;

  return function (x: number, y: number): [number, number] {
    if (x === lastX && y === lastY && lastResult !== null) {
      return lastResult;
    }
    lastX = x;
    lastY = y;
    lastResult = f(x, y);

    return lastResult;
  };
}