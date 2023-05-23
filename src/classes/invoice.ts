import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
    // Only work if has access modifiers
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
