import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Configuracao from '../models/Configuracao';

class ConfiguracaoController{


    async find(req: Request, res: Response){

        console.log("Chamou o find do ConfiguracaoController");

        const repository = getRepository(Configuracao);

        const id = req.params.id;

        console.log("Recebeu via get o parametro id : ");
        console.log(id);

        const j = await repository.findOne({where : {id}});

        if(j){                
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async list(req: Request, res: Response){

        console.log("Chamou o list do ConfiguracaoController");

        const repository = getRepository(Configuracao);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        console.log("Chamou o store do ConfiguracaoController");

        const repository = getRepository(Configuracao);//recupera o repositorio do Local.

        const p = repository.create(req.body);//cria a entidade Local.

        await repository.save(p);//efetiva a operacao de insert.

        return res.json(p);//retorna o bojeto json no response.
        
    }

    async update(req: Request, res: Response){

        console.log("Chamou o update do ConfiguracaoController");

        const repository = getRepository(Configuracao);//recupera o repositorio do Parametro.
    
        const {id} = req.body;//extrai os atributos id do corpo da mensagem
    
        const parametroExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!parametroExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); 
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
    }

    async delete(req: Request, res: Response){

        console.log("Chamou o delete do ConfiguracaoController");

        const repository = getRepository(Configuracao);//recupera o repositorio do Local.

        const id = req.params.id;//extrai os atributos nickname e endereco do corpo da mensagem. (via get)
        
        const parametroExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(parametroExists){        
            await repository.remove(parametroExists);//caso exista, então aplica a remocao fisica
            return res.sendStatus(204);//retorna o codigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Local para remover, retorna o codigo 404.
        }
    }

}

export default new ConfiguracaoController();