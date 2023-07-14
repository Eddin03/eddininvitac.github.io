$(document).ready(function() {
  // Reproducir el audio automáticamente
  var audio = new Audio("barbie_song.mp3");
  audio.play();

  $("#rsvpButton").click(function() {
    Swal.fire({
      title: "¡Gracias por aceptar la invitación mi amor!",
      html: "<img src='barbie.gif' style='max-width: 100%; height: auto;'>",
      showConfirmButton: false,
      allowOutsideClick: false
    });
  });
});

// Resto del código
