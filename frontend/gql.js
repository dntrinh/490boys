import { gql } from "@apollo/client";

export const SIGNUP = gql`
    mutation signUp($email: String!, $password: String!) {
        signUp(email: $email, password: $password) {
            user {
            id
            email
            password
            }
            token
        }
    }
`;

export const SIGNIN = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            user {
            id
            email
            password
            }
            token
        }
    }
`;