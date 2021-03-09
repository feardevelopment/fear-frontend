export type HTTPResponse = {
  type: string,
  code: number,
  result: string
}

export type EMail = {
  from: string,
  subject: string,
  date: string,
  read: boolean,
  uid: string
}