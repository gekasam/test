		var kolichestvoMinut = 30;  // желаемое время таймера в минутах (30 минут)
		var tekuscheyeVremya = new Date(); // получаем сегодняшнюю дату и время
		var deadlineTime = tekuscheyeVremya.setMinutes(tekuscheyeVremya.getMinutes() + 30); // устанавливаем таймер на 30 минут
		//var deadlineTime = new Date( new Date().getTime() + (kolichestvoMinut * 60 * 1000) ); // можно и так установить таймер на 5 минут
		// обновляем скрипт каждую секунду - так мы получаем обратный отсчет	
		var obratniyOtschet = setInterval(function() {
			var seychas = new Date().getTime(); // текущее время
			var ostatokVremeni = deadlineTime - seychas; // находим различие между текущим моментом и временем дедлайна
			// преобразовываем значение миллисекунд в минуты и секунды
			var minuti = Math.floor( (ostatokVremeni % (1000 * 60 * 60)) / (1000 * 60) );
			var secundi = Math.floor( (ostatokVremeni % (1000 * 60)) / 1000 );
			// если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
			minuti = minuti < 10 ? "0" + minuti : minuti;
			secundi = secundi < 10 ? "0" + secundi : secundi;
			// отображаем результат таймера в элементе с id="deadline-timer"
			document.getElementById("deadline-timer").innerHTML = minuti + ":" + secundi;
			// если в таймере остались только секунды, меняем слово "минуты" на "секунды"
			if (minuti == 0) {
				document.getElementById("min-or-sec").innerHTML = "секунд";
			}
			// когда обратный отсчет закончился, отображаем соответствующее уведомление
			if (ostatokVremeni < 0) {
				clearInterval(obratniyOtschet);
				document.getElementById("time-remainer").innerHTML = "<h2>Время истекло!</h2>";
			}
		}, 1000);
