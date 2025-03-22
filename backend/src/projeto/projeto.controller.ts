import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly repo: ProjetoProvider) {}
        
    @Get()
    async findAll(): Promise<Projeto[]> { 
        return this.repo.findAll()
    }

    @Get(':id')
    async getById(@Param("id") id: string): Promise<Projeto | null> { 
        return this.repo.getById(Number(id)) as any
    }
}
