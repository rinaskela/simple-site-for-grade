function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<img src=
"https://bsuedu.ru/bsu/info/gerbgimn/gerbbigb.gif">
				<h2>
                    Добро пожаловать на сайт!
				</h2>
				<p>
					Это главная страица сайта.
				</p>
				<p>
					Вы можете открыть разные секции,
                    используя меню навигации					
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					Это страница "О нас"
					Здесь вы можете узнать больше о предназначении сайта
				</p>
				<p>
					Единственное предназначение сайта это
                    помочь сдать зачёт Виноградову Алексею (11002317)!
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Свяжитесь с нами</h2> 
				<p>
					(не связывайтесь)
				</p> 
				<form> 
				<label for="name">Имя:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Ваше имя" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Ваше мыло" required>
				<label for="message">Сообщение:</label> 
				<textarea id="message" name="message" 
							placeholder="Ваше сообщение" 
							rows="4" required>
					</textarea>
				<button type="submit">Отправить</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Страница не найдена!</h2>';
	}
}