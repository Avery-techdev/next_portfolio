type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

/**
 * Utility for conditionally combining class names.
 * Handles strings, arrays, objects, and falsy values.
 * @example
 * cn("base", isActive && "active", { hover: true, disabled: false })
 * // => "base active hover"
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (
      typeof input === "string" ||
      typeof input === "number"
    ) {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(" ");
}
