import { Booking } from "./booking";

export interface User {
    name: string;
    gender: string;
    age: number;
    weight: number;
    height: number;
    address: string;
    email: string;
    phoneNumber: string;
    membershipStatus: string;
    membershipType: string;
    username: string;
    password: string;
    isLoggedIn: boolean;
    loginAttempts: number;
    isLockedOut: boolean;
    userId: number;
}
