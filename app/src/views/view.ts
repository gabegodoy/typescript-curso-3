export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} nÃ£o existe no DOM. Verifique`);
        }
    }

    public update(model: T): void {
        const t1 = performance.now();
        let template = this.template(model);
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2-t1)/1000} segundos`);
        
    }

    protected abstract template(model: T): string;
}