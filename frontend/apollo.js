// import {
//     ApolloClient,
//     InMemoryCache,
//     createHttpLink
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const URI = 'http://10.0.2.2:4000/';

// const link = createHttpLink({
//     uri: URI,
// })

// const authLink = setContext(async (_, { headers }) => {
//     const token = await AsyncStorage.getItem('@token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token || '',
//         }
//     }
// });

// export const client = new ApolloClient({
//     uri: URI,
//     link: authLink.concat(link),
//     cache: new InMemoryCache()
// });
