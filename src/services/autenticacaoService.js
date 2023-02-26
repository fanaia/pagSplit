import Api from './Api';

export async function Autenticar(chaveAcesso) {
    try {
        const resultado = await Api.get(
            `/api/autenticacao/senha/${chaveAcesso}`,
        )
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return {};
            });

        return resultado;
    } catch (erro) {
        return {};
    }
}
