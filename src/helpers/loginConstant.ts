export interface IMessage {
    title: string,
    content: string,
    icon: string
}
export const USER_DETAILS_ERROR: IMessage = { title: "Oops!,", content: "The username or password is incorrect", icon: "error" }
export const ACCOUNT_BLOCKED_ERROR: IMessage = { title: "Oops!,", content: "Your account has been blocked. Please try again in 24 hours", icon: "error" }
