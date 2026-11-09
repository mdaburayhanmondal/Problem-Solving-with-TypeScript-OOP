function multiplyValue(num1: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return num1 * 2;
  }
  return num1 * multiplier;
}

function processInput(inp: string | number | boolean): string | number {
  if (typeof inp === 'string') {
    return inp.trim().toLowerCase();
  } else if (typeof inp === 'number') {
    return inp * 10;
  }

  if (inp === true) {
    return 'Active';
  } else {
    return 'Inactive';
  }
}

function formatCoordinate(
  coord: readonly [latitude: number, longitude: number, locationName: string],
): string {
  const [lat, longi, loc] = coord;
  return `Location: ${loc} (${lat}, ${longi})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce<T[]>((ac, cur) => {
    return [...ac, ...cur];
  }, []);
}
