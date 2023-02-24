import api from './api';

export async function Autenticar(chaveAcesso) {
    try {
        const resultado = await api
            .get(`/api/autenticacao/senha/${chaveAcesso}`)
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
