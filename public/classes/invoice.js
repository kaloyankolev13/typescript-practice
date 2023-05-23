export class Invoice {
  constructor(
    // Only work if has access modifiers
    client,
    details,
    amount
  ) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
