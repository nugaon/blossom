import { Account } from '../model/general.types'
import {
  LoginData,
  NetworkEditData,
  RegisterData,
  RegisterDataBase,
  RegisterDataMnemonic,
  RegisterDataPrivateKey,
  UsernameCheckData,
} from '../model/internal-messages.model'
import { Network } from '../model/storage/network.model'
import { KeyData, Session } from '../model/storage/session.model'
import { Swarm } from '../model/storage/swarm.model'

export function isLoginData(data: unknown): data is LoginData {
  const { username, password, network } = (data || {}) as LoginData

  return Boolean(username && password && isNetwork(network))
}

export function isRegisterData(data: unknown): data is RegisterData {
  return Boolean(isRegisterDataMnemonic(data) || isRegisterDataPrivateKey(data))
}

export function isRegisterDataMnemonic(data: unknown): data is RegisterDataMnemonic {
  const registerData = (data || {}) as RegisterDataMnemonic

  return Boolean(isRegisterDataBase(data) && registerData.mnemonic)
}

export function isRegisterDataPrivateKey(data: unknown): data is RegisterDataPrivateKey {
  const registerData = (data || {}) as RegisterDataPrivateKey

  return Boolean(isRegisterDataBase(data) && registerData.privateKey)
}

export function isRegisterDataBase(data: unknown): data is RegisterDataBase {
  const { username, password, network } = (data || {}) as RegisterDataBase

  return Boolean(username && password && isNetwork(network))
}

export function isAccount(data: unknown): data is Account {
  return typeof data === 'string' && data.startsWith('0x') && data.length === 42
}

export function isUsernameCheckData(data: unknown): data is UsernameCheckData {
  const usernameCheckData = (data || {}) as UsernameCheckData

  return Boolean(usernameCheckData.username && usernameCheckData.network)
}

export function isNetwork(data: unknown): data is Network {
  const network = (data || {}) as Network

  return Boolean(network.label && network.rpc)
}

export function isNetworkEditData(data: unknown): data is NetworkEditData {
  const { label, network } = (data || {}) as NetworkEditData

  return Boolean(label && isNetwork(network))
}

export function isSwarm(data: unknown): data is Swarm {
  const { extensionId } = (data || {}) as Swarm

  return typeof extensionId === 'string'
}

export function isKeyData(data: unknown): data is KeyData {
  const { privateKey, url } = (data || {}) as KeyData

  return typeof privateKey === 'string' && typeof url === 'string'
}

export function isSession(data: unknown): data is Session {
  const { username, network, key } = (data || {}) as Session

  return typeof username === 'string' && isNetwork(network) && isKeyData(key)
}
