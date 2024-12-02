import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';

class JogadorController {


    async find(req: Request, res: Response){
        const repository = getRepository(Jogador);

        const nickname = req.params.nickname;

        const j = await repository.createQueryBuilder('tb_jogador').
            where({"nickname" : nickname}).
            innerJoinAndSelect("tb_jogador.endereco", "endereco").getOne();

        if(j){     
            //console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Jogador);

        const lista = await repository.createQueryBuilder('tb_jogador').
        innerJoinAndSelect("tb_jogador.endereco", "endereco").getMany();

        return res.json(lista);
    }


    async store(req: Request, res: Response){

        return res.send('ok');
    }


}

export default new JogadorController();