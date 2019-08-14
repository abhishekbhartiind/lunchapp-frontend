import React, { useState, useEffect } from 'react'
import {
	Divider,
	Select,
	PageHeader,
	Icon,
	Menu,
	Dropdown,
	ConfigProvider
} from 'antd'
import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'
import BgDashboard from '../../assets/images/bg-dashboard.jpg'

const { Option } = Select
function Layout(props) {
	const [currentsite, setCurrentsite] = useState(
		window.localStorage.getItem('currentsite')
	)
	const { children } = props

	const [me, setMe] = useState('')

	useEffect(() => {
		// code to run on component mount
		props.client
			.query({ query: ME })
			.then(res => {
				// console.log(res.data.me)
				setMe(res.data.me)
			})
			.catch(err => {
				console.log(err)
			})
	})

	function onLogout() {
		props.store.authStore.logout()
		props.client.resetStore()
		props.history.push('/login')
	}

	function handleChange(value) {
		setCurrentsite(value)
		window.localStorage.setItem('currentsite', value)
	}

	const userPers = JSON.parse(localStorage.getItem('user-permissions')).map(
		ele => ({
			siteName: ele.siteName,
			siteId: ele.siteId,
			permissions: ele.sitepermissions
		})
	)

	const currentPage = children.props.location.pathname.slice(4).toUpperCase()

	const sitesHasPermission = userPers.filter(
		ele => ele.permissions.indexOf(currentPage) !== -1
	)

	const { t } = props

	const menu = (
		<Menu>
			<Menu.Item>
				<Icon type="user" />
				<span>{me.username}</span>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item onClick={onLogout}>
				<Icon type="logout" />
				<span>{t('common.Log out')}</span>
			</Menu.Item>
		</Menu>
	)

	function changeLocale({ key }) {
		// console.log(key)
		if (key === 'vi') {
			props.i18n.changeLanguage('vi')
			props.store.i18nStore.changeLanguage('vi')
		} else {
			props.i18n.changeLanguage('en')
			props.store.i18nStore.changeLanguage('en')
		}
	}
	// ;<Select
	// 	key="3"
	// 	showArrow={false}
	// 	defaultValue={
	// 		window.localStorage.getItem('i18nextLng') === 'vi' ? 'vi' : 'en'
	// 	}
	// 	onChange={changeLocale}
	// 	style={{ width: 42, backgroundColor: 'transparent' }}
	// >
	// 	<Option key="vi" value="vi">
	// 		<span role="img" aria-label="vi">
	// 			🇻🇳
	// 		</span>
	// 	</Option>
	// 	<Option key="en" value="en">
	// 		<span role="img" aria-label="en">
	// 			🇬🇧
	// 		</span>
	// 	</Option>
	// </Select>

	const languages = (
		<Menu onClick={changeLocale}>
			<Menu.Item key="vi" value="vi">
				<span role="img" aria-label="vi">
					🇻🇳
				</span>
			</Menu.Item>
			<Menu.Item key="en" value="en">
				<span role="img" aria-label="en">
					🇬🇧
				</span>
			</Menu.Item>
		</Menu>
	)
	const { store } = props
	return (
		<div
			style={{
				height: '100vh',
				backgroundImage: `url(${BgDashboard})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover',
				overflowY: 'scroll',
				WebkitOverflowScrolling: 'touch'
			}}
		>
			<ConfigProvider locale={store.i18nStore.locale}>
				<PageHeader
					style={{ backgroundColor: 'transparent' }}
					title={
						<Icon
							type="home"
							onClick={() => children.props.history.push('/🥢')}
							style={{ color: '#ffffff' }}
						/>
					}
					onBack={() => children.props.history.goBack()}
					backIcon={<Icon type="arrow-left" style={{ color: '#ffffff' }} />}
					extra={[
						<Select
							key="1"
							disabled={children.props.location.pathname.split('/').length > 3}
							defaultValue={currentsite}
							style={{ width: '10em', marginRight: '.5em' }}
							onChange={handleChange}
						>
							{children.props.location.pathname === '/🥢'
								? JSON.parse(
										window.localStorage.getItem('user-permissions')
								  ).map(item => (
										<Option key={item.siteId} value={item.siteId}>
											{item.siteName}
										</Option>
								  ))
								: sitesHasPermission.map(item => (
										<Option key={item.siteId} value={item.siteId}>
											{item.siteName}
										</Option>
								  ))}
						</Select>,
						<Dropdown key="2" overlay={menu} placement="bottomCenter">
							<Icon
								type="user"
								style={{
									color: '#ffffff',
									fontSize: '16px',
									fontWeight: 'bold',
									cursor: 'pointer',
									marginRight: '.5em'
								}}
							/>
						</Dropdown>,
						<Dropdown key="3" overlay={languages} placement="bottomCenter">
							{/* <Icon
								type="global"
								style={{
									color: '#ffffff',
									fontSize: '16px',
									fontWeight: 'bold',
									cursor: 'pointer',
									marginRight: '.5em'
								}}
							/> */}
							<span style={{ color: '#fff' }}>
								{window.localStorage.getItem('i18nextLng') === 'vi'
									? 'VI'
									: 'EN'}
							</span>
						</Dropdown>
					]}
					footer={<Divider style={{ margin: '0' }} />}
				/>
			</ConfigProvider>
			<div>{React.cloneElement(children, { siteId: currentsite })}</div>
		</div>
	)
}

const ME = gql`
	query {
		me {
			username
		}
	}
`

export default withApollo(
	withRouter(inject('store')(observer(withTranslation('translations')(Layout))))
)
