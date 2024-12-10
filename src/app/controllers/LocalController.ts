import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Local from '../models/Local';

class LocalController{


    async find(req: Request, res: Response){
        const repository = getRepository(Local);

        const id = req.params.id;

        const j = await repository.findOne({where : {id}});

        if(j){     
            console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Local);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Local);//recupera o repositorio do Local.

        const p = repository.create(req.body);//cria a entidade Local.

        await repository.save(p);//efetiva a operacao de insert.

        return res.json(p);//retorna o bojeto json no response.
        
    }

    async update(req: Request, res: Response){
    
            const repository = getRepository(Local);//recupera o repositorio do Local.
        
            const {id} = req.body;//extrai os atributos id do corpo da mensagem
        
            const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
            
            if(!id){
                return res.sendStatus(404);
            }
            
            const p = repository.create(req.body); //cria a entidade Jogador
            
            await repository.save(p); //persiste (update) a entidade na tabela.
            
            return res.json(p);
    }

    //código fonte referente ao pdf da parte 6.
    async delete(req: Request, res: Response){

        const repository = getRepository(Local);//recupera o repositorio do Local.

        const id = req.params.id;//extrai os atributos nickname e endereco do corpo da mensagem.
        
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(idExists){
        
            await repository.remove(idExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Local para remover, retorna o codigo 404.
        }
    }



}

export default new LocalController();