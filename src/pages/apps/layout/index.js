import React from 'react'
import { Button, Divider } from 'antd'
import BgDashboard from '../../../assets/images/bg-dashboard.jpg'

function Layout(props) {
	const { children } = props
	// console.log(children)
	return (
		<div
			style={{
				height: '100vh',
				backgroundImage: `url(${BgDashboard})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover',
				overflowY: 'auto'
			}}
		>
			{children.props.location.pathname === '/🥢' ? (
				children
			) : (
				<>
					<Button
						type="link"
						icon="left"
						size="large"
						style={{ color: '#ffffff' }}
						onClick={() => children.props.history.push('/🥢')}
					/>
					<Divider style={{ margin: '0 0' }} />
					{children}
				</>
			)}
		</div>
	)
}

export default Layout
