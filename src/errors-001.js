class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotValidationError";
  }
}

;(async() => {
  try {
    throw new ValidationError('val err')
  } catch(err) {
    console.log('instanceof Error', err instanceof Error)
    console.log('instanceof ValidationError', err instanceof ValidationError)
    console.log('instanceof NotValidationError', err instanceof NotValidationError)

    console.error(err)
  }
})()
