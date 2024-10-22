// src/lib/apolloClient.js
"use client"; // Ensure this file is treated as a client component

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    //   uri: "https://beta.pokeapi.co/graphql/v1beta",
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
});

export default function ApolloWrapper({ children }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
