import Api from './Api';

export async function Autenticar(chaveAcesso) {
    try {
        const resultado = await Api.get(
            `/api/autenticacao/senha/${chaveAcesso}`,
        )
            .then(response => {
                const statusCode = response.status;
                return {dados: response.data, statusCode};
            })
            .catch(error => {
                const statusCode = error.response.status;
                return {dados: null, statusCode};
            });

        return resultado;
    } catch (erro) {
        return {};
    }
}
