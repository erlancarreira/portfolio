import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    async findAll(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany() as any
    }
    
    async getById(id: number): Promise<Projeto | null> { 
        return this.prisma.projeto.findUnique({
            where: { id },
            include: { tecnologias: true }
        }) as any
    }
}
