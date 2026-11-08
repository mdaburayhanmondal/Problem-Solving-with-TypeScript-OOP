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
