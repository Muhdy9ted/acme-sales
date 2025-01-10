/**
 * Strategic Pattern: Value Object
 * Persistence: It's a Utility; Not persisted to the DB
 * Model: Acme Sales
 * Used for the validation of email & phone number
 */
export default class EmailPhoneValidator {
    public readonly email: string;
    public readonly phoneNumber: string;
  
    constructor(email: string, phoneNumber: string) {
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  
    /**
     * Validate the email address
     * @returns {boolean}
     * @throws {Error}
     */
    validateEmailAddress(): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      if (!emailRegex.test(this.email)) {
        throw new Error("Invalid email address format.");
      }
      return true;
    }
  
    /**
     * Validate the phone number
     * @returns {boolean}
     * @throws {Error}
     */
    validatePhoneNumber(): boolean {
      const phoneRegex = /^[0-9]{10,15}$/; // Simple regex for phone number validation (10-15 digits)
      if (!phoneRegex.test(this.phoneNumber)) {
        throw new Error("Invalid phone number format.");
      }
      return true;
    }
}