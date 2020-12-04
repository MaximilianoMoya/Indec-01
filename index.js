const arrayUsers = [
    {
        "name": "Paola Santillan",
        "email": "chxnge@hotmail.com",
        "active": 1
    },
    {
        "name": "Julián Casablancas",
        "email": "pao.chxnge@gmail.com",
        "active": 1
    },
    {
        "name": "Matías Labarthe",
        "email": "mlabarthe@indec.gob.ar",
        "active": 1
    },
    {
        "name": "Alex Fedczuk",

        "email": "afedczuk@indec.gob.ar",
        "active": 1
    },
    {
        "name": "Fernando Calvitti",
        "email": "fcalvitti@hotmail.com",
        "active": 1
    }
]



const dataUser = (...data) => {
    data.map(info => {
        // Destructuración
        const { name, email, active } = info

        // Status
        const status = active === 1 ? 'Active' : 'Desactivated';

        // Separación de nombre y apellido
        let nombre = info.name.split(' ')[0].toLowerCase()
        let apellido = info.name.split(' ')[1].toLowerCase()

        // Separar inicial de cada uno
        inicialN = nombre[0]
        inicialA = apellido[0]

        // Mostrar en consola
        console.log('\x1b[36m%s\x1b[0m',
            `    
            ACTIVIDAD 1:
            -Usuario: ${inicialN + apellido}
            -Nombre: ${name}
            -Email: ${email}
            -Status: ${status}`
        );

        console.log('\x1b[35m',
            `
            ACTIVIDAD 2:
            -Usuario: ${inicialA + nombre}
            -Nombre: ${name}
            -Email: ${email}
            -Status: ${status}`
        );

    })
}
dataUser(...arrayUsers)