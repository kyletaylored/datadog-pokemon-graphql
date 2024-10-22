// src/app/page.js
"use client"; // Ensure this file is treated as a client component

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import styles from "./page.module.css";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
      }
    }
  }
`;

export default function Home() {
  const [search, setSearch] = useState("");
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 20, offset: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const filteredPokemons = data.pokemons.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Pokémon Viewer</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.pokemonGrid}>
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.name} className={styles.pokemonCard}>
            <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
