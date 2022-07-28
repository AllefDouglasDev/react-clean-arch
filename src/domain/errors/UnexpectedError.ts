export class UnexpectedError extends Error {
  constructor() {
    super('Unexpected Error. Please, try again later.')
    this.name = 'UnexpectedError'
  }
}
