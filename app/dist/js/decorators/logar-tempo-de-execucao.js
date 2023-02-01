export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1000;
            let tempoMedida = 'segundos';
            if (emSegundos)
                divisor = 1;
            tempoMedida = 'milissegundos';
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${tempoMedida}`);
            retorno;
        };
        return descriptor;
    };
}
