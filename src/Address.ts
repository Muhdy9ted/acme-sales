/**
 * Strategic Pattern: Value Object
 * Persistence: Stored in DB as part of a Customer object
 * Model: Acme Sales
 * Represents a physical address
 */

export default class Address {
  constructor(public readonly addressLine1: string, public readonly addressLine2: string, public readonly city: string, 
    public readonly state: string, public readonly zipcode: string, private contactInformationValidated: boolean) {}
}