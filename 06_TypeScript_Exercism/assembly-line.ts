class ElectronicDevice {
  type?: string;
  constructor(type?: string) {
    this.type = type;
  }
}


export function isBoolean(value: unknown): value is boolean {
  if (typeof value === 'boolean') {
    return true;
  }
  return false;
}


export function isNumber(value: unknown): boolean {
  return Number.isFinite(value as number) || typeof value === 'bigint';
}


export function isObject(value: unknown): boolean {
  if (!value) return false;
  return typeof value === 'object';
}


export function isNumericString(value: unknown): boolean {
  if (typeof value !== 'string') {
    return false;
  }
  const integerRegex = /^-?\d+$/;

  return integerRegex.test(value);
}


export function isElectronic(object: unknown): boolean {
  return object instanceof ElectronicDevice;
}


export function isNonEmptyArray(value: unknown): boolean {
  if (Array.isArray(value)) return (value as any[]).length !== 0;
  return false;
}


export function isEmptyArray(value: unknown): boolean {
  if (Array.isArray(value)) return (value as any[]).length === 0;
  return false;
}


export function hasType(obj: unknown): boolean {
  return obj !== null && typeof obj === 'object' && 'type' in (obj as Record<string, unknown>);
}


export function assertHasId(object: Record<string, unknown>): asserts object is { id: unknown } {
  if (!Object.prototype.hasOwnProperty.call(object, 'id')) {
    throw new Error("Object is missing the 'id' property");
  }
  return undefined as any;
}


export function hasIdProperty(object: object): boolean {
  return Object.prototype.hasOwnProperty.call(object as Record<string, unknown>, 'id');
}


export function hasDefinedType(object: object): boolean {
  return Object.prototype.hasOwnProperty.call(object as Record<string, unknown>, 'type') && (object as any).type !== undefined;
}