import AccountPage from './AccountPage';
import OrdersPage from './OrdersPage';
import WatchlistPage from './WatchlistPage';
import SettingsPage from './SettingsPage';

const USER_ROUTES = [
    { path: "account", element: <AccountPage /> },
    { path: "orders", element: <OrdersPage /> },
    { path: "watchlist", element: <WatchlistPage /> },
    { path: "settings", element: <SettingsPage /> },
]

export default USER_ROUTES;