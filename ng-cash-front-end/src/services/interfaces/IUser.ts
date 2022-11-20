

export interface INPUT_PROPS {

    placeholder?: string
    type?: 'text' | 'email' | 'password'
    label: string
    name: string
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void
    onBlur?: string 
    value: string
    password?: boolean
}
