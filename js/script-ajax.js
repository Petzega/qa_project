//window.addEventListener('load', () => {
    console.log('loaded!');
    document.querySelector("#btn-load").addEventListener('click', readAttachments);
    var attachment = null;
    function readAttachments() {
        const textData = new XMLHttpRequest();
        //var attachment = null;
        textData.open('GET', 'json/diagnostico-tecnico.json', true);
        textData.send();
        textData.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const jsonData = JSON.parse(this.responseText);
                attachment = jsonData.attachment;
                //console.log(attachment);
                //console.log("new: " + attachment[0].name);
                /*let content = document.querySelector("#content");
                content.innerHTML = "";
                //console.log(jsonData.attachment[0].name);
                for (let item of attachment) {
                    content.innerHTML += `
                        <label>${item.name}</label></br>
                    `     
                };*/
            };
            //return attachment;
        };
        return attachment;
    };

    function load () {
        console.log(readAttachments())
    }
//});

