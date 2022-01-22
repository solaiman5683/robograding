import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthContext';
import Auth from './Pages/Auth/Auth';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cards from './Pages/Dashboard/Page/Cards';
import NewSubmission from './Pages/Dashboard/Page/NewSubmission';
import Profile from './Pages/Dashboard/Page/Profile';
import Submissions from './Pages/Dashboard/Page/Submissions';
import Wallet from './Pages/Dashboard/Page/Wallet';

function App() {
	const initialOptions = {
		"client-id": "AZgUd3pUmc1dD3yyloX6QR71lM5zwA4w-A9hCgTVvEjwW4x67HceHQKAJd80ldtcnS3G5Zq1uhsO-vOr",
		currency: "USD",
		intent: "capture",
	};
  return (
	  <AuthProvider>
		  <PayPalScriptProvider options={initialOptions}>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<Navigate to='dashboard' />} />
					  <Route path='/auth/*' element={<Auth />}>
						<Route path='*' element={<Navigate to='sign-up' />} />
						  
						<Route path='sign-in' element={<SignIn />} />
						<Route path='sign-up' element={<SignUp />} />
					</Route>
					<Route path='/dashboard/*' element={<Dashboard />}>
						<Route path='*' element={<Navigate to='submission' />} />
						<Route path='submission' element={<Submissions />} />
						<Route path='your-cards' element={<Cards />} />
						<Route path='wallet' element={<Wallet />} />
						<Route path='profile' element={<Profile />} />
					</Route>
					<Route path='/dashboard/submission/new' element={<NewSubmission />} />
				</Routes>
			  </BrowserRouter>
			  </PayPalScriptProvider>
		</AuthProvider>
	);
}

export default App;
