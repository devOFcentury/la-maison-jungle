import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart');
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
	useEffect(() => {
		localStorage.setItem('cart',JSON.stringify(cart));
		
	}, [cart])

	const [cancelName, setCancelName] = useState({name : ''});
	

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} cancelName={cancelName} setCancelName={setCancelName} />
				<ShoppingList cart={cart} updateCart={updateCart}  />
			</div>
			<Footer />
		</div>
	)
}

export default App