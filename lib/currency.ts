// lib/currency.ts

export function formatCurrencyUSD(value: number | null | undefined) {
  if (value == null || isNaN(Number(value))) return "$0.00";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value));
}