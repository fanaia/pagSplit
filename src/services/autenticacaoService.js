import getApi from './Api';

export async function Autenticar(chaveAcesso) {
    const api = await getApi();
    console.log(api);

    try {
        const resultado = await api
            .get(`/api/autenticacao/senha/${chaveAcesso}`)
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
        console.log(erro);
        return {};
    }
}
