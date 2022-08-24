let tareas = 20;
alert(
  `El profesor de la clase solicitó que se completen ${tareas} tareas en el transcurso de la semana`
);

let tareasRealizadas = Number(
  prompt("Ingresá la cantidad de tareas realizadas")
);

let tareasPendientes = tareas - tareasRealizadas;
if (tareasRealizadas <= 20) {
  for (i = 1; i <= 20; i++) {
    if (i > tareasRealizadas) {
      break;
    }
    alert(
      `Completaste la tarea número ${i} de las ${tareasRealizadas} tareas realizadas`
    );
  }

  if (tareasRealizadas < tareas) {
    alert(
      `Te restan por realizar ${tareasPendientes} de las ${tareas} tareas enviadas por el profesor`
    );
  } else {
    alert("No tenes tareas pendientes");
  }

  if (tareasRealizadas < tareas) {
    alert("RECORDATORIO");
    let diaActual = Number(
      prompt("Ingresá el número de día del mes en el que te encontras:")
    );
    if (diaActual <= 24) {
      let diaEntrega = diaActual + 7;
      alert(
        `El número de día del mes en el que debes entregar las tareas es ${diaEntrega}`
      );
    } else if (24 < diaActual < 31) {
      let diaEntrega = diaActual + 7 - 31;
      alert(
        `El número de día del mes siguiente en el que debes entregar las tareas es ${diaEntrega}`
      );
    } else {
      ("Ingresaste una cantidad superior de días correspondientes a los dias que contiene un mes");
    }
  } else if ((tareasRealizadas = tareas)) {
    alert("Completaste todas las tareas, felicitaciones !");
  } else {
    ("");
  }
} else {
  alert(
    "Como pudiste realizar más tareas de las que envió el profesor ? Revisá nuevamente lo que hiciste !"
  );
}
