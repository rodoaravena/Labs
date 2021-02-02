function getTitle(vm) {
    const { titlePage } = vm.$options
    if (titlePage) {
        return typeof titlePage === 'function' ?
            titlePage.call(vm) :
            titlePage;
    }
}

export default {
    created() {
        const titlePage = getTitle(this);
        if (titlePage) {
            document.title = titlePage + " | Tribu";
        }
    }
};