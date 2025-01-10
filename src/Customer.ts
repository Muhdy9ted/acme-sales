import Address from './Address';
/**
 * Strategic Pattern: Entity
 * Persistence: Stored in DB as a unique object
 * Model: Acme Sales
 * Represents a Customer
 */

export default class Customer {
  constructor(private reference: number, private readonly firstName: string, private readonly middleName: string,
    private readonly lastName: string, private readonly email: string, private phoneNumber: string, private address: Address) {}

  setReference(reference: number): void {
    this.reference = reference;
  }

  getEmail(): string {
    return this.email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getAddress(): Address {
    return this.address;
  }

  getReference(): number {
    return this.reference;
  }

  /**
   * Compares the passed Email & phone number - if any match then returns true
   */
  isCustomerEqual(email: string, phoneNumber: string): boolean {
    return (
      this.email.toLowerCase() === email.toLowerCase() ||
      this.phoneNumber.toLowerCase() === phoneNumber.toLowerCase()
    );
  }

  toString(): string {
    return (
      `reference=${this.reference}\n` +
      `Name=${this.firstName} ${this.middleName} ${this.lastName}\n` +
      `Email=${this.email} Phone=${this.phoneNumber}\n`
    );
  }
}