// src/app/layout.js
import ApolloWrapper from "../lib/apolloClient"; // ApolloWrapper is a client component
import './globals.css';

export const metadata = {
  title: 'Pokémon Viewer',
  description: 'A demo app to view and filter Pokémon using GraphQL PokeAPI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          {children} {/* ApolloWrapper here */}
        </ApolloWrapper>
      </body>
    </html>
  );
}
