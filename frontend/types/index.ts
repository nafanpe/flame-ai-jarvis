export type ProcessData = {
  'pid': number,
  'name': string,
  'cpu_percent': number,
}

export type TelemetryData = {
  'cpu': number,
  'ram': number,
  'disk': {
      'total': number,
      'used': number,
      'free': number,
      'usage': number,
  },
  'time': string,
  'processes'? : ProcessData[]
}