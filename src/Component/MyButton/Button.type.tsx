type DataType = {
    content?: any
    disabled?: boolean
    styles?: string
    img?: any
    active?: () => void
}

export type DataMain = {
    primary: DataType
    secondary: DataType
    secondary2: DataType
    disLike: DataType
    like: DataType
    bookmark: DataType
}