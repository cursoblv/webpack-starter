import '/src/css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1 11111');

    const h1 = document.createElement('H1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);


}
