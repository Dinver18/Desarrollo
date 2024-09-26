import { Either } from "./Clases_Genericas/Either";

export class DenunciarPostService {

    private readonly userRepo: IUserRepository
    private readonly postRepo: IPostRepository
    private readonly IA: IAService

    execute(data: DenunciarServiceEntryDTO): Either<DomainException, DenunciaResponseDTO> {
        try {
            const user = this.userRepo.findById(UserId.create(id_usuario));

            if (!user.hasValue())
                throw new InvalidUserException('El usuario no existe');

            const userResult = user.getValue();

            const post = this.postRepo.findById(PostId.create(id_post));

            if (!post.hasValue())
                throw new InvalidPostException('El post no existe');

            const postResult = post.getValue();

            const verificar_denuncia: ComprobarDenuncia = new ComprobarDenuncia(this.IA);

            if (!verificar_denuncia.comprobar(userResult, postResult, data.categoria, data.texto))
                throw new InvalidDenunciaException("La denuncia no es valida")

            const respuesta: DenunciarServiceResponseDTO = {
                id_usuario: userResult.Id.Id,
                id_post: postResult.Id.PostId,
                msg: "La denuncia a sido procesada",
                code: 200
            }

        } catch (error) {
            if (error instanceof DomainException) {
                return Either.makeLeft<DomainException, DenunciaResponseDTO>(error, true)
            }
        }

        return Either.makeRight<DomainException,DenunciaResponseDTO>(respuesta,false);

    }
}