
//errors to capture broken schema invariants at compile time

export class StrictlyPositiveNumberError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "StrictlyPositiveNumberError";
    }
  }
  

  