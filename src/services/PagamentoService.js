import {getApiIugu} from './Api';

export async function GerarFatura(idPedido, tipoPagamento, valor) {
    const api = await getApiIugu();
    const dadosCobranca = {
        ensure_workday_due_date: false,
        items: [
            {
                description: 'Teste Pix 1',
                quantity: 1,
                price_cents: valor * 100,
            },
        ],
        payer: {
            address: {
                zip_code: '13209430',
                street: 'Avenida Prefeito Luiz Latorre',
                number: '5300',
                state: 'SP',
                city: 'Jundiai',
                district: 'Sâo Paulo',
            },
            cpf_cnpj: '30752622854',
            name: 'Milton Honma',
        },
        email: 'honma.milton@gmail.com',
        due_date: '2023-03-10',
    };
    try {
        const resultado = await api
            .post('/v1/invoices', dadosCobranca)
            .then(response => {
                const statusCode = response.status;
                return {dados: response.data, statusCode};
            })
            .catch(erro => {
                console.log('erro 1');
                console.log(erro);

                const statusCode = erro.response.status;
                return {dados: null, statusCode};
            });

        return resultado;
    } catch (erro) {
        console.log('erro 2');
        console.log(erro);
        return {};
    }
}

export async function ConsultarFatura(id) {
    const api = await getApiIugu();

    try {
        const resultado = await api
            .get(`/v1/invoices/${id}`)
            .then(response => {
                const statusCode = response.status;
                return {dados: response.data, statusCode};
            })
            .catch(erro => {
                console.log('erro 1');
                console.log(erro);

                const statusCode = erro.response.status;
                return {dados: null, statusCode};
            });

        return resultado;
    } catch (erro) {
        console.log('erro 2');
        console.log(erro);

        return {};
    }
}
