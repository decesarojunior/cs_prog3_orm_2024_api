import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Parametro from '../models/Parametro';

class ParametroController{


    async find(req: Request, res: Response){

        console.log("Chamou o find do ParametroController");

        const repository = getRepository(Parametro);

        const codigo = req.params.codigo;

        console.log("Recebeu via get o parametro codigo : ");
        console.log(codigo);

        const j = await repository.findOne({where : {codigo}});

        if(j){                
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async list(req: Request, res: Response){

        console.log("Chamou o list do ParametroController");

        const repository = getRepository(Parametro);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        console.log("Chamou o store do ParametroController");

        const repository = getRepository(Parametro);//recupera o repositorio do Local.

        const p = repository.create(req.body);//cria a entidade Local.

        await repository.save(p);//efetiva a operacao de insert.

        return res.json(p);//retorna o bojeto json no response.
        
    }

    async update(req: Request, res: Response){

        console.log("Chamou o update do ParametroController");

        const repository = getRepository(Parametro);//recupera o repositorio do Parametro.
    
        const {codigo} = req.body;//extrai os atributos id do corpo da mensagem
    
        const parametroExists = await repository.findOne({where :{codigo}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!parametroExists){
            
            return res.sendStatus(404);

        }else{

            var p = repository.create(req.body);

            p = await repository.save(p); //persiste (update) a entidade na tabela.
            
            return res.json(p);

        }
        
    }

    async delete(req: Request, res: Response){

        console.log("Chamou o delete do ParametroController");

        const repository = getRepository(Parametro);//recupera o repositorio do Local.

        const codigo = req.params.codigo;//extrai os atributos nickname e endereco do corpo da mensagem.
        
        const parametroExists = await repository.findOne({where :{codigo}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(parametroExists){        
            await repository.remove(parametroExists);//caso exista, então aplica a remocao fisica
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Local para remover, retorna o codigo 404.
        }
    }

}

export default new ParametroController();