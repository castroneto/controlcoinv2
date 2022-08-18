export interface IUser {
    profilePicture?: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    verified?: boolean;
    isActive?: boolean;
    blocked?: boolean;
}