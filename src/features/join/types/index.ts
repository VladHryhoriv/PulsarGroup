export interface LoginParams {
  email: string
  password: string
}

export interface SignUpParams {
  name: string
  email: string
  password: string
}

export interface RestoreParams {
  email: string
}

export interface ResetParams {
  password: string
  code: string
}
