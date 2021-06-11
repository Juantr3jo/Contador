window.onload = () => {
    contador_seg = 00;
    contador_min = 00;
    contador_hor = 00;

    h = document.getElementById("hor")
    m = document.getElementById("min")
    s = document.getElementById("seg")


    window.setInterval(
        function () {
            
            if (contador_seg  == 60) {
            contador_seg = 0;
            contador_min++;
                if (contador_min == 60) {
                    contador_min = 0;
                    contador_hor++;
                }


            }


            s.innerHTML = contador_seg;
            contador_seg++;
            m.innerHTML = contador_min;
            h.innerHTML= contador_hor;


        }, 1000);

};










