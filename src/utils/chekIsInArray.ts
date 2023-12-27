export function checkIsInArray(
  arr: { status: string; color: string }[],
  searchString: string
): boolean {
  return arr.some((item) => item.status === searchString);
}
