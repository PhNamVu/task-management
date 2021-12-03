export const isLongText = (str: string , limit: number) => {
    if ( str?.length > limit) return true
    return false
}