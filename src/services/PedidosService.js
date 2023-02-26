import api from './Api';

export async function PedidoMesa(tipoPedido, numeroMesa) {
    try {
        const resultado = await api
            .get(`/api/pedidos/${tipoPedido}/${numeroMesa}/aberto`)
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
