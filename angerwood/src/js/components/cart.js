

export const cart = () => {
	// function addToCart(item) {
	// 	// Предполагается, что item - это объект, представляющий товар, например:
	// 	// { id: "1", name: "Товар 1", price: 100, quantity: 1 }
	  
	// 	// Получаем корзину из localStorage
	// 	const cartJSON = localStorage.getItem('cart');
	// 	let cartItems = cartJSON ? JSON.parse(cartJSON) : [];
	  
	// 	// Проверяем, есть ли уже такой товар в корзине
	// 	const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
	  
	// 	if (existingItemIndex > -1) {
	// 	  // Товар уже есть в корзине, увеличиваем количество
	// 	  cartItems[existingItemIndex].quantity += item.quantity;
	// 	} else {
	// 	  // Товара нет в корзине, добавляем новый
	// 	  cartItems.push(item);
	// 	}
	  
	// 	// Сохраняем обновленную корзину обратно в localStorage
	// 	localStorage.setItem('cart', JSON.stringify(cartItems));
	//   }
	  
	//   // Пример добавления товара в корзину
	// const product = document.querySelectorAll('.product')
	// product.forEach(item => {
	// 	const cartToBtn = item.querySelector('.product__btn');
	// 	const productPrice = item.getAttribute('data-price')
	// 	const productId = item.getAttribute('data-id')
	// 	updateCartButton(productId)
	// 	cartToBtn.addEventListener('click', () => {
	// 		// cartToBtn.textContent = 'В корзине'
	// 		const productInfo = {
	// 			id: productId, 
	// 			price: productPrice, 
	// 			quantity: 1, 
	// 			name: item.querySelector('.product__title').textContent, 
	// 			image: item.querySelector('.product__slider img').getAttribute('data-src'), 
	// 			description: item.querySelector('.product__subtitle').textContent
	// 		}
	// 		addToCart(productInfo);
	// 		updateCartButton(productId)
	// 	})





	// })
	function updateCartButton(productId) {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		const productExists = cart.some(item => item.id === productId);
		const product = document.querySelectorAll('.product')
		if (!product[productId - 1]) return
		const productBtn = product[productId - 1].querySelector('.product__btn');
		const productInfo = {
			id: productId, 
			price: product[productId - 1].getAttribute('data-price'), 
			quantity: 0, 
			name: product[productId - 1].querySelector('.product__title').textContent, 
			image: product[productId - 1].querySelector('.product__slider img').getAttribute('data-src'), 
			description: product[productId - 1].querySelector('.product__subtitle').textContent
		}
		if (productExists) {
		  productBtn.textContent = 'Перейти в корзину';
		  productBtn.href = '/cart.html'; // Предполагая, что '/cart' это URL вашей страницы корзины
		  //   productBtn.tagName = 'A'; // Это не изменит тег кнопки на "a", но демонстрирует идею
		  // Для изменения тега необходимо создать новый элемент <a>, перенести в него все атрибуты и заменить существующий элемент.
		  replaceButtonWithLink(productBtn);
		} else {
		  productBtn.textContent = 'В корзину';
		  productBtn.onclick = () => addToCart(productInfo); // Добавляем обработчик клика для добавления товара
		}
	}
	function replaceButtonWithLink(button) {
		const link = document.createElement('a');
		link.href = '/cart.html';
		link.textContent = button.textContent;
		link.className = button.className; // Копируем все классы у кнопки
		button.parentNode.replaceChild(link, button);
	}

	// function orderByCart () {
	// 	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	// 	const orderTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
	// 	const orderPrice = document.querySelector('.cart__order-price');
	// 	if (orderPrice) {
	// 		orderPrice.textContent = `${orderTotalPrice} рублей`;
	// 	}
	// }
	// orderByCart()

	// function orderQuantity () {
	// 	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	// 	const orderQuantity = document.querySelector('.cart__order-title');
	// 	const orderTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
	// 	if (orderQuantity) {
	// 		orderQuantity.textContent = `В вашей корзине ${orderTotalQuantity} товаров на сумму`;
	
	// 	}
	// }
	// orderQuantity()

	// function cartList () {
	// 	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	// 	const cartItems = document.querySelector('.cart__items');
	// 	if (cart.length === 0 && cartItems) {
	// 		cartItems.innerHTML = '<h2 class="cart__title">Ваша корзина пуста</h2> <a href="catalog.html" class="cart__order-btn">В каталог</a>';
	// 	} else {
	// 		const cartItem = cart.map(item => {
	// 			return `
	// 					<div class="cart__item" data-id="${item.id}">
	// 						<div class="cart__item-info">
	// 							<div class="cart__img">
	// 								<img class="lazy" data-src="${item.image}" alt="">
	// 							</div>
	// 							<!-- /.cart__img -->
	// 							<div class="cart__item-title">
	// 								<span>${item.name}</span>
	// 								<p>
	// 									${item.description}
	// 								</p>
	// 							</div>
	// 							<!-- /.cart__title -->
	// 						</div>
	// 						<!-- /.cart__item-info -->
	// 						<div class="cart__item-col">
	// 							<div class="cart__count">
	// 								<div class="cart__count-minus">-</div>
	// 								<!-- /.cart__count-minus -->
	// 								<div class="cart__count-items">${item.quantity}</div>
	// 								<!-- /.cart__count-items -->
	// 								<div class="cart__count-plus">+</div>
	// 								<!-- /.cart__count-plus -->
	// 							</div>
	// 							<!-- /.cart__count -->
	// 							<div class="cart__price">${item.price * item.quantity} руб.</div>
	// 							<!-- /.cart__price -->
	// 						</div>
	// 						<!-- /.cart__item-col -->
	// 						<div class="cart__item-remove" >
	// 							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 								<path d="M10.5939 2.42881L9.5715 1.40401L6.0003 4.97521L2.4291 1.40401L1.4043 2.42881L4.9755 6.00001L1.4043 9.57121L2.4291 10.5936L6.0003 7.02241L9.5715 10.5936L10.5939 9.57121L7.0227 6.00001L10.5939 2.42881Z" fill="#ACB9BF"></path>
	// 							</svg>								
	// 						</div>
	// 						<!-- /.cart__item-remove -->
	// 					</div>
	// 				`
	// 		}).join('')
	// 		cartItems ? cartItems.innerHTML = cartItem : null;
	// 	}
		
	// }
	// cartList()

	// function removeCart() {
	// 	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	// 	const cartItems = document.querySelector('.cart__items');
	// 	const removeButtons = document.querySelectorAll('.cart__item-remove');
	// 	console.log(removeButtons);
	// 	removeButtons.forEach(button => {
	// 		button.addEventListener('click', (event) => {
	// 			// Получаем id товара из атрибута data-id кнопки
	// 			const productId = button.closest('.cart__item').getAttribute('data-id');
	// 			// Находим индекс товара в массиве корзины
	// 			const existingItemIndex = cart.findIndex(cartItem => cartItem.id === productId);
				
	// 			if (existingItemIndex !== -1) {
	// 				// Удаляем товар из массива корзины
	// 				cart.splice(existingItemIndex, 1);
	// 				// Обновляем localStorage
	// 				localStorage.setItem('cart', JSON.stringify(cart));
	// 				// Удаляем элемент товара из DOM
	// 				button.closest('.cart__item').remove();
	// 			}
	
	// 			// Если корзина пуста, обновляем UI корзины
	// 			if (cart.length === 0 && cartItems) {
	// 				cartItems.innerHTML = '<h2 class="cart__title">Ваша корзина пуста</h2> <a href="catalog.html" class="cart__order-btn">В каталог</a>';
	// 			}
				
	// 			orderByCart()
	// 			orderQuantity()
	// 		});
	// 	});
	// }
	// removeCart()
	

	// const cartQuantity = () => {
	// 	const cartItems = document.querySelectorAll('.cart__item');
	// 	if (document.querySelector('.cart__count-minus')) {
	// 		cartItems.forEach(item => {
	// 			item.querySelector('.cart__count-minus').addEventListener('click', function() {
	// 				updateCartItemQuantity(item, -1);
	// 				orderByCart()
	// 				orderQuantity()
	// 			});
			
	// 			item.querySelector('.cart__count-plus').addEventListener('click', function() {
	// 				updateCartItemQuantity(item, 1);
	// 				orderByCart()
	// 				orderQuantity()
	// 			});
	// 		});
	// 	}
		
	// 	function updateCartItemQuantity(item, change) {
	// 		const productId = item.getAttribute('data-id');
	// 		const productQuantity = item.querySelector('.cart__count-items');
	// 		const productPrice = item.querySelector('.cart__price');
	// 		let cart = JSON.parse(localStorage.getItem('cart')) || [];
	// 		const productIndex = cart.findIndex(product => product.id === productId);
	// 		const cartItems = document.querySelector('.cart__items');
	// 		if (productIndex !== -1) {
	// 			cart[productIndex].quantity += change;
	// 			productQuantity.textContent = cart[productIndex].quantity;
	// 			productPrice.textContent = (cart[productIndex].price * cart[productIndex].quantity) + ' руб.';
	// 			if (cart[productIndex].quantity < 1) {
	// 				cart.splice(productIndex, 1); // Удалить товар из массива
	// 				item.remove(); // Удалить элемент товара со страницы
					
	// 				// Если корзина пуста, обновляем UI корзины
	// 				if (cart.length === 0 && cartItems) {
	// 					cartItems.innerHTML = '<h2 class="cart__title">Ваша корзина пуста</h2> <a href="catalog.html" class="cart__order-btn">В каталог</a>';
	// 				}
	// 			} else {
	// 			// Здесь можно обновить отображаемое количество напрямую на странице, если необходимо
	// 			// Например: item.querySelector('.quantity-display').textContent = cart[productIndex].quantity;
	// 			}
			
	// 			localStorage.setItem('cart', JSON.stringify(cart));
	// 		}
	// 	}
	// }
	// cartQuantity()
		initProductButtons();
		cartList();
		updateCartSummary();
	
	
	function initProductButtons() {
		const products = document.querySelectorAll('.product');
		products.forEach((product) => {
			const cartBtn = product.querySelector('.product__btn');
			const productId = product.getAttribute('data-id');
			cartBtn.addEventListener('click', () => {
				const productInfo = {
					id: productId,
					name: product.querySelector('.product__title').textContent,
					price: parseInt(product.getAttribute('data-price'), 10),
					quantity: 1,
					image: product.querySelector('.product__slider img').getAttribute('data-src'),
					description: product.querySelector('.product__subtitle').textContent
				};
				addToCart(productInfo);
				updateCartButton(productId); // Эта функция должна быть переписана, чтобы учитывать новую логику
				cartList(false); // Перерисовать список товаров в корзине
				updateCartSummary(); // Обновить сводку корзины
			});
		});
	}
	
	function addToCart(productToAdd) {
		let cart = JSON.parse(localStorage.getItem('cart')) || [];
		const existingIndex = cart.findIndex(item => item.id === productToAdd.id);
		if (existingIndex >= 0) {
			cart[existingIndex].quantity += productToAdd.quantity;
		} else {
			cart.push(productToAdd);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}
	
	function cartList(isImage = true) {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		const cartContainer = document.querySelector('.cart__items');
		cart.map(item => {
			updateCartButton(item.id)
		})
		if (!cartContainer) return;
		if (cart.length === 0) {
			document.querySelector('.cart__order .cart__order-btn').classList.add('hide') 
		}
		cartContainer.innerHTML = cart.length ? cart.map(item => `
			<div class="cart__item" data-id="${item.id}">
				<div class="cart__item-info">
					<div class="cart__img">
						<img class="lazy" ${isImage ? 'data-src=' + item.image : 'src='+item.image } alt="">
					</div>
					<!-- /.cart__img -->
					<div class="cart__item-title">
						<span>${item.name}</span>
						<p>
							${item.description}
						</p>
					</div>
					<!-- /.cart__title -->
				</div>
				<!-- /.cart__item-info -->
				<div class="cart__item-col">
					<div class="cart__count">
						<div class="cart__count-minus">-</div>
						<!-- /.cart__count-minus -->
						<div class="cart__count-items">${item.quantity}</div>
						<!-- /.cart__count-items -->
						<div class="cart__count-plus">+</div>
						<!-- /.cart__count-plus -->
					</div>
					<!-- /.cart__count -->
					<div class="cart__price">${item.price * item.quantity} руб.</div>
					<!-- /.cart__price -->
				</div>
				<!-- /.cart__item-col -->
				<div class="cart__item-remove" >
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.5939 2.42881L9.5715 1.40401L6.0003 4.97521L2.4291 1.40401L1.4043 2.42881L4.9755 6.00001L1.4043 9.57121L2.4291 10.5936L6.0003 7.02241L9.5715 10.5936L10.5939 9.57121L7.0227 6.00001L10.5939 2.42881Z" fill="#ACB9BF"></path>
					</svg>								
				</div>
				<!-- /.cart__item-remove -->
			</div>
		`).join('') : '<h2 class="cart__title">Ваша корзина пуста</h2> <a href="catalog.html" class="cart__order-btn">В каталог</a>';
		attachEventListenersToCartItems();
	}
	
	function attachEventListenersToCartItems() {
		document.querySelectorAll('.cart__count-minus, .cart__count-plus').forEach(button => {
			button.addEventListener('click', event => {
				const isAdding = button.classList.contains('cart__count-plus');
				const cartItem = button.closest('.cart__item');
				const productId = cartItem.getAttribute('data-id');
				updateCartItemQuantity(productId, isAdding ? 1 : -1);
			});
		});
		document.querySelectorAll('.cart__item-remove').forEach(button => {
			button.addEventListener('click', (event) => {
				const cartItem = button.closest('.cart__item');
				const productId = cartItem.getAttribute('data-id');
				removeCartItem(productId);
				cartItem.remove();
				cartList(false);
				updateCartSummary();
			});
		});
	}
	
	function updateCartItemQuantity(productId, change) {
		let cart = JSON.parse(localStorage.getItem('cart')) || [];
		const index = cart.findIndex(item => item.id === productId);
		if (index >= 0) {
			cart[index].quantity += change;
			if (cart[index].quantity < 1) {
				cart.splice(index, 1); // Удалить товар из массива
			}
			localStorage.setItem('cart', JSON.stringify(cart));
			cartList(false); // Перерисовать список товаров в корзине
			updateCartSummary(); // Обновить сводку корзины
		}
	}
	
	function updateCartSummary() {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
		const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
		const orderPriceElement = document.querySelector('.cart__order-price');
		const orderQuantityElement = document.querySelector('.cart__order-title');
		if (orderPriceElement) orderPriceElement.textContent = `${totalPrice} рублей`;
		if (orderQuantityElement) orderQuantityElement.textContent = `В вашей корзине ${totalQuantity} товаров на сумму`;
	}
	
	function removeCartItem(productId) {
		let cart = JSON.parse(localStorage.getItem('cart')) || [];
		const index = cart.findIndex(item => item.id === productId);
		if (index !== -1) {
			cart.splice(index, 1);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}
	
	  
	
}