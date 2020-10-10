

module.exports = {

    'DELETE /api/products/:id': async(ctx, next) => {
        console.log(`delete products $(ctx.params.id)...`);
        let p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },

    'POST /api/manage/addGoodArticle': async (ctx, next) => {
        const rep = {'code': 0, 'message': 'ok'}
        ctx.rest(rep)
    }
}