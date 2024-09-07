document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('deviceTableBody'); // El tbody de la tabla donde se mostrarán los datos

  // Cargar datos de dispositivos desde el JSON
  async function loadDevices() {
    try {
      const response = await fetch('../data/dispositivos.json');
      const devices = await response.json();

      // Limpiar la tabla antes de agregar nuevos datos
      tableBody.innerHTML = '';

      // Agregar cada dispositivo a la tabla
      devices.forEach(device => {
        const row = document.createElement('tr');

        // Tipo
        const typeCell = document.createElement('td');
        typeCell.textContent = device.tipo;
        row.appendChild(typeCell);

        // Nombre
        const nameCell = document.createElement('td');
        nameCell.textContent = device.nombre;
        row.appendChild(nameCell);

        // Estado
        const statusCell = document.createElement('td');
        statusCell.textContent = device.estado;
        row.appendChild(statusCell);

        // Comuna
        const comunaCell = document.createElement('td');
        comunaCell.textContent = device.comunaDonante;
        row.appendChild(comunaCell);

        // Fotos
        const photosCell = document.createElement('td');
        const photoImg = document.createElement('img');
        photoImg.src = `../${device.fotos[0]}`; // Ajusta la ruta de la foto
        photoImg.alt = device.nombre;
        photoImg.style.width = '120px'; // Tamaño de la imagen
        photoImg.style.height = '120px';
        photosCell.appendChild(photoImg);
        row.appendChild(photosCell);

        // Agregar fila a la tabla
        tableBody.appendChild(row);

        // Agregar evento de clic a la fila para mostrar detalles
        row.addEventListener('click', () => {
          window.location.href = `informacion-dispositivo.html?id=${device.id}`;
        });
      });
    } catch (error) {
      console.error('Error al cargar los dispositivos:', error);
    }
  }

  loadDevices();
});
