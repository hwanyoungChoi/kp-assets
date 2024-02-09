export function toFormattedPrice(price?: number): string {
  if (!price) {
    return '0원';
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
}
