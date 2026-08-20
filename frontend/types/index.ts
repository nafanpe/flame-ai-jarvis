export type TelemetryData = {
  'cpu': number,
  'ram': number,
  'disk': {
      'total': number,
      'used': number,
      'free': number,
      'usage': number,
  },
  'time': string
}