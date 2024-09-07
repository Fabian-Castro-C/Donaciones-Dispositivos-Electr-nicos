document.addEventListener('DOMContentLoaded', () => {
  const deviceInfo = document.getElementById('deviceInfo');
  const commentsList = document.getElementById('commentsList');
  const commentForm = document.getElementById('commentForm');
  const commenterName = document.getElementById('commenterName');
  const commentText = document.getElementById('commentText');
  const imageModal = document.getElementById('imageModal');
  const closeModal = document.querySelector('.close');
  const devicePhotos = document.getElementById('devicePhotos');

  // Crear y añadir la imagen al modal
  function createImageForModal(imageSrc) {
    const img = document.createElement('img');
    img.className = 'modal-content';
    img.id = 'expandedImage';
    img.alt = 'Imagen expandida';
    img.src = imageSrc; // Establecer el src dinámicamente

    // Limpiar el contenido actual del modal
    imageModal.innerHTML = '<span class="close">&times;</span>'; // Mantener el botón de cerrar
    
    // Añadir la imagen al modal
    imageModal.appendChild(img);
  }

  // Cargar la información del dispositivo
  async function loadDeviceInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const deviceId = parseInt(urlParams.get('id'));

    if (!deviceId) {
      console.error('ID de dispositivo no proporcionado.');
      return;
    }

    try {
      const response = await fetch('../data/dispositivos.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const devices = await response.json();
      const device = devices.find(d => d.id === deviceId);

      if (!device) {
        console.error('Dispositivo no encontrado.');
        return;
      }

      // Rellenar los detalles del dispositivo
      document.getElementById('deviceName').textContent = device.nombre;
      document.getElementById('deviceType').textContent = device.tipo;
      document.getElementById('deviceDescription').textContent = device.descripcion || 'No disponible';
      document.getElementById('deviceYears').textContent = device.aniosUso || 'No disponible';
      document.getElementById('deviceState').textContent = device.estado;

      // Rellenar los detalles del donante
      document.getElementById('donorName').textContent = device.nombreDonante;
      document.getElementById('donorEmail').textContent = device.emailDonante;
      document.getElementById('donorPhone').textContent = device.telefonoDonante;
      document.getElementById('donorRegion').textContent = device.regionDonante;
      document.getElementById('donorComuna').textContent = device.comunaDonante;

      // Mostrar todas las fotos del dispositivo
      if (device.fotos && device.fotos.length > 0) {
        devicePhotos.innerHTML = ''; // Limpiar fotos anteriores
        device.fotos.forEach((foto, index) => {
          const img = document.createElement('img');
          img.src = `../${foto}`;
          img.alt = `Foto ${index + 1}`;
          img.classList.add('device-photo');
          
          // Añadir evento para abrir el modal al hacer clic en la imagen
          img.addEventListener('click', () => {
            createImageForModal(img.src); // Crear imagen y añadir al modal
            imageModal.style.display = 'block'; // Mostrar el modal
          });

          devicePhotos.appendChild(img);
        });
      } else {
        devicePhotos.innerHTML = '<p>No hay fotos disponibles.</p>';
      }

      // Aquí podrías cargar los comentarios asociados al dispositivo
      if (device.comentarios) {
        device.comentarios.forEach(comment => {
          addCommentToList(comment);
        });
      }

    } catch (error) {
      console.error('Error al cargar la información del dispositivo:', error);
    }
  }

  // Mostrar mensajes para campos específicos
  function showFieldMessage(fieldId, message, type) {
    let fieldMessage = document.querySelector(`#${fieldId}Message`);
    if (!fieldMessage) {
      fieldMessage = document.createElement('div');
      fieldMessage.id = `${fieldId}Message`;
      document.querySelector(`#${fieldId}`).insertAdjacentElement('afterend', fieldMessage);
    }
    fieldMessage.innerHTML = `<p style="color: ${type === 'error' ? 'red' : 'green'};">${message}</p>`;
  }

  // Limpiar mensajes para todos los campos
  function clearAllMessages() {
    const allMessages = document.querySelectorAll('div[id$="Message"]');
    allMessages.forEach(message => message.innerHTML = '');
  }

  // Validar y manejar el formulario de comentarios
  function validateCommentForm() {
    let isValid = true;
    clearAllMessages(); // Limpiar mensajes anteriores

    // Validar nombre del comentarista
    const name = commenterName.value.trim();
    if (name.length < 3 || name.length > 80) {
      showFieldMessage('commenterName', 'El nombre debe tener entre 3 y 80 caracteres.', 'error');
      isValid = false;
    }

    // Validar texto del comentario
    const text = commentText.value.trim();
    if (text.length < 5) {
      showFieldMessage('commentText', 'El comentario debe tener al menos 5 caracteres.', 'error');
      isValid = false;
    }

    return isValid;
  }

  // Añadir comentario a la lista
  function addCommentToList(comment) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${comment.nombre} (${comment.fecha}):</strong> ${comment.contenido}`;
    commentsList.appendChild(li);
  }

  // Manejar el envío del formulario de comentarios
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateCommentForm()) {
      const newComment = {
        nombre: commenterName.value.trim(),
        fecha: new Date().toLocaleDateString(), // Fecha actual
        contenido: commentText.value.trim()
      };
      addCommentToList(newComment);
      showFieldMessage('commentForm', 'Comentario agregado exitosamente.', 'success');
      commentForm.reset(); // Limpiar el formulario
    }
  });

  // Manejar el cierre del modal
  closeModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  // Cerrar el modal si el usuario hace clic fuera del contenido del modal
  window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
      imageModal.style.display = 'none';
    }
  });

  // Cargar la información del dispositivo al cargar la página
  loadDeviceInfo();
});
