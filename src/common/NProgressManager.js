class NProgressManager {
    constructor() {
        this.loadSet = new Set();
    }

    getNProgress() {
        const nprogress = window.NProgress; // imported in index.html
        if (!nprogress) {
            console.log('NProgress not found');
            return undefined;
        }
        return nprogress;
    }

    newToLoad(item) {
        if (this.loadSet.has(item)) return;
        this.loadSet.add(item);

        const progress = this.getNProgress();
        if (progress === undefined) return;
        if (!progress.isStarted()) {
            progress.start();
        }
    }

    loaded(item) {
        if (!this.loadSet.has(item)) return;
        this.loadSet.delete(item);
        const progress = this.getNProgress();
        if (progress === undefined) return;
        if (this.loadSet.size > 0) {
            progress.inc();
        } else {
            progress.done();
        }
    }
}

export default NProgressManager;