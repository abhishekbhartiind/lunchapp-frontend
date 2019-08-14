import gql from 'graphql-tag'

const GET_MENU_ORDERS = gql`
	query($siteId: String!) {
		menuOrderJ(siteId: $siteId) {
			menuId
			dishes {
				dishId
				name
				MyOrderQuantity
				orderQuantityNow
				orderQuantityMax
			}
		}
	}
`

const ORDER_DISH = gql`
	mutation($input: OrderJInput!) {
		orderJDish(input: $input) {
			_id
			userId
			menuId
			dishId
			count
		}
	}
`

const GET_MENU_PUBLISH_BY_SITE_ID = gql`
	query($siteId: String!) {
		findMenuPublishBySiteId(siteId: $siteId) {
			_id
			name
			shopId
			siteId
		}
	}
`

const ORDER_SUBSCRIPTION = gql`
	subscription {
		isUpdated
	}
`

const GET_DATA_ORDER_SUBSCRIPTION = gql`
	subscription {
		isUpdatedOrder {
			menuId
			dishId
			orderQuantityNow
			impactUserId
			OrderQuantityOfImpactUser
		}
	}
`

export {
	GET_MENU_PUBLISH_BY_SITE_ID,
	GET_MENU_ORDERS,
	ORDER_DISH,
	ORDER_SUBSCRIPTION,
	GET_DATA_ORDER_SUBSCRIPTION
}
