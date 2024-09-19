import React, { useState, useEffect } from 'react';
import { LogoNoText } from 'components/Logos';
import FadeSlideInSection from 'components/FadeSlideInSection';
//import { getUserDetails, getOrderHistory } from 'utils/firebase/auth'; // Replace with actual functions

export default function AccountPage() {
  const [userDetails, setUserDetails] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  /*
  useEffect(() => {
    // Fetch user details and order history
    async function fetchData() {
      const user = await getUserDetails();
      const orders = await getOrderHistory();
      setUserDetails(user);
      setOrderHistory(orders);
    }
    fetchData();
  }, []);
  */

  return (
    <div className="flex flex-col w-screen bg-[#f5f5f3]">
      <div className="flex flex-row">
        <div className="w-1/4 min-w-[250px] bg-[#f5f5f3] p-5 border-r-2 border-[#ac9d92] text-[#897c74]">
          <div className="sticky top-0">
            <h2 className="text-2xl font-semibold mb-5">Account Settings</h2>
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Profile</h3>
              <div className="mt-2">
                <p><b>Name:</b> {userDetails.name}</p>
                <p><b>Email:</b> {userDetails.email}</p>
                {/* Add more profile details as needed */}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold">Order History</h3>
              <ul className="list-disc pl-5 mt-2">
                {orderHistory.length > 0 ? (
                  orderHistory.map((order, index) => (
                    <li key={index} className="mb-2">
                      <span><b>Order #{order.id}:</b> {order.date} - ${order.total}</span>
                    </li>
                  ))
                ) : (
                  <li>No orders found.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-3/4 flex flex-col items-center justify-start font-roboto bg-[#f5f5f3]">
          <FadeSlideInSection>
            <LogoNoText args="h-[20vh]" />
          </FadeSlideInSection>

          <FadeSlideInSection className="text-4xl mt-10 text-[#e3bd9e]">
            <b>Account Details</b>
          </FadeSlideInSection>

          {/* Add more sections as needed, e.g., change password, manage subscriptions */}
        </div>
      </div>
    </div>
  );
}
