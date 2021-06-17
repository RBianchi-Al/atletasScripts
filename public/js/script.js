function fdata(){
    dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", 
    "agosto", "setembro", "outubro", "novembro", "dezembro")
    now = new Date

    const hoje = "Hoje é " + dayName[now.getDay()] + ", "  + now.getDate() + " de " +monName[now.getMonth()] +
    " de " + now.getFullYear() + "."

    document.getElementById("data").innerHTML = "Data Atual: " + hoje;
}

function fhora(){
    today = new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();

    console.log("Hora certa: ",h+":"+m+" : "+s);
    horaFormat = h+" : "+m+" : "+s 

    document.getElementById("hora").innerHTML = "Hora certa: " + horaFormat;
}