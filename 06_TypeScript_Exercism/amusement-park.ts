interface Visitor {
  name: string;
  age: number;
  ticketId: string | null;
}

interface VisitorWithGtc extends Visitor {
  gtc?: {
    version?: string;
  } | null;
}

export function createVisitor(name: string, age: number, ticketId: string): Visitor {
  return {
    name, age, ticketId
  };
}

export function revokeTicket(visitor: Visitor): Visitor {
  if (visitor['ticketId']) {
    visitor['ticketId'] = null;
  }
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets: Record<string, string | null>, ticketId: string): string {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

/**
}