import {getApiPDV7} from './Api';

export async function Autenticar(chaveAcesso) {
    const api = await getApiPDV7();

    try {
        const resultado = await api
            .get(`/api/autenticacao/senha/${chaveAcesso}`)
            .then(response => {
                const statusCode = response.status;
                return {dados: response.data, statusCode};
            })
            .catch(error => {
                const statusCode = error.response.status;
                return {dados: error, statusCode};
            });

        return resultado;
    } catch (erro) {
        return {};
    }
}
