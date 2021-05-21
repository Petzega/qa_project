'use-strict'

/*window.addEventListener('load', () => {
    var content = document.querySelector("#container");
console.log("val: " + content)
})*/


function load() {
    var content = document.querySelector("#content");
    url = 'http://localhost:3000/data';
    const attachments = [
        'InformacionInicial[{}]consulta-data-servicio',
        'InformacionInicial[{}]recupera-info-telefono',
        'DiagnosticoExpress[{}]recupera-sincronismo-multiconsulta',
        'DiagnosticoExpress[{}]recuperar-sincronismo-mac-niveles-potencia-ruido-iwy2',
        'DiagnosticoExpress[{}]consulta-sri',
        'DiagnosticoExpress[{}]consultar-fftt-tobe',
        'DiagnosticoExpress[{}]consultar-fftt-asis'
    ]
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            content.innerHTML = `<p>Ticket: ${data.id}</p>`;
            var attachment = data.attachment;
            var msg = "sin respuesta";
            for (let i in attachments) {
                var value = attachments[i];
                var validation = attachment.find(search);
                console.log("val: " + validation);
                if (validation !== undefined) {
                    var additionalData = validation.additionalData;
                    console.log("else : " + additionalData[0].value);
                } else {
                    console.log(msg)
                }
                console.log("__________")
            }
            console.log(value);
            function search(obj) {
                return obj.name === value;
            }
        });
};
