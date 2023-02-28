fetch('https://randomuser.me/api/?gender=male')
            .then((response) => response.json())
            .then((data) => mostrarData(data))

        const mostrarData = (data) => {
            console.log(data)
            nombre = ''+data.results[0].name.first+' '+data.results[0].name.last
            foto1 = data.results[0].picture.large
            foto2 = data.results[0].picture.thumbnail
            fnac = data.results[0].dob.date.slice(0,10)
            edad = data.results[0].dob.age
            direccion = data.results[0].location.street.name+' '+data.results[0].location.street.number
            localidad = data.results[0].location.city+' - '+data.results[0].location.country
            telefono = data.results[0].cell
            mail = data.results[0].email
            foto3 = data.results[0].picture.medium
            fono = data.results[0].phone


        document.getElementById("icono").href=foto2
        document.getElementById("nombre").innerHTML=nombre    
        document.getElementById("fot").src=foto2
        document.getElementById("nom").innerHTML=nombre 
        document.getElementById("fimag").src=foto1
        document.getElementById("nomb").innerHTML=nombre 
        document.getElementById("edad").innerHTML=edad
        document.getElementById("fnac").innerHTML=fnac
        document.getElementById("direccion").innerHTML=direccion
        document.getElementById("localidad").innerHTML=localidad
        document.getElementById("telefono").innerHTML=telefono
        document.getElementById("mail").innerHTML=mail
        document.getElementById("foto-footer").src=foto3
        document.getElementById("fono").innerHTML=fono
        document.getElementById("movil").innerHTML=telefono
        document.getElementById("email").innerHTML=mail
        document.getElementById("direc").innerHTML=direccion
        document.getElementById("nom-final").innerHTML=nombre
        }