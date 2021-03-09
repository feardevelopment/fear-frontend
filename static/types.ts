export type HTTPResponse = {
  type: string,
  code: number,
  result: string
}

export type EMail = {
  from: string,
  subject: string,
  date: Date,
  read: boolean,
  uid: string
}