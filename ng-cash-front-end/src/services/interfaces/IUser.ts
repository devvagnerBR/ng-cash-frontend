

// export interface INPUT_PROPS {



//     placeholder?: string
//     type?: 'text' | 'email' | 'password'
//     label: string
//     name: string
//     // onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void
//     onBlur?: string | undefined
//     value: string
//     password?: boolean
//     required?: any
// }

export interface inputProps {
    // placeholder?: string
    // type?: 'text' | 'email' | 'password'
    // label: string
    // name: string
    // onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void

    // onBlur?: () => void

    // value: string
    // password?: boolean
    // required?: any
    // error?: string
    placeholder: string
    label: string
    type?: 'text' | 'email' | 'password'
    name: string
    error?: string | undefined | null
    onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    password?: boolean
    showPass?: any
}