import { Request, Response } from 'express';
import { Movie } from '../models/movie.model';
import { paginate } from '../middlewares/pagination';

/* Retorna lista de filmes paginada */
function index(req: Request, res: Response) {
    const page: string = req.query.page as string;

    Movie.find((error, result) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(201).json(
            paginate(result, 10, parseInt(page))
        );
    });

}

/* Cria um novo filme */
async function create(req: Request, res: Response) {
    const { name, category, description, media_type, poster, backdrop } = req.body;

    const movieExists = await Movie.findOne({ name });

    if (movieExists) {
        return res.status(409).json({
            message: 'Filme já existe.'
        });
    }

    const movie = new Movie({ name, category, description, media_type, poster, backdrop });

    movie.save((error: any, result: any) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(201).json({
            result
        });
    });
}

/* Retorna um filme específico por id */
function view(req: Request, res: Response) {
    const { id } = req.params;

    Movie.findById(id, (error: any, result: any) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(200).json({
            result
        });
    });
}

/* Pesquisa pelo título do Filme */
async function search(req: Request, res: Response) {
    const { search } = req.params;

    // Regular expression g = global; i = case-insensitive
    // result = /search/gi
    const regex = new RegExp(search, 'gi');

    // array de objetos filme
    const result = await Movie.find({ $or: [ {name: regex}, {description: regex}] }).catch(error => {
        console.log(error);

        return res.status(500).json({
            message: error
        });
    });

    // Se retornar array result vazio
    // @ts-ignore
    if (result.length === 0) {
        return res.status(500).json({
            message: 'Não foi possível encontrar'
        });
    }

    return res.status(200).json({
        result
    });
}

export { index, create, view, search }