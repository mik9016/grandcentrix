export interface DeviceButton {
  smallText: string
  icon: string
  title: string
  color: string
}
export interface DeviceButtons {
  buttons: Array<DeviceButton>
}
export interface LoginData {
  email: string;
  password: string;
}


export interface TableState {
    devices: Array<TableEntry>,
    loading: boolean,
  }

export interface TableEntry {
  active: boolean
  factory_name: string
  name: string
  serial_number: string
  type: string
  version: string
}
