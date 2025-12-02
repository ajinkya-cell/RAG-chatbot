import { embed , embedMany } from "ai"
import { createMistral } from "@ai-sdk/mistral";
import { NextResponse } from 'next/server';

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY
});

export async function generateEmbedding(text : string){
    const input = text.replace("\n" , " ");

    const { embedding } = await embed({
        model:mistral.textEmbeddingModel("mistral-embed"),
        value:input
    })
    return embedding;
    
}

export async function generateEmbeddings(texts : string[]){
    const inputs = texts.map((text)=> text.replace("\n" , " "))
    const { embeddings } = await embedMany({
        model:mistral.textEmbeddingModel('mistral-embed'),
        values:inputs
    })
    return embeddings;
}