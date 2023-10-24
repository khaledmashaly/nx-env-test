export function envy(): string {
  return process.env?.['ENVY'] ?? '';
}
