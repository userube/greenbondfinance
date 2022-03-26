import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import loginStyles from '../styles/Login.module.css';
import ButtonSpinner from '../components/ButtonSpinner';

const login = () =>  {
	const [loginActive, setLoginActive] = useState(false);
	const [loginDtls, setLoginDtls] = useState({
		username: '',
		password: ''
	});

	const Login = (e) => {
		e.preventDefault();
		setLoginActive(true);

		const url = '';
		const username = e.target.email.value;
		const password = e.target.password.value;

		const str = `name: ${username}, password: ${password}`;

		alert(str);
		console.log(str);

		try {
			// const response = await axios.post()
		} catch (error) {
			
		}
	}

	return (
		<div className={loginStyles.bodyContainer}>
			<div className="container">
				<br/>
				<br/>
				<br/>
				<div className="row justify-content-center">
					<div className='col-md-4'>
						<div className={`card shadow-lg ${loginStyles.loginCardBackground}`}>
							<div  className="container mt-4 mb-5 ml-1 mr-2">
								<div className="text-center text-success mt-3">
									<Image src="/logo.png" alt="GreenBond Financial Company" width={150} height={150}/>
								</div>

								<h3 className='text-center mt-3 mb-3' style={{color: '#a8cf44'}}><strong>Sign In</strong></h3>

								<form className="form" onSubmit={Login}>
									<div className="form-group mb-3">
										<label for="email" className="form-label"><strong>Email or Username</strong></label>

										<div>
											<input id="username" type="" className="form-control"
											name="email" required autoComplete="" placeholder="Email or Username" autoFocus/>
										</div>
									</div>

									<div className="form-group mb-3">
										<label for="password" className="form-label"><strong>Password</strong></label>

										<div>
											<input id="password" type="password" className="form-control"
											name="password" required autoComplete="current-password" placeholder="Password"/>
										</div>
									</div>

									<div className="form-group mt-4 mb-3">
										<div>
											<button id="loginBtn" type="submit" className={`btn btn-primary shadow ${loginStyles.loginBtn}`} style={{background: '#a8cf44', border: '1px solid #a8cf44'}}>
												{ loginActive && <ButtonSpinner/> } 
												<span style={{ fontWeight: '500' }}>Login</span>
											</button>
										</div>
									</div>
								</form>

								<div className="text-center">
									<div className="mt-2">
										<a href="#" className="text-success" style={{fontSize: 'small', fontWeight: 'bold'}}>© 2022 GreenBond Financial Company. </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	)
}

export default login
