enum StatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  unprocessabelEntity = 422,
  internalServerError = 500,
}

export default StatusCode;