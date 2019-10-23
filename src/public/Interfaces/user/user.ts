export interface IUser {
    email: string,
    name?: string,
    hash: string,
    hashConfirm?: string,
    isActivate?: boolean,
    _id?: string
}
