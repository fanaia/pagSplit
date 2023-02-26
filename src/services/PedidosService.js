import api from './Api';

export async function CarregarPedido(tipoPedido, numeroMesa) {
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
