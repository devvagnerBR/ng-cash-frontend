

export interface INPUT_PROPS {

    placeholder?: string
    type?: 'text' | 'email' | 'password'
    label: string
    name: string
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void
    value: string
    password?: boolean
}
