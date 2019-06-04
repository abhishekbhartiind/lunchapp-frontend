import React from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from '../routes'
import Main from './apps/layouts/Mainlayout'
import withLoadable from '../tools/loadable'

function Root(props) {
	const { isAuth } = props.store.authStore
	return (
		<BrowserRouter
		// basename="/💩"
		>
			<Switch>
				{routes &&
					routes.map((route, i) =>
						route.private ? (
							// Private
							<Main key={i}>
								<Route
									{...route}
									component={props => {
										const MyComponent = withLoadable(
											import(`./${route.component}`)
										)
										return isAuth ? (
											<MyComponent {...props} {...route} />
										) : (
											<Redirect to="/login" />
										)
									}}
								/>
							</Main>
						) : (
							// Not private
							<Route
								key={i}
								{...route}
								component={props => {
									const MyComponent = withLoadable(
										import(`./${route.component}`)
									)
									return !isAuth ? (
										<MyComponent {...props} {...route} />
									) : (
										<Redirect to="/" />
									)
								}}
							/>
						)
					)}
			</Switch>
		</BrowserRouter>
	)
}
// export default Root
export default inject('store')(observer(Root))
