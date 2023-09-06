
//errors to capture broken schema invariants at compile time

//number must be a number strictly greater than zero
export class StrictlyPositiveNumberError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "StrictlyPositiveNumberError";
    }
}
  
//must be a positive integer (zero inclusive)
export class PositiveIntegerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "minItemsError";
    }
}
