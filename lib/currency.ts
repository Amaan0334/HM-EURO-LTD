/**
 * Format a price in pence to GBP currency string.
 * @param pence - Price in pence (e.g., 3445 for £34.45)
 * @returns Formatted string like "£34.45"
 */
export function formatPrice(pence: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(pence / 100);
}

/**
 * Parse a GBP price string to pence.
 * @param price - Price as a number in pounds (e.g., 34.45)
 * @returns Price in pence (e.g., 3445)
 */
export function toPence(price: number): number {
  return Math.round(price * 100);
}
