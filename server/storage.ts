import { type ContactMessage, type InsertContactMessage, type Quote, type InsertQuote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getContactMessages(): Promise<ContactMessage[]>;
  getQuotes(): Promise<Quote[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessage>;
  private quotes: Map<string, Quote>;

  constructor() {
    this.contactMessages = new Map();
    this.quotes = new Map();
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const quote: Quote = { 
      ...insertQuote, 
      id,
      notes: insertQuote.notes || null,
      createdAt: new Date()
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values());
  }
}

export const storage = new MemStorage();
