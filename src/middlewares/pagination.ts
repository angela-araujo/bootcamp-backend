function paginate(items: any, currentLimite?: number, currentPage?: number) {

    const page = currentPage || 1;
    const limit = currentLimite || 10;
    const offset = (page - 1) * limit;

    const paginatedItems = items.slice(offset).slice(0, limit);

    const totalPages = Math.ceil(items.length / limit);

    return {
        page: page,
        limit: limit,
        previousPage: page - 1? page - 1 : null,
        nextPage: (totalPages > page) ? page + 1 : null,
        totalItems: items.length,
        totalPages: totalPages,
        data: paginatedItems
    }

}

export { paginate }