import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import withLoadable from '../../tools/loadable'

export default function Root(props) {
	const { routes } = props
	return (
		<Switch>
			{routes &&
				routes.map(route => (
					<Route
						key={route.label}
						{...route}
						component={props1 => {
							const MyComponent = withLoadable(import(`./${route.component}`))
							return <MyComponent {...props1} {...route} routes={route.routes} />
						}}
					/>
				))}
			<Redirect to="/🥢" />
		</Switch>
	)
}
