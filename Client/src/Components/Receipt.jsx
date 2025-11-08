import PropTypes from "prop-types";

const Receipt = ({ receipt, isOpen, onClose }) => {
  if (!isOpen || !receipt) return null;

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Order Successful!
            </h2>
            <p className="text-gray-600">Thank you for your purchase</p>
          </div>

          <div className="border-t border-b py-4 mb-4">
            <h3 className="font-semibold mb-3">Order Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-mono">#{receipt.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span>{formatDate(receipt.timestamp)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="capitalize text-green-600 font-semibold">
                  {receipt.status}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-3">Customer Information</h3>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-gray-600">Name:</span>{" "}
                {receipt.customerInfo.name}
              </p>
              <p>
                <span className="text-gray-600">Email:</span>{" "}
                {receipt.customerInfo.email}
              </p>
              {receipt.customerInfo.phone && (
                <p>
                  <span className="text-gray-600">Phone:</span>{" "}
                  {receipt.customerInfo.phone}
                </p>
              )}
              {receipt.customerInfo.address && (
                <p>
                  <span className="text-gray-600">Address:</span>{" "}
                  {receipt.customerInfo.address}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Items Ordered</h3>
            <div className="space-y-3">
              {receipt.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price} x {item.qty}
                    </p>
                  </div>
                  <p className="font-semibold">${item.subtotal.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Paid:</span>
              <span className="text-green-600">${receipt.total}</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              A confirmation email has been sent to {receipt.customerInfo.email}
            </p>
            <button
              onClick={onClose}
              className="w-full bg-lime-400 hover:bg-lime-500 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Receipt.propTypes = {
  receipt: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Receipt;
