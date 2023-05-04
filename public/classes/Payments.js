export class Invoice {
    constructor(
    // Only work if has access modifiers
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
}
