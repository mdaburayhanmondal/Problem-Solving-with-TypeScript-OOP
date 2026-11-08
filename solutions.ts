function multiplyValue(num1: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return num1 * 2;
  }
  return num1 * multiplier;
}
