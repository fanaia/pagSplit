import {getApiPDV7} from './Api';

export async function CarregarPedido(tipoPedido, numeroMesa) {
    const api = await getApiPDV7();

    try {
        const resultado = await api
            .get(`/api/pedidos/${tipoPedido}/${numeroMesa}/aberto`)
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
