/**
 * type definition for User model
 */

type IUser = {
    id?: string;
    username: string;
    email?: string;
    password?: string;
    temporalCode?: string;
}

export default IUser;
