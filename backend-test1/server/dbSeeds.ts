import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function createTrainersandFetchPokemon() {
    const trainers: { id: string; name: string; }[] = [];

    // Create 10 trainers
    for (let i = 0; i < 10; i++) {
        const userId = faker.string.uuid();
        const userName = faker.person.firstName();

        const user = await prisma.user.create({
            data: {
                id: userId,
                name: userName
            },
        });
        trainers.push(user);
        console.log(`Created user: ${user.name} with id: ${user.id}`);
    }

    console.log('Database has been seeded with trainers');

    // Fetch Pokémon data from the API
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();

    for (const pokemon of data.results) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        const randomTrainer = trainers[Math.floor(Math.random() * trainers.length)];

        // Insert the Pokémon data into the database
        await prisma.pokemon.create({
            data: {
                name: pokemonData.name,
                trainer: {
                    connect: {
                        id: randomTrainer.id,
                    },
                },
            },
        });

        console.log(`Created Pokémon: ${pokemonData.name} for trainer: ${randomTrainer.name}`);
    }

    console.log('Database has been seeded with Pokémon');
}

createTrainersandFetchPokemon()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
