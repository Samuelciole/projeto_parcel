const dataDoEvento = new Date("jun 06, 2026 23:00:00");
const dataStampDoEvento = dataDoEvento.getTime();
const evento = setInterval(function() {
    const agora = new Date();
    const dataStampAgora = agora.getTime();
    const distanciaAteOEvento = dataStampDoEvento - dataStampAgora;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % 86400000 / 3600000);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % 3600000 / 60000);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % 60000 / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);

//# sourceMappingURL=projeto_parcel.f75de5e1.js.map
