import AccountPage from './AccountPage';
import OrdersPage from './OrdersPage';
import WatchlistPage from './WatchlistPage';

const USER_ROUTES = [
    { path: "account", element: <AccountPage /> },
    { path: "orders", element: <OrdersPage /> },
    { path: "watchlist", element: <WatchlistPage /> },
]

export default USER_ROUTES;