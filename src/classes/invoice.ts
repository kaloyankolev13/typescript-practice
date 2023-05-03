export class Invoice {
  // private client: string;
  // readonly details: string;
  // public amount: number;

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
