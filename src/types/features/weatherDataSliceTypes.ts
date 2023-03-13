export type InitialState = {
  data: {}
  isLoading: boolean
}

type AirQuality = {
  pm2_5: number
  pm10: number
  so2: number
  no2: number
  o3: number
  co: number
}

type Condition = {
  text: string
  icon_src: string
}

export type WeatherDataCurrent = {
  air_quality: AirQuality
  feelslike_c: number
  humidity: number
  is_day: number
  last_updated: string
  temp_c: number
  uv: number
  vis_km: number
  condition: Condition
  wind_degree: number
  wind_dir: string
  wind_kph: number
}

export type LocationData = {
  country: string
  localtime: string
  name: string
  region: string
}

export type DataFetched = {
  current: WeatherDataCurrent
  location: LocationData
}