const Hora = () => {
    function formatHour() {
        let horario = new Date;
        var string = `${horario.getHours()}h:${horario.getMinutes()}m`;
        return string;
    }

    return (
        <span className="hour">{ formatHour() }</span>
    );
}

export default Hora;