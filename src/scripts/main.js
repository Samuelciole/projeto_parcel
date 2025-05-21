const dataDoEvento = new Date("jun 06, 2026 23:00:00");
const dataStampDoEvento = dataDoEvento.getTime();

const evento = setInterval(function(){
    const agora = new Date();
    const dataStampAgora = agora.getTime();

    const distanciaAteOEvento = dataStampDoEvento - dataStampAgora;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);
