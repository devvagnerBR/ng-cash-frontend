export interface inputProps {

    placeholder: string
    label: string
    type?: 'text' | 'email' | 'password' | 'number'
    name: string
    error?: string | undefined | null
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    password?: boolean
    showPass?: any
    color?: 'black' | 'white'
    value?: string 
}