import { Network } from './storage/network.model'
import { Account, Mnemonic, PrivateKey } from './general.types'

export interface LoginData {
  username: string
  password: string
  network: Network
}

export interface RegisterDataBase {
  username: string
  password: string
  network: Network
}

export interface RegisterDataMnemonic extends RegisterDataBase {
  mnemonic: Mnemonic
}

export interface RegisterDataPrivateKey extends RegisterDataBase {
  privateKey: PrivateKey
}

export type RegisterData = RegisterDataMnemonic | RegisterDataPrivateKey

export interface UsernameCheckData {
  username: string
  network: Network
}

export interface RegisterResponse {
  account: Account
  mnemonic: Mnemonic
  privateKey: PrivateKey
}

export interface UserResponse {
  username: string
  account: Account
  network: Network
}

export interface NetworkEditData {
  label: string
  network: Network
}
