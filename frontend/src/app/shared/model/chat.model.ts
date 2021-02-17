// Chat users
export interface ChatUsers {
  id?: number
  name?: string
  status?: string
  profile?: string
  seen?: string
  online?: boolean
  typing?: boolean
  authenticate?: number
  call?: call
}

export interface call {
  status?: string
  date_time?: string
}

// Messages
export interface Messages {
  sender?: string
  time?: string
  text?: string
}

// Chate
export interface chat {
  id?: number
  message?: Messages[]
}