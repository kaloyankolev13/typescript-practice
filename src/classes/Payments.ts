import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payments implements HasFormatter {
  constructor(
    // Only work if has access modifiers
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} owes $${this.amount} for ${this.details}`;
  }
}
